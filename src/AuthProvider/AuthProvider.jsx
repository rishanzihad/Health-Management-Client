import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,  createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext =createContext(null)
const auth = getAuth(app)
const googleProvider =new GoogleAuthProvider
const AuthProvider = ({children}) => {

    

    const[user,setUser] =useState()
    const [loading,setLoading] =useState(true)
    const googleLogin=()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }

    const register =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const  login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleUpdateProfile = (name, photo) => {
        const user = auth.currentUser;
        if (user) {
            return updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
        } 
    }
    const logOut =()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser=>{
            const userEmail = currentUser?.email
            const loggedEmail ={email:userEmail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
         
                axios.post('https://blog-mania-theta.vercel.app/jwt',loggedEmail,{withCredential:true})
                .then(res=>{
                    console.log("token response",res.data)
                })
            }
            else{
                axios.post('https://blog-mania-theta.vercel.app/logout',loggedEmail,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data)
                })
            }
        }))
        return (()=>{
           return unSubscribe()
        }) 
    },[])
    const authInfo={
        googleLogin,register,login,user,logOut,loading,handleUpdateProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;