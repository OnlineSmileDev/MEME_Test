import { FETCH_MEMEITEM_SUCCESS, UPDATE_USER_MEMEITEM, FETCH_MEMERESPONSE_SUCCESS, FETCH_USER_MEMEITEM_SUCCESS } from "../../actions/api/memeItemActions";


export const memeItemState = {
    polarizers: [],
    userList: [],
    fireMemes: {
    }
}


export function memeItemReducer(state = memeItemState, action) {
    const { payload } = action;
    switch (action.type) {
        case FETCH_MEMEITEM_SUCCESS:
            return {
                ...state,
                polarizers: payload
            };
        case FETCH_USER_MEMEITEM_SUCCESS:
            console.log('Updated meme items');
            let userList = state.userList.concat(payload);
            return {
                ...state,
                userList: userList
            }
        case UPDATE_USER_MEMEITEM:
            let ul = state.userList;
            ul.shift();
            return {
                ...state,
                userList: ul
            };
        case FETCH_MEMERESPONSE_SUCCESS:
            let pid = payload.length > 0 ? payload[0].profileId : '';
            // console.log(pid);
            if (pid === '') {
                return {
                    ...state
                }
            }
            return {
                ...state,
                fireMemes: {
                    ...state.fireMemes,
                    [pid]: payload
                }
            };
        default:
            return {
                ...state
            };
    }
}