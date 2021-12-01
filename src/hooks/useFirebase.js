// This section use for import from the react, firebase or any other place
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

// This is for firebser confige inilializetion
initializeAuthentication()
const useFirebase =() =>{
    // This section is use for change any thing. I'm useState
    const [user, setUser] = useState({});
     const  [loading, setLoading] = useState(true)
    const auth = getAuth();
    
    // This is for connecting the SinginGoogle button
    const signInWithGoogle =() =>{
        
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
            
    }
    
    // Observe User State Change
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    },[])

    // This is use for logout funtionality
    const logOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(() => {})
        .finally(()=>setLoading(false))
    }
// This is return all function and element i need in other file. 
    return {
        user,
        loading,
        setLoading,
        setUser,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;