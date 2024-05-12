import { useContext } from 'react';
import { authorization } from '../context/AuthContext';
function useLogout(){
    const {dispatch} = useContext(authorization);
    const logout = ()=>{
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
    }
    return {logout}
}
export default useLogout
