import React,{useState} from 'react'
import axios from 'axios'

function AddDonorForm({info}) {
    const{year,donors,notification,newPersonField,updateNewPersonField,updateDonors,updateNotification,authorizedUser}={...info}

    const[newPerson,setNewPerson]=useState("");
    const cancelHandler=()=>{
        updateNewPersonField("hide");
        updateNotification("");
      }
    const addDonor=(newPerson)=>{
        if(authorizedUser&&authorizedUser.token){
            axios.post('http://localhost:4000/donations/addDonation',{name:newPerson,year:year},{
            headers:{
            auth:`Bearer ${authorizedUser.token}`
            }
            })
            .then((res)=>res.data)
            .then((data)=>{
                updateDonors([...donors,data]);
                updateNotification(`Successfully Added ${newPerson}!`);
            
            })
        }
    }
    const formHandler=(e)=>{
    e.preventDefault();
        
        addDonor(newPerson);
    }
    if (authorizedUser){
        return (
            <>
                {newPersonField==='show'?
                <form className='insert-form' onSubmit={(e)=>formHandler(e)}>
                <input className='newPersonField add-person-field' onChange={(e)=>setNewPerson(e.target.value)} required/>
                <button type='submit' className='submit-btn'>Add</button>
                <button onClick={()=>cancelHandler()} 
                    className='cancel-btn'>Cancel
                </button>
                </form>
                :
                <button onClick={()=>updateNewPersonField("show")} className={newPersonField==='hide'?'close-add-person-field':'add-person-btn'}>Add Person</button>
                }
                {notification && <div className='add-person-notification'>{notification}</div>}
                <br/>
                <br/>
            </>
        )
    }
}

export default AddDonorForm