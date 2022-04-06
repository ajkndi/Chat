// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB42Wa7sgX_b5C2V-pxmXR_lLhqLUPpG34",
  authDomain: "mychat-react-4fabf.firebaseapp.com",
  databaseURL: "https://mychat-react-4fabf.firebaseio.com",
  projectId: "mychat-react-4fabf",
  storageBucket: "mychat-react-4fabf.appspot.com",
  messagingSenderId: "383502447932",
  appId: "1:383502447932:web:bdfbc63e94134744e95a39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
