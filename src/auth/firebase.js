import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
const firebaseConfig = {
  apiKey: "AIzaSyA0h0yOGuQ1fm2YNAMqGR-vFYw7wIbbLV8",
  authDomain: "movie-app-2ba2d.firebaseapp.com",
  projectId: "movie-app-2ba2d",
  storageBucket: "movie-app-2ba2d.appspot.com",
  messagingSenderId: "592158343558",
  appId: "1:592158343558:web:3eae49f77cdb60a501ac07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//Create user with email and password  function
export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

//Existing user login function
export const signIn = async(email, password, navigate) => {
  
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential);
    navigate("/");
    
  } catch (err) {
    alert(err.message);
  }
}
export const logOut = () => {
  signOut(auth);
  alert("You have been logged out");
}