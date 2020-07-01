import { takeEvery } from 'redux-saga/effects';
import ServiceFactory from '../../../services/api/ServiceFactory';
import { callApiSaga } from '../common/callApiSaga';
import { storageUploadSuccess, storageUploadFailure, STORAGE_UPLOAD_BEGIN } from '../../../state/actions/api/storageApiActions';

const storageService = ServiceFactory['get']('storage');

function* upload(action) {
    yield callApiSaga(storageService.upload, action.payload, storageUploadSuccess, storageUploadFailure);
}

function* handleSagas(action) {
    switch (action.type) {
        case STORAGE_UPLOAD_BEGIN:
            yield upload(action);
            break;
        default:
            console.log('handle storage saga not found: ' + JSON.stringify(action));
    }
}

function* storageApiSaga() {
    yield takeEvery([
        STORAGE_UPLOAD_BEGIN
    ], handleSagas);
}

export default storageApiSaga;