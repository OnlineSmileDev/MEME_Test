import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import ServiceFactory from '../../../services/api/ServiceFactory';
import { callApiSaga } from '../common/callApiSaga';

import { CHATLIST_SUMMARY_BEGIN, chatListSummarySuccess, chatListSummaryFailure, chatHistorySuccess, chatHistoryFailure, CHAT_HISTORY_BEGIN, CHAT_SEND_BEGIN, chatSendSuccess, chatSendFailure, chatFetchSuccess, chatFetchFailure, CHAT_FETCH_BEGIN } from '../../../state/actions/api/chatApiActions';

const chatService = ServiceFactory['get']('chat');

function* summary(action) {
    yield callApiSaga(chatService.summary, action.payload, chatListSummarySuccess, chatListSummaryFailure);
}
function* send(action) {
    yield callApiSaga(chatService.send, action.payload, chatSendSuccess, chatSendFailure);
}
function* fetch(action) {
    yield callApiSaga(chatService.fetch, action.payload, chatFetchSuccess, chatFetchFailure);
}
function* fetchHistory(action) {
    yield callApiSaga(chatService.fetchHistory, action.payload, chatHistorySuccess, chatHistoryFailure);
}

function* handleSagas(action) {
    switch (action.type) {
        case CHATLIST_SUMMARY_BEGIN:
            yield summary(action);
            break;
        case CHAT_HISTORY_BEGIN:
            yield fetchHistory(action);
            break;
        case CHAT_SEND_BEGIN:
            yield send(action);
            break;
        case CHAT_FETCH_BEGIN:
            yield fetch(action);
            break;
        default:
            console.log(`error: failed to decode ${action.type}`);
            break;
    }
}

function* chatApiSaga() {
    yield takeEvery([
        CHATLIST_SUMMARY_BEGIN,
        CHAT_HISTORY_BEGIN,
        CHAT_SEND_BEGIN,
        CHAT_FETCH_BEGIN
    ], handleSagas);
}

export default chatApiSaga;