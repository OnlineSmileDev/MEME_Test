import { updateScreenParam } from "../actions/screen/screenActions";
import { userLoadFromStorage } from "../actions/user/userActions";
import { UpdateUserBegin, fetchUserBegin, resetUserBegin } from "../actions/api/userApiActions";
import { createUserUpdateItem } from "../../services/api/helpers/users/userApiHelper";
import { UserFields } from "../../services/api/helpers/users/userFields";
import { UserDB } from "../../services/storage";
import { fetchMatchesBegin, matchResponseBegin, fetchLatestMatchesBegin, fetchCurrentMatchBegin } from "../actions/api/matchesApiActions";
import { timerStart, timerStop, TimerTypes } from "../actions/common/timerState";
import { fetchMemeResponseBegin, respondMemeItemBegin, fetchUserMemeItemBegin } from "../actions/api/memeItemActions";
import { chatListSummaryBegin, chatHistoryBegin } from "../actions/api/chatApiActions";
import RouteNames from "../../navigation/common/RouteNames";
import Tracking from "../../services/tracking/Tracking";
import TrackableEvents from "../../services/tracking/TrackableEvents";

export default function commonDispatchProps(dispatch, routeName) {
    return {
        goToShare: (navigation, data) => {
            navigation.navigate(RouteNames.ShareWithMatch, { data: data });
        },
        updateScreenData: (key, value) => {
            dispatch(updateScreenParam({ screen: routeName, key: key, value: value }));
        },
        loadUserFromLocal: (user) => {
            dispatch(userLoadFromStorage(user));
        },
        updateUser: (id, data) => {
            dispatch(UpdateUserBegin({ id: id, body: data }));
        },
        fetchProfile: (id) => {
            dispatch(fetchUserBegin({ by: 'id', id: id }));
        },
        updateLastScreen: (id, routeData = {}) => {
            const ls = {
                name: routeName,
                data: routeData
            };
            let data = createUserUpdateItem(UserFields.LastScreen, JSON.stringify(ls))
            UserDB.updateUser({
                lastScreen: ls
            })
            dispatch(UpdateUserBegin({ id: id, body: [data] }));
        },
        fetchMatchDesires: (user) => {
            let res = {
                age: {},
                distance: {},
                height: {}
            }
            res.age = user.matchDesires.matchCriteria.find((value, index) => { return value.name === 'age'; });
            res.distance = user.matchDesires.matchCriteria.find((value, index) => { return value.name === 'distance'; });
            res.height = user.matchDesires.matchCriteria.find((value, index) => { return value.name === 'height'; });
            return res;
        },
        respondToMeme: (memeItemId, profileId, response) => {
            const data = {
                id: '',
                memeItemId: memeItemId,
                profileId: profileId,
                response: response,
                hasBeenApplied: false
            }
            dispatch(respondMemeItemBegin(data));
            switch (response) {
                case 'fire':
                    Tracking.Track(TrackableEvents.FireResponse);
                    Tracking.Increment(TrackableEvents.TotalFireResponse, 1);
                    break;
                case 'like':
                    Tracking.Track(TrackableEvents.LikeResponse);
                    Tracking.Increment(TrackableEvents.TotalLikeResponse, 1);
                    break;
                case 'dislike':
                    Tracking.Track(TrackableEvents.DislikeResponse);
                    Tracking.Increment(TrackableEvents.TotalDislikeResponse, 1);
                    break;
                case 'skip':
                    Tracking.Track(TrackableEvents.SkipResponse);
                    Tracking.Increment(TrackableEvents.TotalSkipResponse, 1);
                    break;
            }
            Tracking.Increment(TrackableEvents.TotalMemesTapped, 1);
            // console.log(data);
        },
        fetchMatches: (id) => {
            dispatch(fetchMatchesBegin({ profileId: id, maxCount: 4 }));
        },
        fetchCurrentMatch: (id) => {
            dispatch(fetchCurrentMatchBegin({ by: 'id', id: id }));
        },
        fetchLatestMatches: (id) => {
            dispatch(fetchLatestMatchesBegin({ id: id, count: 7 }));
        },
        fetchFireMemes: (id) => {
            dispatch(fetchMemeResponseBegin({ profileId: id, type: 'fire' }));
        },
        resetTimers: (timers) => {
            Object.values(timers).forEach(x => {
                clearInterval(x);
            })
        },
        resetUser: (userId) => {
            console.log('reset User');
            dispatch(resetUserBegin({ id: userId }));
        },
        rejectMatch: (userId, matchItemId, source) => {
            dispatch(matchResponseBegin({
                userId: userId,
                matchItemId: matchItemId,
                saveMatch: false,
                source: source
            }));
        },
        acceptMatch: (userId, matchItemId, source) => {
            dispatch(matchResponseBegin({
                userId: userId,
                matchItemId: matchItemId,
                saveMatch: true,
                source: source
            }));
        },
        fetchUserMemes: (profileId, count, memeList, isNew) => {
            let arr = [];
            memeList.forEach((value, index) => {
                arr.push(parseInt(value.id));
            });
            dispatch(fetchUserMemeItemBegin({ userId: profileId, count: count, ignoreList: arr, isNew: isNew }));
        },
        fetchChatSummary: (profileId) => {
            dispatch(chatListSummaryBegin({ id: profileId }));
        },
        fetchChatHistory: (fromUserId, toUserId) => {
            dispatch(chatHistoryBegin({ fromUserId: fromUserId, toUserId: toUserId }));
        },
        startTimer: (opts) => {
            if (opts !== undefined) {
                if (opts.timeout === undefined) {
                    opts.timeout = 1000;
                }
                if (opts.type === undefined) {
                    opts.type = TimerTypes.INTERVAL;
                }
            }
            console.log(`[startTimer] name=${opts.name} timeout=${opts.timeout} type=${opts.type}`);
            // console.log(Object.keys(opts))
            if (opts.type === TimerTypes.INTERVAL) {
                let cinterval = setInterval(() => opts.callbackFn(opts._this), opts.timeout);
                dispatch(timerStart({
                    type: opts.type,
                    name: routeName + opts.name,
                    timeout: opts.timeout,
                    cinterval: cinterval
                }));
            }
            else if (opts.type === TimerTypes.TIMEOUT) {
                setTimeout(() => opts.callbackFn(opts._this), opts.timeout);
            }

        },
        stopTimer: (opts) => {
            //name, type = TimerTypes.INTERVAL
            if (opts !== undefined) {
                if (opts.type === undefined) {
                    opts.type = TimerTypes.INTERVAL;
                }
            }
            console.log('stopTimer : ' + opts.name);
            dispatch(timerStop({
                type: opts.type,
                name: routeName + opts.name
            }));
        },
        wait: (timeout) => {
            return new Promise(resolve => {
                setTimeout(resolve, timeout);
            });
        }
    }
}