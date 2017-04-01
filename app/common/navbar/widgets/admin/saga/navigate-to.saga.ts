import {takeEvery} from 'redux-saga';
import {put} from 'redux-saga/effects';
import {NAVIGATE_TO_ROUTE} from '../admin-options.action-types';

function* navigate({route}) {

  yield put({
    type: '@@router/LOCATION_CHANGE',
    payload: {
      action: 'PUSH',
      pathname: route,
      search: '',
      query: {}
    }
  });

}

export function* navigateToSaga() {
  yield* takeEvery(NAVIGATE_TO_ROUTE, navigate);
}
