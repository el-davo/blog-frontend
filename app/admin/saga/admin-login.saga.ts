import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { REQUEST_LOGIN } from '../admin.action-types';
import { loginFailed, loginSuccess } from '../admin.actions';
import { AdminService } from '../admin.service';
import { Auth } from '../admin.state';

function* fetch({username, password}) {
    try {
        const adminService = new AdminService();

        const auth: Auth = yield call(adminService.login.bind(adminService), username, password);

        yield put(loginSuccess(auth));
    } catch (err) {
        yield put(loginFailed());
    }
}

export function* adminLoginSaga() {
    yield* takeEvery(REQUEST_LOGIN, fetch);
}
