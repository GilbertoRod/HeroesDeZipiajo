import React from 'react'
import styles from './styles/Card.module.css';

function RecipientCard({name,image,summary,sponsor}) {
  return (

        <div className={styles.container} data-aos="zoom-in-up">
            <div className={styles.nameImage}>
                <img src={require(`../pages/homeComponents/images/${image}`)} alt='Recipient 1'/>
                <div className={styles.info}>
                    <h1>{name}</h1>
                    <p>{summary}</p>
                    <p>Sponsored By: <i>{sponsor}</i></p>
                </div> 
            </div>

        </div>
  )
}

export default RecipientCard