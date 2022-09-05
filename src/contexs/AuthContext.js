import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup ,
  signInWithRedirect, 
} from 'firebase/auth';
import { auth } from '../firebase';
import { Link,useNavigate} from "react-router-dom"


//const provider = new GoogleAuthProvider();

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((re)=>{
      console.log(re);
      navigate('/')
    })
    .catch ((err)=>{
      console.log(err)
    })
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn , googleSignIn}}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};


