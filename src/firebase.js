import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIhg4uAt1uCSuNSjzyUGWMZoHzO8obqHg",
  authDomain: "netflix-clone-981e6.firebaseapp.com",
  projectId: "netflix-clone-981e6",
  storageBucket: "netflix-clone-981e6.appspot.com",
  messagingSenderId: "93410472879",
  appId: "1:93410472879:web:152c8771ac44685417755a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
export { auth };
export default db;
