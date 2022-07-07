import firebaseConfig from './config';
import ReduxSagaFirebase from 'redux-saga-firebase';
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import '@firebase/firestore'
const fireApp  = initializeApp(firebaseConfig);
const fireDb = getFirestore(fireApp);
const fireAuth = getAuth();
// myFirebase.firestore().settings({
//   host: 'localhost:8080',
//   ssl: false,
// });
export const initializeFireApp = async () =>{
	try {
		await initializeApp(firebaseConfig);
	} catch (error) {
		console.log(error);
	}
}
const rsf = new ReduxSagaFirebase(fireApp);
export { rsf, fireApp, fireDb, fireAuth };

// export const googlePopupSignin = signInWithPopup(auth, googleAuthProvider).then((result) =>{
// 	const credentials = GoogleAuthProvider.credentialFromResult(result);
// 	const token = credentials?.accessToken;
// 	const user = credentials?.toJSON;
// 	console.log("user : ", user, "token : ", token);
// });