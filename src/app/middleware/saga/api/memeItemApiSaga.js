import { takeEvery } from 'redux-saga/effects';
import ServiceFactory from '../../../services/api/ServiceFactory';
import { callApiSaga } from '../common/callApiSaga';
import { FETCH_MEMEITEM_BEGIN, fetchMemeItemSuccess, fetchMemeItemFailure, respondMemeItemSuccess, respondMemeItemFailure, RESPOND_MEMEITEM_BEGIN, CALCULATE_HUMORSTYLE_BEGIN, calculateHumorStyleSuccess, calculateHumorStyleFailure, FETCH_MEMERESPONSE_BEGIN, fetchMemeResponseFailure, fetchMemeResponseSuccess, fetchUserMemeItemSuccess, fetchUserMemeItemFailure, FETCH_USER_MEMEITEM_BEGIN } from '../../../state/actions/api/memeItemActions';


const memeItemService = ServiceFactory['get']('memeItem');

function* fetchMemes(action) {
    yield callApiSaga(memeItemService.fetchList, action.payload, fetchMemeItemSuccess, fetchMemeItemFailure);
}
function* fetchUserList(action) {
    yield callApiSaga(memeItemService.fetchUserListV2, action.payload, fetchUserMemeItemSuccess, fetchUserMemeItemFailure);
}
function* fetchResponse(action) {
    yield callApiSaga(memeItemService.fetchResponse, action.payload, fetchMemeResponseSuccess, fetchMemeResponseFailure);
}
function* respond(action) {
    yield callApiSaga(memeItemService.respond, action.payload, respondMemeItemSuccess, respondMemeItemFailure);
}
function* calculateHS(action) {
    yield callApiSaga(memeItemService.fetchHumorStyle, action.payload, calculateHumorStyleSuccess, calculateHumorStyleFailure);
}

function* handleSagas(action) {
    switch (action.type) {
        case FETCH_MEMEITEM_BEGIN:
            yield fetchMemes(action);
            break;
        case RESPOND_MEMEITEM_BEGIN:
            yield respond(action);
            break;
        case CALCULATE_HUMORSTYLE_BEGIN:
            yield calculateHS(action);
            break;
        case FETCH_MEMERESPONSE_BEGIN:
            yield fetchResponse(action);
            break;
        case FETCH_USER_MEMEITEM_BEGIN:
            yield fetchUserList(action);
            break;

        default:
            ;
    }
}

function* memeItemApiSaga() {
    yield takeEvery([
        FETCH_MEMEITEM_BEGIN,
        RESPOND_MEMEITEM_BEGIN,
        CALCULATE_HUMORSTYLE_BEGIN,
        FETCH_MEMERESPONSE_BEGIN,
        FETCH_USER_MEMEITEM_BEGIN
    ], handleSagas);
}

export default memeItemApiSaga;
