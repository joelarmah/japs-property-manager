import { all, fork, put, takeEvery } from "redux-saga/effects";
import { createPropertyFailed, createPropertySuccess } from "./actions";
import { CREATE_PROPERTY } from "./constants";

/**
 * Login the user
 * @param {*} payload - email and password
 */
function* createProperty({ payload: { property } }) {
    try {
        const response = yield call(logInWithEmailAndPassword, email, password);
        yield put(createPropertySuccess(response));
    } catch (error) {
        yield put(createPropertyFailed(error));
    }
}


export function* watchCreateProperty() {
    yield takeEvery(CREATE_PROPERTY, createProperty);
}

function* propertySaga() {
    yield all([fork(watchCreateProperty)]);
}

export default propertySaga;