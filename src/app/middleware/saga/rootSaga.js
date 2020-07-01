import { fork } from 'redux-saga/effects'
import userApiSaga from './api/userApiSaga'
import memeItemApiSaga from './api/memeItemApiSaga';
import storageApiSaga from './api/storageApiSaga';
import matchesApiSaga from './api/matchesApiSaga';
import chatApiSaga from './api/chatApiSaga';

export default function* rootSaga() {
    yield fork(userApiSaga);
    yield fork(memeItemApiSaga);
    yield fork(storageApiSaga);
    yield fork(matchesApiSaga);
    yield fork(chatApiSaga);
}