import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";


import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const provider = new GoogleAuthProvider();
    const [loading , setLoading]=useState(true);
    const sighnUp = (email,passward)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,passward)
    }
    

    const login =(email,passward)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passward)
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth ,provider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    

    useEffect(()=>{
        const UnSubscribe= onAuthStateChanged(auth, CurrentUser =>{
            console.log(CurrentUser);
        
            setUser(CurrentUser)
            setLoading(false)
        })
        return ()=>{
            UnSubscribe();
        }
    });

    
    const authInfo = {
        user,
       loading,
        sighnUp,
        login,
        googleLogin,
        logOut
       } ;

 
    return (
     <AuthContext.Provider value={authInfo}> 
         {children}
     </AuthContext.Provider>
            
      
    );
};

export default AuthProvider;