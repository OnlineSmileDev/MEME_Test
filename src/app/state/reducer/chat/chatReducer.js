import { CHATLIST_SUMMARY_SUCCESS, CHAT_HISTORY_SUCCESS, CHAT_SEND_SUCCESS, CHAT_FETCH_BEGIN, CHAT_FETCH_SUCCESS } from "../../actions/api/chatApiActions";

export const chatState = {
    chatListSummary: [],
    chatHistory: {}
}

export function chatReducer(state = chatState, action) {
    const { payload } = action;
    switch (action.type) {
        case CHATLIST_SUMMARY_SUCCESS:
            return {
                ...state,
                chatListSummary: payload
            }
        case CHAT_HISTORY_SUCCESS:
            return {
                ...state,
                chatHistory: {
                    ...state.chatHistory,
                    [payload.toUserId]: payload.history
                }
            }
        case CHAT_SEND_SUCCESS:
            console.log(`chat send success: ${payload}`);
            return {
                ...state
            }
        case CHAT_FETCH_SUCCESS:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}