import { takeEvery } from 'redux-saga/effects';
import ServiceFactory from '../../../services/api/ServiceFactory';
import { callApiSaga } from '../common/callApiSaga';
import { LOGIN_BEGIN, loginSuccess, loginFailure, waitlistCodeSuccess, waitlistCodeFailure, WAITLISTCODE_BEGIN, fetchUserSuccess, fetchUserFailure, FETCHUSER_BEGIN, UPDATEUSER_BEGIN, UpdateUserSuccess, UpdateUserFailure, resetUserSuccess, resetUserFailure, RESETUSER_BEGIN } from '../../../state/actions/api/userApiActions';

const userService = ServiceFactory['get']('user');
const waitlistService = ServiceFactory['get']('waitlist');

function* login(action) {
    yield callApiSaga(userService.match, action.payload, loginSuccess, loginFailure);
}
function* fetchUser(action) {
    yield callApiSaga(userService.fetch, action.payload, fetchUserSuccess, fetchUserFailure);
}
function* updateUser(action) {
    yield callApiSaga(userService.update, action.payload, UpdateUserSuccess, UpdateUserFailure);
}
function* resetUser(action) {
    yield callApiSaga(userService.reset, action.payload, resetUserSuccess, resetUserFailure);
}
function* claimCode(action) {
    yield callApiSaga(waitlistService.claim, action.payload, waitlistCodeSuccess, waitlistCodeFailure);
}

function* handleSagas(action) {
    switch (action.type) {
        case LOGIN_BEGIN:
            yield login(action);
            break;
        case WAITLISTCODE_BEGIN:
            yield claimCode(action);
            break;
        case FETCHUSER_BEGIN:
            yield fetchUser(action);
            break;
        case UPDATEUSER_BEGIN:
            yield updateUser(action);
            break;
        case RESETUSER_BEGIN:
            yield resetUser(action);
            break;
        default:
            console.log('handle profile saga not found: ' + JSON.stringify(action));
    }
}

function* userApiSaga() {
    yield takeEvery([
        LOGIN_BEGIN,
        WAITLISTCODE_BEGIN,
        FETCHUSER_BEGIN,
        UPDATEUSER_BEGIN,
        RESETUSER_BEGIN
    ], handleSagas);
}

export default userApiSaga;