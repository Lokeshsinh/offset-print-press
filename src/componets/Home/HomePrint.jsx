import React from 'react'
import styles from './HomePrint.module.css'
function HomePrint() {
    return ( 
       <section className={styles.HomePrint}>
        <div className={styles.HomePrintContent}>
          <h1>High-Quality Offset <br /> Printing Services</h1>
          <p>We provide premium offset printing solutions designed for businesses 
            that demand sharp, vibrant, and long-lasting prints. From business cards to bulk catalogs, 
            our precision printing ensures every detail stands out with professional quality. image</p>
            <button>Contact Now</button>
        </div>
       </section>
     );
}

export default HomePrint;