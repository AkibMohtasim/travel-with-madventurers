import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

initializeAuthentication();


const useFirebase = () => {
  const [user, setUser] = useState({});


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
    });
  }, [])




  return {
    user,
    signInUsingGoogle,
    logOut
  }

}


export default useFirebase;