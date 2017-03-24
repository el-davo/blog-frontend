import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {toastr} from 'react-redux-toastr';
import {REQUEST_LOGIN} from '../admin.action-types';
import {loginFailed, loginSuccess} from '../admin.actions';
import {AdminService} from '../admin.service';
import {Auth} from '../admin.state';

function* fetch({username, password}) {
  try {
    const adminService = new AdminService();

    const auth: Auth = yield call(adminService.login.bind(adminService), username, password);

    toastr.success('Alert', 'Successfully logged in');

    yield put(loginSuccess(auth));
  } catch (err) {
    toastr.error('Error', 'Invalid Credentials');

    yield put(loginFailed());
  }
}

export function* adminLoginSaga() {
  yield* takeEvery(REQUEST_LOGIN, fetch);
}
