import { put, all, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { fireAuth } from 'utils/firestore';
import { fireApp } from 'utils/firestore';
import { setDocument, getDocument } from './firebase';
import { clearUserState, IUserState, setUser, setUserLoading } from '../reducers/userReducer';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { PayloadAction } from '@reduxjs/toolkit';

const auth = getAuth(fireApp);
function* googleLoginSaga(): any {
  const provider = new GoogleAuthProvider();
  try {
    console.log(fireAuth.currentUser?.uid);
    yield call(signInWithPopup, auth, provider);
   
  } catch (error) {
    console.log(error);
  }
}

//Action dispacted from header component user observer
function* loginUserSaga(action: PayloadAction<IUserState>): any {
  yield put(setUserLoading(true));
  try {
    const { payload } = action;
    console.log(payload);
    const snapshot = yield call(getDocument, 'users', payload.uid);
    console.log('Snapshot is = ', JSON.stringify(snapshot.data()));
    if (snapshot.data.displayName) {
      const data = snapshot.data();
      yield put(setUser(data));
    } else {
      yield call(setDocument, 'users', payload.uid, true, payload);
      console.log('created new user');
      yield put(setUser(payload));
    }
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserLoading(false));
  }
}

function* logoutUserSaga(): any {
  try {
    yield call(signOut, auth);
    yield put(clearUserState);
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery('user/signInWithGPopUp', googleLoginSaga), 
    takeLatest('user/loginUser', loginUserSaga),
    takeLatest('user/logoutUser', logoutUserSaga)
  ]);
}
