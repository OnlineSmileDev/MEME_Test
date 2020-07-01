import { LOGIN_SUCCESS, WAITLISTCODE_SUCCESS, FETCHUSER_SUCCESS, RESETUSER_SUCCESS } from "../../actions/api/userApiActions";
import { UserDB } from "../../../services/storage";
import { USER_LOAD_FROMSTORAGE } from "../../actions/user/userActions";
import { CALCULATE_HUMORSTYLE_SUCCESS } from "../../actions/api/memeItemActions";


export const userState = {
    id: '',
    isInvited: false,
    email: '',
    birthday: '',
    firstName: '',
    lastName: '',
    isLoggedIn: false,
    lastLoggedIn: '',
    humorStyle: [],
    matches: {
        queue: [],
        lastUpdated: ''
    },
    isUserReset: false,
    work: null,
    school: null,
    politics: null,
    hasCompletedOnboarding: false
}

const processUserData = (payload) => {
    let { fbDetails } = payload;
    let user = {
        id: payload.id,
        birthday: fbDetails.birthday,
        email: fbDetails.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        isInvited: payload.waitList.isInvited,
        profilePicture: payload.profilePicture,
        lastLoggedIn: new Date(),
        profileBio: payload.profileBio ?? '',
        lastScreen: payload.lastScreen,
        astrology: payload.astrology,
        isTestUser: payload.isTestUser,
        humorStyle: payload.humorStyle?.humorStyle ?? [],
        profileImages: payload.profileImages,
        gender: payload.gender,
        phoneNumber: payload.phoneNumber,
        matchDesires: payload.matchDesires,
        work: payload.work,
        school: payload.school,
        politics: payload.politics,
        height: payload.height,
        smokeWeed: payload.smokeWeed,
        drinkAlcohol: payload.drinkAlcohol,
        useDrugs: payload.useDrugs,
        matches: {
            queue: [],
            lastUpdated: ''
        },
        isUserReset: false,
        hasCompletedOnboarding: payload.hasCompletedOnboarding
    };
    return user;
}
export function userReducer(state = userState, action) {
    const { payload } = action;
    switch (action.type) {
        case CALCULATE_HUMORSTYLE_SUCCESS:
            return {
                ...state,
                humorStyle: state.humorStyle.length === 0 ? (payload ?? []) : state.humorStyle
            }
        case RESETUSER_SUCCESS:
            return {
                ...state,
                isUserReset: true,
                isLoggedIn: false
            }
        case FETCHUSER_SUCCESS:
            return {
                ...state,
                ...processUserData(payload.list[0])
            }
        case LOGIN_SUCCESS:
            // console.log('login success');
            let loginUser = { ...processUserData(payload), isLoggedIn: true };
            UserDB.loginUser(loginUser);
            return {
                ...state,
                ...loginUser
            };
        case USER_LOAD_FROMSTORAGE:
            return {
                ...state,
                id: payload.id,
                isInvited: payload.isInvited,
                email: payload.email,
                birthday: payload.birthday,
                firstName: payload.firstName,
                lastName: payload.lastName,
                isLoggedIn: true,
                lastLoggedIn: payload.lastLoggedIn,
                profilePicture: payload.profilePicture,
                profileBio: payload.profileBio,
                lastScreen: payload.lastScreen,
                astrology: payload.astrology,
                isTestUser: payload.isTestUser,
                humorStyle: payload.humorStyle,
                profileImages: payload.profileImages,
                gender: payload.gender,
                phoneNumber: payload.phoneNumber,
            };
        case WAITLISTCODE_SUCCESS:
            return {
                ...state,
                isInvited: payload.isValid
            };
        default:
            return {
                ...state
            };
    }
}



/*
   {
            type: 'wordsmith',
            score: 30
        },
        {
            type: 'surrealist',
            score: 20
        },
        {
            type: 'satirist',
            score: 16
        },
        {
            type: 'provocatuer',
            score: 13
        },
        {
            type: 'empath',
            score: 10
        },
        {
            type: 'prankster',
            score: 7
        }, {
            type: 'realist',
            score: 4
        },
        */