import {takeEvery} from 'redux-saga';
import {put} from 'redux-saga/effects';
import {toastr} from 'react-redux-toastr';
import {REQUEST_LOGOUT} from '../admin.action-types';
import {logoutFailed, logoutSuccess} from '../admin.actions';

function* logout() {
  try {
    yield put(logoutSuccess());

    toastr.success('Alert', 'Successfully logged out');

  } catch (err) {
    yield put(logoutFailed());

    toastr.error('Error', 'An error occurred logging out');
  }
}

export function* adminLogoutSaga() {
  yield* takeEvery(REQUEST_LOGOUT, logout);
}
