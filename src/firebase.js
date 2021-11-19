// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR8bHStdm3rL53Aagpb52dsftOqFswo4Y",
  authDomain: "todo-app-4e0b8.firebaseapp.com",
  databaseURL: "https://todo-app-4e0b8-default-rtdb.firebaseio.com",
  projectId: "todo-app-4e0b8",
  storageBucket: "todo-app-4e0b8.appspot.com",
  messagingSenderId: "794734053416",
  appId: "1:794734053416:web:31e9587cb10acaf04a0d1d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
