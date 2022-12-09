import React, { useEffect } from 'react';
import {useContext,useState} from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase'
const auth = getAuth(app);
const AuthContext = React.createContext();

function signup(email,password) {

    return auth.createUserWithEmailAndPassword(email,password)

}



export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvieder({children}) {

    const[currentUser,setCurrentUser] = useState();

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
