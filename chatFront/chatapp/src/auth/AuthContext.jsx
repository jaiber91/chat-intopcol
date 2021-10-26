import React, { createContext, useState, useCallback } from "react";
import { fetchSintoque } from "../helpers/Fetch";

export const AuthContext = createContext()

//Estado inicial de la App
const initialState = {
    uid:null,
    checking:true,
    logged:false,
    name: null,
    email:null
}

//Provider


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialState)
    
    const login = async (email, password)=>{
        const resp = await fetchSintoque('login', {email, password}, 'POST')
        console.log(resp);
    }

    const register = (nombre, email, password)=>{

    }

    const verificaToken = useCallback( ()=>{

    }, [] )

    const logout = () =>{

    }

    
    return (
        <AuthContext.Provider value={{
            login,
            register,
            verificaToken,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
