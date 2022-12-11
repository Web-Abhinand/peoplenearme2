import React, { useEffect } from 'react';
import {useContext,useState} from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext)
}



export function AuthProvieder({children}) {

    


    const[currentUser,setCurrentUser] = useState();

    function signup(email,password) {

        return createUserWithEmailAndPassword(auth,email,password)
    
    }

    useEffect(() => {
        const unsubsscribe=auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubsscribe;
    },[])

    const value = {
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
