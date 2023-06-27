// @flow
import { Cookies } from 'react-cookie';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// import { fetchJSON } from '../../helpers/api';

import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, FORGET_PASSWORD } from './constants';

import {
    loginUserSuccess,
    loginUserFailed,
    registerUserSuccess,
    registerUserFailed,
    forgetPasswordSuccess,
    forgetPasswordFailed,
} from './actions';
import { logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset } from '../../firebase';

/**
 * Sets the session
 * @param {*} user
 */
const setSession = user => {
    let cookies = new Cookies();
    if (user) cookies.set('user', JSON.stringify(user), { path: '/' });
    else cookies.remove('user', { path: '/' });
};

/**
 * Login the user
 * @param {*} payload - email and password
 */
function* login({ payload: { email, password } }) {
    // const options = {
    //     body: JSON.stringify({ username, password }),
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    // };

    try {
        // const response = yield call(fetchJSON, '/users/authenticate', options);
        const response = yield call(logInWithEmailAndPassword, email, password);
        setSession(response);
        yield put(loginUserSuccess(response));
    } catch (error) {
        yield put(loginUserFailed(error));
        setSession(null);
    }
}

/**
 * Register the user
 */
function* register({ payload: { fullName, email, password } }) {
    try {
        const response = yield call(registerWithEmailAndPassword, fullName, email, password);
        setSession(response);
        yield put(registerUserSuccess(response));
    } catch (error) {
        yield put(registerUserFailed(error));
    }
}

/**
 * forget password
 */
function* forgetPassword({ payload: { email } }) {
    try {
        // const response = yield call(fetchJSON, '/users/password-reset', options);
        const response = yield call(sendPasswordReset, email);
        yield put(forgetPasswordSuccess(response.message));
    } catch (error) {
        yield put(forgetPasswordFailed(error));
    }
}

/**
 * Logout the user
 * @param {*} param0
 */
function* logout({ payload: { history } }) {
    try {
        setSession(null);
        yield call(() => {
            history.push('/account/login');
        });
    } catch (error) {

    }
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, register);
}

export function* watchForgetPassword() {
    yield takeEvery(FORGET_PASSWORD, forgetPassword);
}

function* authSaga() {
    yield all([fork(watchLoginUser), fork(watchLogoutUser), fork(watchRegisterUser), fork(watchForgetPassword)]);
}

export default authSaga;
