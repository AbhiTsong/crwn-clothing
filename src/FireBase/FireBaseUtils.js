import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"


const config = {
 apiKey: "AIzaSyA0E6MIyNE6bQAMQEh52kLw_UONQ76tuCI",
 authDomain: "cr-db-27859.firebaseapp.com",
 databaseURL: "https://cr-db-27859.firebaseio.com",
 projectId: "cr-db-27859",
 storageBucket: "cr-db-27859.appspot.com",
 messagingSenderId: "99412737944",
 appId: "1:99412737944:web:8765b30f53854c6e7175ed",
 measurementId: "G-G7RZFWDZ8C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;