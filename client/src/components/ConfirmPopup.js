import React from 'react'
import './styles/ConfirmPopup.css'
function ConfirmPopup(props) {
    const confirmHandler=async()=>{
        await props.setter();
        props.cancel();
    }
  return (
    <div className='popup-body'>
        <div className='popup-base'>
            <div className='inner-popup-box'>
                <h1 className="popup-title">Are You Sure You Want To {props.action}?</h1>
                

                <br/>
                <br/>
                <div className='popup-button-container'>
                    <button className='popup-yes-btn' onClick={()=>confirmHandler()}>Confirm</button>
                    <button className='popup-no-btn' onClick={()=>props.cancel()}>Cancel</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ConfirmPopup