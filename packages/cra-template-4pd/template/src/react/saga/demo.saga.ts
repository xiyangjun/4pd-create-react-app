import { put, call, takeEvery, all } from 'redux-saga/effects';

import { GET_DEMO, setDemoData } from '../action/demo.action';
import * as api from 'src/api';

function* getDemo() {
    try {
        const { data } = yield call(api.demo.getDemo);
        yield put(setDemoData(data));
    } catch (error) {
        console.error(error);
    }
}

function* watchActions() {
    yield takeEvery(GET_DEMO, getDemo);
}

export function* demoSaga() {
    yield all([watchActions()]);
}
