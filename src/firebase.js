import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzRVlO_MT4IeLHbVmAFfz-HhXJbQWO6N0",
  authDomain: "disney-clone-4e7c9.firebaseapp.com",
  projectId: "disney-clone-4e7c9",
  storageBucket: "disney-clone-4e7c9.appspot.com",
  messagingSenderId: "628530694182",
  appId: "1:628530694182:web:ba54254a00bd9918c6bee7",
  measurementId: "G-QPWC0M33W4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
