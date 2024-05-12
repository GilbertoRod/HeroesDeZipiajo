import React from 'react'
import DonationInfo from '../components/DonationInfo';
import donationStyles from './styles/donations.module.css';
import Footer from '../components/Footer';
function Donations({authorizedUser}) {

  let years = [];
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  for (let year=2022; year<=currentYear;year++){
    years.push(year);
  }
  
  return (
    <>
        <div className={donationStyles.donationsContainer} style={authorizedUser&&{backgroundColor:"#2e61d1"}} >
          <div className={donationStyles.donationsInnerContainer}>
            {authorizedUser?
            <>
            <h1 data-aos="zoom-in" className={donationStyles.pageTitle} style={{color:"#BD4249",textShadow:"0 0 5px rgba(0, 0, 0, 0.9),0 0 5px rgba(255, 255, 255, 0.4)"}}>Keep Track of The Donations!</h1>
            <p className={donationStyles.description} style={{color:"white"}}>This Page is only visible to you, the Admin. It's designed to help you keep track of all of the donations of the sponsors. All changes made are automatically saved! A new Table will be added automatically every year, all you have to do is simply add the names of the participants for the corresponding year and insert the amounts that they donated for each month </p>
            </>
            
            
            
            :
            <>
              <h1 className={donationStyles.pageTitle} data-aos="zoom-out">DONATIONS</h1>
              <hr/>
              <p className={donationStyles.description} data-aos="zoom-in-left">
              Every contribution, no matter the size, plays a pivotal role in providing essential support and resources to these remarkable children. As a private philanthropic organization, we are committed to transparency and accountability. That's why we've made it easy for you to track our progress year by year, witnessing firsthand the impact of your generosity.
              <br/><br/>
              Your donation goes beyond financial support; it's a lifeline for these children, offering them access to specialized care, educational opportunities, and the chance to thrive despite their circumstances. By becoming a sponsor, you'll forge a personal connection with a child, enabling you to see the tangible difference your contribution makes in their life.
              <br/><br/>
              Join us in our mission to create a brighter future for the children of Zipiajo, Michoacan. Together, we can make a lasting difference and ensure that every child has the chance to reach their full potential. Thank you for your compassion and generosity.</p>

            </>
            }
          </div>
          </div>
          <div className={donationStyles.tableContent} style={authorizedUser&&{backgroundColor:"#D88A27",color:"black"}}>
            
            <div className={donationStyles.innerTableContent} >


            
              { authorizedUser?
              <p className={donationStyles.subHeading }>Manage the donations down below!</p>
              :
              <p className={donationStyles.subHeading}>Check Out Our Yearly Donations!</p>
              }
              <div data-aos="fade-out"   data-aos-once="true" className={donationStyles.table}>
                {years.map((year)=>{
                  return(
                  <div key={year}>
                    <DonationInfo year={year} authorizedUser={authorizedUser}/>
                  </div>
                  )})}
              </div>
            </div>
          </div>

        <Footer/>
    </>
  )
}

export default Donations