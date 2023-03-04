import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC_laRJVGRI8g28SpeiYqrqUJA6xeMBYE",
  authDomain: "blogproject-b5898.firebaseapp.com",
  projectId: "blogproject-b5898",
  storageBucket: "blogproject-b5898.appspot.com",
  messagingSenderId: "411389044393",
  appId: "1:411389044393:web:f1e718fdaf55f2e16f2bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
