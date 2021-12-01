// THis is for import 
import React, { createContext } from 'react';
// import useFirebase from '../hooks/useFIrebase';
import useFirebase from '../hooks/useFirebase';

// This is AuthContext
export const AuthContext = createContext();

// This is AuthPRovider
const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value ={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;