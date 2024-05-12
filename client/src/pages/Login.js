import React, { useContext, useState } from 'react'
import styles from './styles/login.module.css'
import useLoginHook from '../hooks/useLoginHook'
import useLogout from '../hooks/useLogout'
import { authorization } from '../context/AuthContext';
function Login() {
  const{errorMsg,login} = useLoginHook();
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const {authorizedUser} = useContext(authorization);
  const{logout}=useLogout();
  if (!authorizedUser){
    return (
      <div className={styles.container}>
          <form className={styles.formcontainer} onSubmit={(e)=>{
          e.preventDefault()
          login(username,password)
          }}>
                  <h1 className={styles.formtitle}>Login</h1>
                  <div className={styles.info}>
                      <div className={styles.usernamecontainer}>
                          <label>Username: </label>
                          <input onChange={((e)=>setUsername(e.target.value))}/>
                      </div>
                      <div className={styles.passwordcontainer}>
                          <label>Password: </label>
                          <input type='password' onChange={((e)=>setPassword(e.target.value))}/>
                      </div>
                  </div>
                  <button className={styles.submitBtn} type='submit'>Submit</button>
                  
                  {errorMsg?
                  <div class="error-msg">{errorMsg}</div>:<div></div>}

          </form>
          
      </div>
    )
  }
  else{
    return(
      <div className={styles.container}>
        <form className={styles.formcontainer} onSubmit={(e)=>{
          e.preventDefault();
          logout()
          }}>
            <div></div>
            <div></div>
            <h1>Do you want to logout?</h1>
            <button class={styles.logoutBtn} type='submit'>Logout</button>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </form>
      </div>
    )
  }

}

export default Login