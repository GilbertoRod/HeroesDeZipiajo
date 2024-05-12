import React, { createContext, useReducer, useState } from 'react'

export const authorization = createContext();
const handleAuth=(state,action)=>{
    switch(action.type){
        case("LOGIN"):
            return {authorizedUser:action.payload}
        case("LOGOUT"):
            return {authorizedUser:null}
        default:
            return state
    }
}
function AuthContext({children}) {
    const [state,dispatch]=useReducer(handleAuth,{authorizedUser:null});

    //used to fetch the data BEFORE the Initial render, useEffect won't work because it runs after the initial render
    //this allows for route logic to be more clear and easier to code
    const [initialRender,setInitialRender]=useState(true)

    if (initialRender){
        const auth = JSON.parse(localStorage.getItem("user"));
        auth&&dispatch({type:"LOGIN",payload:auth});
        setInitialRender(false)//this schedules a re-render for after the components mount and also disables the effect in this conditional execution so that it only runs once.
    }



    return (
        <authorization.Provider value={{...state,dispatch}}>
            {children}
        </authorization.Provider>
    )
    }

export default AuthContext