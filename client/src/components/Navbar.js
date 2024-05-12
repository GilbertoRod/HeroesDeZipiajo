import React, { useContext } from 'react'
import './styles/Navbar.css'
import { authorization } from '../context/AuthContext';
//Window.scrollY
function Navbar(props) {
    const { authorizedUser } = useContext(authorization);
    
  return (
    <div className='container'>
        
        <div className='nav-container'>
        
            <ul className='nav-list'>
                <a href='/'  className={props.activePage==='/'? 'nav-active-page' :'nav-inactive-page'}>
                    <div className='nav-inner-container'>
                        <li className='home'>
                        Home
                        {props.activePage==='/'&&<div className='underline-div' data-aos="zoom-in"/>}
                        
                        </li>
                    </div>
                </a>
                <a href='/donations' className={props.activePage==='/donations'? 'nav-active-page' :'nav-inactive-page'}>
                    <div className='nav-inner-container'>
                        <li className='donos'>
                        Donations
                        {props.activePage==='/donations'&&<div className='underline-div' data-aos="zoom-in"/>}
                        </li>
                    </div>
                </a>
                {authorizedUser&&
                (<a href='/donations/admin' className={props.activePage==='/donations/admin'? 'nav-active-page' :'nav-inactive-page'}>
                    <div className='nav-inner-container'>
                        <li>
                        Manage Donations
                        {props.activePage==='/donations/admin'&&<div className='underline-div' data-aos="zoom-in"/>}
                        </li>
                    </div>
                </a>)}
            </ul>
        </div>
    </div>

  )
}

export default Navbar
