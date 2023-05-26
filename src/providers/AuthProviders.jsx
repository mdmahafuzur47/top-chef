import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    
    // Register 
    const register = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }  
    // LogIn 
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // LogOut 
    const logout = () =>{
        setLoading(true)
        return signOut(auth);
    } 
    // googleSign 
    const google = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    // GitHub Sign in 
    const github = () => {
        return signInWithPopup(auth,gitHubProvider)
    }

    // user on State Change
    useEffect(()=> {
        const unsubcribe = onAuthStateChanged((auth),(userInfo)=>{
            setUser(userInfo)
            setLoading(false)
        })

        return () => {
            unsubcribe()
        }
    },[])

    const AuthInfo = {
        user,
        register,
        login,
        logout,
        loading,
        google,
        github
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;