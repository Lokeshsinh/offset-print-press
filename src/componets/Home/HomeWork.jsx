import React from 'react'
import styles from './HomeWork.module.css'
import Visit from '../../assets/HomeWork/visit.jpg'
import billbook from '../../assets/HomeWork/billbook.jpg'
import station from '../../assets/HomeWork/station.jpg'
import { motion } from 'framer-motion';
function HomeWork() {
    return ( 
        <>
        <sections className={styles.HomeWork}>
            <div className={styles.HomeWorkContainer}>
                <motion.div className={styles.HomeWorktext}
                  initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <p>Our Work</p>
                    <h1>Crafted, printed, delivered.</h1>
                    <div className={styles.HomeWorkLine}></div>
                </motion.div>

                {/* Button */}
                <div className={styles.HomeWorkEnd}>
                <motion.div className={styles.HomeWorkBtn}
                    initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <button>View Portfolio</button>
                </motion.div>
                </div>

                {/* Images */}
                <div className={styles.HomeWorkFlex}>
                    <motion.div className={styles.HomeWorkImg}
                    initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img src={Visit} alt="Visit" />
                    </motion.div>


                      <motion.div className={styles.HomeWorkImg}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}>

                        <img src={billbook} alt="Billbook" />
                      </motion.div>



                      <motion.div className={styles.HomeWorkImg}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}>
                        <img src={station} alt="Station" />
                      </motion.div>

                </div>
            </div>
        </sections>
        </>
    
     );
}

export default HomeWork;