import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCmVlTSQGam_hX3WrE6xFCqEQcYvkAKDLM",
  authDomain: "rsocial-firebase.firebaseapp.com",
  projectId: "rsocial-firebase",
  storageBucket: "rsocial-firebase.appspot.com",
  messagingSenderId: "459630123983",
  appId: "1:459630123983:web:43feae98551c88d59b50ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { db, auth, googleProvider, githubProvider, storage };


