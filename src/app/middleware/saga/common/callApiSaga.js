import { call, put, spawn, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import { loaderUpdate } from '../../../state/actions/loader/loaderAction';

export function* callApiSaga(endpoint, payload, onSuccess, onError, extraOnSuccess) {
    yield put(loaderUpdate({ isVisible: true }));
    var succeeded = false;
    try {
        const res = yield call(endpoint, payload);
        // const res = yield join(task);
        const { data } = res;
        if (data.code === 400) {
            yield put(onError(data.data));
            //    yield put(screenCommonSnackbarUpdate({ isVisible: true, message: data.message }));
        }
        else {
            succeeded = true;
            yield put(onSuccess(data.data));
            if (extraOnSuccess) {
                yield put(extraOnSuccess(data.data));
            }
        }
        yield put(loaderUpdate({ isVisible: false }));
        return succeeded;
    }
    catch (e) {
        // console.log('ERROR:' + JSON.stringify(e));
        // yield put(screenCommonSnackbarUpdate({ isVisible: true, message: 'a network error has occured' }));
        yield put(loaderUpdate({ isVisible: false }));
        yield put(onError({ message: JSON.stringify(e) }));
        return succeeded;
    }
}