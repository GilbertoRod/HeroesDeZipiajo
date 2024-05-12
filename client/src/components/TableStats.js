import React from 'react'
import'./styles/TableStats.css'
function TableStats(props) {



    const amounts = {names:[], jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[],total:[]};

    const donors=props.donors;

    donors.forEach((donor)=>{
        amounts.names.push(donor.name);
        amounts.jan.push(donor.donations[0].amount);
        amounts.feb.push(donor.donations[1].amount);
        amounts.mar.push(donor.donations[2].amount);
        amounts.apr.push(donor.donations[3].amount);
        amounts.may.push(donor.donations[4].amount);
        amounts.jun.push(donor.donations[5].amount);
        amounts.jul.push(donor.donations[6].amount);
        amounts.aug.push(donor.donations[7].amount);
        amounts.sep.push(donor.donations[8].amount);
        amounts.oct.push(donor.donations[9].amount);
        amounts.nov.push(donor.donations[10].amount);
        amounts.dec.push(donor.donations[11].amount);
        const total = donor.donations.reduce((accum,dono)=>accum+dono.amount,0);
        amounts.total.push(total);
    })

    //Calculates the average of every month in the amounts object and stores each months average in the avgsPerMonth array
    let avgsPerMonth=[];
    Object.entries(amounts).forEach(([key,value])=>{
        if (key!=='names'&&key!=='total'){
            //gets the total of each month
            const total = value.reduce((accum,val)=>accum+val,0);
            //pushes the average of each month
            avgsPerMonth.push(total/value.length)}})

    let avgMonthlyDonation = avgsPerMonth.reduce((accum,val)=>accum+val,0);
    avgMonthlyDonation/=12;

    let avgYearlyDonation=amounts.total.reduce((accum,val)=>accum+val,0);
    avgYearlyDonation/=amounts.total.length;

    const yearlyTotal=amounts.total.reduce((accum,val)=>accum+val,0);




    

  return (
    <>  
      <div className='stats'>
        <h1 className='stats-title'>{props.year} Stats:</h1>
        <h2>Total Donations for {props.year}
        <br/>${yearlyTotal.toFixed(2)}</h2>
        <h3>Monthly Average
        <br/>${(yearlyTotal/12).toFixed(2)}</h3>
        <h4>Average Yearly Donation/Person: ${!avgYearlyDonation?0:avgYearlyDonation.toFixed(2)}</h4>
        <h4>Average Monthly Donation/Person: ${!avgMonthlyDonation?0:avgMonthlyDonation.toFixed(2)}</h4>
        </div>

    </>
    
  )
}

export default TableStats