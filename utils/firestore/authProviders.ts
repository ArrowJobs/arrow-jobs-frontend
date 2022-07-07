import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth();
auth.languageCode = 'it';

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope('profile');
googleAuthProvider.addScope('email');

export const googlePopupSignin = async () =>{
    try {
        const result = await signInWithPopup(auth, googleAuthProvider);
        console.log(result.user)
        return result.user;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode&& errorCode, errorMessage&& errorMessage, email&& email, credential && credential);
    }

}

