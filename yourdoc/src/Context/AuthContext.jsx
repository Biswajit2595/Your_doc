import React, { createContext, useState } from 'react'


export const AuthContext=createContext()


function AuthContextProvider({children}) {
    const [authState,setAuthState]=useState({
        isAuth:false,
        username:null
    })

    const loginUser=(res)=>{
        setAuthState({
            isAuth:true,
            username:res
        })
    }

    const logoutUser=()=>{
        setAuthState({
            isAuth:false,
            username:null
        })
    }
    
    
    return (<AuthContext.Provider value={{ authState,loginUser,logoutUser }} >{children}</AuthContext.Provider>)
}

export default AuthContextProvider;