//This is use for import important file  

import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"


// This is use for useAuth Components. That will connect useContext
const useAuth = () =>{
    return useContext(AuthContext);
}
export default useAuth;