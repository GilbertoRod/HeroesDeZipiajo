import { useState,useContext } from 'react';
import axios from 'axios';
import { authorization } from '../context/AuthContext';
function useLoginHook() {
    const [errorMsg, setErrorMsg] = useState("");
    const {dispatch} = useContext(authorization);
    const login = (username, password) => {
        axios.post('http://localhost:4000/admin/login', { username, password })
            .then((res) => {
                
                const response = res.data;
                //updates UI
                response&&dispatch({type:"LOGIN",payload:response})
                //Saves token to the localstorage
                response&&localStorage.setItem("user", JSON.stringify(response));
            })
            .catch((error) => {
                const serverErrorMsg=error.response.data.error
                setErrorMsg(serverErrorMsg);
            });
    }

    return { errorMsg, login };
}

export default useLoginHook;
