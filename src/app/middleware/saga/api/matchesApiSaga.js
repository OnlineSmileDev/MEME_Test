import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import ServiceFactory from '../../../services/api/ServiceFactory';
import { callApiSaga } from '../common/callApiSaga';
import { FETCH_MATCHES_BEGIN, fetchMatchesSuccess, fetchMatchesFailure, matchResponseSuccess, matchResponseFailure, MATCH_RESPONSE_BEGIN, FETCH_LATESTMATCHES_BEGIN, fetchLatestMatchesSuccess, fetchLatestMatchesFailure, fetchCurrentMatchSuccess, fetchCurrentMatchFailure, FETCH_CURRENTMATCH_BEGIN } from '../../../state/actions/api/matchesApiActions';

const userService = ServiceFactory['get']('user');
const matchService = ServiceFactory['get']('match');

function* fetchMatches(action) {
    yield callApiSaga(matchService.fetch, action.payload, fetchMatchesSuccess, fetchMatchesFailure);
}
function* fetchCurrentMatch(action) {
    yield callApiSaga(userService.fetch, action.payload, fetchCurrentMatchSuccess, fetchCurrentMatchFailure);
}
function* fetchLatestMatches(action) {
    yield callApiSaga(matchService.latest, action.payload, fetchLatestMatchesSuccess, fetchLatestMatchesFailure);
}
function* respond(action) {
    yield callApiSaga(matchService.respond, action.payload, matchResponseSuccess, matchResponseFailure);
}

function* handleSagas(action) {
    switch (action.type) {
        case FETCH_MATCHES_BEGIN:
            yield fetchMatches(action);
            break;
        case FETCH_LATESTMATCHES_BEGIN:
            yield fetchLatestMatches(action);
            break;
        case MATCH_RESPONSE_BEGIN:
            yield respond(action);
            break;
        case FETCH_CURRENTMATCH_BEGIN:
            yield fetchCurrentMatch(action);
            break;
        default:
            ;
    }
}

function* matchesApiSaga() {
    yield takeEvery([
        FETCH_MATCHES_BEGIN,
        MATCH_RESPONSE_BEGIN,
        FETCH_LATESTMATCHES_BEGIN,
        FETCH_CURRENTMATCH_BEGIN
    ], handleSagas);
}

export default matchesApiSaga;