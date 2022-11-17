import { initializeApp } from 'firebase/app';
import { 
    getAuth, signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDCjl3QchkNt2L9P0PgbJFzpmQitelfu7o",
    authDomain: "gdsc-job-board.firebaseapp.com",
    projectId: "gdsc-job-board",
    storageBucket: "gdsc-job-board.appspot.com",
    messagingSenderId: "532368010717",
    appId: "1:532368010717:web:f39edcb72f17131cd85a34"   
}

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
});


const jobBoardApp = initializeApp(firebaseConfig);
export const auth = getAuth(jobBoardApp);

export const signUpWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithGoogle = async () => {
    await signInWithRedirect(auth, googleAuthProvider);
}

export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
}

export const signOutAuth = async () => {
    return await signOut(auth);
}