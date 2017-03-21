import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { REQUEST_LOGOUT } from '../admin.action-types';
import { logoutFailed, logoutSuccess } from '../admin.actions';
import { Auth } from '../admin.state';

function* logout() {
    try {
        yield put(logoutSuccess());
    } catch (err) {
        yield put(logoutFailed());
    }
}

export function* adminLogoutSaga() {
    yield* takeEvery(REQUEST_LOGOUT, logout);
}
