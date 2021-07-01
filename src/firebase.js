import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBGfvaGnVoxIfNYMGOKOh4PyTZHPKUcpdQ",
    authDomain: "email-auth-app-af735.firebaseapp.com",
    projectId: "email-auth-app-af735",
    storageBucket: "email-auth-app-af735.appspot.com",
    messagingSenderId: "370166834851",
    appId: "1:370166834851:web:11e9b72623e97900504116"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db= firebase.firestore();
  const auth=firebase.auth();
  export{auth};
  export default db;