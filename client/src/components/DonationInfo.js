import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './styles/DonationTable.css'

//axios converts the body passed to json before sending it to the backend and back to an object when it receives the response. This eliminates the need for manually parsing the data to JSON when sending and back to an object when receiving the JSON object.
import axios from 'axios'
import TableStats from './TableStats';
import AddDonorForm from './AddDonorForm';
import DonationTable from './DonationTable';


function DonationInfo({year,authorizedUser}) {
  const[donors,setDonors]=useState([]);
  const[displayInfo,setDisplayInfo]=useState("");
  const[notification,setNotification]=useState("");
  const[savingStatus,setSavingStatus] = useState("");
  const [newPersonField,setNewPersonField]=useState("");

  useEffect(()=>{
    axios.get(`http://localhost:4000/donations/donors/${year}`)
    .then((res)=>res.data)
    .then((data)=>setDonors(data))
    .catch((err)=>console.error(`Couldn't find the Data ${err}`))

  },[year])
  
  const displayHandler=()=>{
    //avoids button animation if we close out and back into the donations accordion
    newPersonField!==""&&setNewPersonField("");
    notification!==""&&setNotification("");
    if (displayInfo==="noDisplay"||displayInfo===""){
      setDisplayInfo('display')
    }
    else if(displayInfo==="display"){
      setDisplayInfo('noDisplay')
    }
  }
  const updateDonors=(data)=>{
    setDonors(data);
  }
  const updateNotification=(noti)=>{
    setNotification(noti);
  }
  const updateNewPersonField=(data)=>{
    setNewPersonField(data);
  }

  const updateSavingStatus=(status)=>{
    setSavingStatus(status)
  }

  return (
    <>
    
    <div className='table-body'>
      
      <div className='accordion-container'>
        <div className='accordion-title' onClick={()=>displayHandler()}>
          <div className='accordion-year'>{year} Donations</div>
            <div>
              <span className='saving-status'>{savingStatus}</span>
              <button  className='toggle-display-btn' >
                {displayInfo==="noDisplay"&&<FontAwesomeIcon icon={faChevronDown} className='flip-down' color='white'/>}
                {/* Prevents arrow flip on initial render */}
                {displayInfo===""&&<FontAwesomeIcon icon={faChevronDown} color='white'/>}
                {displayInfo==="display"&&<FontAwesomeIcon icon={faChevronUp} className='flip-up' color='white'/>}
              </button>
            </div>
          </div>
        <div className={displayInfo!=='display' ? 'accordion-content-blocked' : 'accordion-content'}>
            <AddDonorForm info={{year,donors,notification,newPersonField,updateNewPersonField,updateDonors,updateNotification,authorizedUser}}/>
            <DonationTable info={{donors,updateDonors,updateNotification,updateSavingStatus,authorizedUser}}/>
            <TableStats donors={donors} year={year}/>


        </div>
        
      </div>
    </div>

    </>
  )
}

export default DonationInfo