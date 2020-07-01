import { actionCreatorHOF } from "../common/baseState";

export const CHAT_PREFIX = 'CHAT://';

export const CHATLIST_SUMMARY_BEGIN = CHAT_PREFIX + 'LIST/SUMMARY/BEGIN';
export const CHATLIST_SUMMARY_SUCCESS = CHAT_PREFIX + 'LIST/SUMMARY/SUCCESS';
export const CHATLIST_SUMMARY_FAILURE = CHAT_PREFIX + 'LIST/SUMMARY/FAILURE';

export const chatListSummaryBegin = (data) => actionCreatorHOF(CHATLIST_SUMMARY_BEGIN, data);
export const chatListSummarySuccess = (data) => actionCreatorHOF(CHATLIST_SUMMARY_SUCCESS, data);
export const chatListSummaryFailure = (data) => actionCreatorHOF(CHATLIST_SUMMARY_FAILURE, data);

export const CHAT_HISTORY_BEGIN = CHAT_PREFIX + 'LIST/HISTORY/BEGIN';
export const CHAT_HISTORY_SUCCESS = CHAT_PREFIX + 'LIST/HISTORY/SUCCESS';
export const CHAT_HISTORY_FAILURE = CHAT_PREFIX + 'LIST/HISTORY/FAILURE';

export const chatHistoryBegin = (data) => actionCreatorHOF(CHAT_HISTORY_BEGIN, data);
export const chatHistorySuccess = (data) => actionCreatorHOF(CHAT_HISTORY_SUCCESS, data);
export const chatHistoryFailure = (data) => actionCreatorHOF(CHAT_HISTORY_FAILURE, data);

export const CHAT_SEND_BEGIN = CHAT_PREFIX + 'SEND/BEGIN';
export const CHAT_SEND_SUCCESS = CHAT_PREFIX + 'SEND/SUCCESS';
export const CHAT_SEND_FAILURE = CHAT_PREFIX + 'SEND/FAILURE';

export const chatSendBegin = (data) => actionCreatorHOF(CHAT_SEND_BEGIN, data);
export const chatSendSuccess = (data) => actionCreatorHOF(CHAT_SEND_SUCCESS, data);
export const chatSendFailure = (data) => actionCreatorHOF(CHAT_SEND_FAILURE, data);

export const CHAT_FETCH_BEGIN = CHAT_PREFIX + 'FETCH/BEGIN';
export const CHAT_FETCH_SUCCESS = CHAT_PREFIX + 'FETCH/SUCCESS';
export const CHAT_FETCH_FAILURE = CHAT_PREFIX + 'FETCH/FAILURE';

export const chatFetchBegin = (data) => actionCreatorHOF(CHAT_FETCH_BEGIN, data);
export const chatFetchSuccess = (data) => actionCreatorHOF(CHAT_FETCH_SUCCESS, data);
export const chatFetchFailure = (data) => actionCreatorHOF(CHAT_FETCH_FAILURE, data);