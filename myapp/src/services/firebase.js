import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCw_gFhaQYaEXVumhn-c2cySMJjv2qFYuY",
  authDomain: "gb-react-lesson.firebaseapp.com",
  databaseURL: "https://gb-react-lesson-default-rtdb.firebaseio.com",
  projectId: "gb-react-lesson",
  storageBucket: "gb-react-lesson.appspot.com",
  messagingSenderId: "1012589836917",
  appId: "1:1012589836917:web:6d4f4a8664b8efc6df563c"
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.database();
export const auth = firebase.auth();