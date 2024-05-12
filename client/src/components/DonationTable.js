import React,{useState} from 'react'
import axios from 'axios';
function DonationTable({info}) {
 
    const {donors,updateDonors,updateNotification,updateSavingStatus,authorizedUser}={...info}
    const[idToDelete,setIdToDelete]=useState(false);

    //Updates the entry based on their id
    const updateEntry = (id,data)=>{
      updateSavingStatus("saving...");
      if(authorizedUser&&authorizedUser.token){
      axios.put(`http://localhost:4000/donations/updateEntry/${id}`,{data:data},{
        headers:{
          auth:`Bearer ${authorizedUser.token}`
        }
      })
      .then((res)=>res.data)
      .then(()=>setTimeout(()=>updateSavingStatus('✓ Saved Changes'),800))
    }}

    //Deletes the user based on their id
    const deleteEntry = (id)=>{
      if(authorizedUser&&authorizedUser.token){
      axios.delete(`http://localhost:4000/donations/removeEntry/${id}`,{
        headers:{
          auth:`Bearer ${authorizedUser.token}`
        }
      })
      .then(updateDonors(donors.filter((donor)=>donor._id!==id)))
    }
    }

    //Fetches the user and gets the data ready to update
    const changeHandler=(val,id,indexToUpdate)=>{
      updateDonors(donors.map((donor)=>{
        if (donor._id===id){
          const donations=[...donor.donations];
          donations[indexToUpdate].amount= parseInt(val)||0;
          updateEntry(donor._id,donations);
          return{...donor,donations:donations}
        }else{
          return donor
        }
      }))
    }

    if(authorizedUser){
      return (
        <>
        <div>
        <table>
            
            {donors.length!==0&&
            <thead>
              <tr>
                <th className='top-left-cell'>Name</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>Apr</th>
                <th>May</th>
                <th>Jun</th>
                <th>Jul</th>
                <th>Aug</th>
                <th>Sep</th>
                <th>Oct</th>
                <th>Nov</th>
                <th>Dec</th>
                <th>Total</th>
                <th className='top-right-cell'/>
              </tr>
            </thead>}
            <tbody>
              {donors.map((donor,index)=>
                <React.Fragment key={donor._id}>
                  <tr className='donation-data'>
                    <td className='name-td'>{donor.name}</td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[0].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 0)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[1].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 1)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[2].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 2)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[3].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 3)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[4].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 4)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[5].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 5)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[6].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 6)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[7].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 7)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[8].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 8)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[9].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 9)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[10].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 10)}/></td>
                    <td>$<input type='number' className='input-number' defaultValue={donor.donations[11].amount} onChange={(e)=>changeHandler(e.target.value,donor._id, 11)}/></td>
                    <td><center>${donor.donations.reduce((accum,obj)=>{
                      
                      return (accum+parseInt(obj.amount))},0)}</center></td>
                    <td>
                    {idToDelete === donor._id ?
                        <>
                            <button className='confirm-btn' title='Delete Donor' onClick={() => { deleteEntry(idToDelete); setIdToDelete(null) }}>
                                Confirm
                            </button>
                            <button className='delete-btn' onClick={() => setIdToDelete(null)}>
                                Cancel
                            </button>
                        </>
                        :
                        <button onClick={() => {
                            updateNotification("");
                            setIdToDelete(donor._id);
                        }} className='delete-btn' title='Delete Entry'>Delete</button>
                    }
                      </td>
                  </tr>
                </React.Fragment>)
              }

            </tbody>

          </table>

          </div>


          </>
      )
    }
}

export default DonationTable