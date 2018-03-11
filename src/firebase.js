import firebase from 'firebase';

const config =  {
  apiKey: "AIzaSyBPlUPYaEla4lEl-PwEF-XooW-FvxY-oNo",
  authDomain: "react-firebase-test-f070a.firebaseapp.com",
  databaseURL: "https://react-firebase-test-f070a.firebaseio.com",
  projectId: "react-firebase-test-f070a",
  storageBucket: "react-firebase-test-f070a.appspot.com",
  messagingSenderId: "906530325168"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
