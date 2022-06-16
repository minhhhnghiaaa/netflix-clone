// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUiuXqL1ZRO6bMrfEQ2Ge6kUrokTb1r3E",
    authDomain: "netflix-clone-fa306.firebaseapp.com",
    projectId: "netflix-clone-fa306",
    storageBucket: "netflix-clone-fa306.appspot.com",
    messagingSenderId: "245392253529",
    appId: "1:245392253529:web:8364c5dc11638e1e048748",
    measurementId: "G-RBRQB9H6YJ"
  };  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }