import { FETCH_MATCHES_SUCCESS, FETCH_LATESTMATCHES_SUCCESS, FETCH_CURRENTMATCH_SUCCESS, FETCH_LATESTMATCHES_FAILURE, FETCH_CURRENTMATCH_FAILURE } from "../../actions/api/matchesApiActions";
import moment from "moment";
import Tracking from "../../../services/tracking/Tracking";
import TrackableEvents from "../../../services/tracking/TrackableEvents";

export const matchesState = {
    queue: [],
    latest: [],
    lastUpdated: '',
    currentMatch: {}
}

export function matchesReducer(state = matchesState, action) {
    const { payload } = action;
    switch (action.type) {
        case FETCH_MATCHES_SUCCESS:
            // Tracking.Increment(TrackableEvents.TotalProspectsReceived, payload.items.length);
            let queue = state.queue;
            payload.items.forEach((value, index) => queue.push(value));
            return {
                ...state,
                queue: queue,
                lastUpdated: moment()
            }
        case FETCH_LATESTMATCHES_SUCCESS:
            return {
                ...state,
                latest: payload
            }
        case FETCH_CURRENTMATCH_FAILURE:
            return {
                ...state
            }
        case FETCH_CURRENTMATCH_SUCCESS:
            return {
                ...state,
                currentMatch: payload.list[0]
            }
        default:
            return {
                ...state
            }
    }
}