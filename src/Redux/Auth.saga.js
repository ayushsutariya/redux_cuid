import { call, put, takeEvery, all } from 'redux-saga/effects'
import Api from '...'
import SignApi from '../common/api/Auth.api';
import { EMAIL_VERIFICATION } from '../Action/Auth.action';

function* SignUp(action) {
   try {
      const user = yield call(SignApi, action.payload);
      yield put(EMAIL_VERIFICATION(user));
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", SignUp);
}

export function* authSaga(){
    yield all ([
        mySaga()
    ])
}

export default mySaga;