import React from 'react'
import styles from './Home.module.css'
import banner  from '../../assets/back.jpg'
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';


function Home() {
    return ( 
        <section className={styles.printHome}>
            <div className={styles.printbanner}>
                <div className={styles.printimg}>
                    <img src={banner} alt='Print Press Banner' />
                </div>

                <motion.div className={styles.printcontent}>
                    <motion.div className={styles.printtext}     initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <p>A Home of Quality Printing</p>
                    </motion.div>
                    <motion.h1    initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>Saini Offset <br />Printing Press</motion.h1>

                    <motion.div className={styles.printpara} initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <div className={styles.printline}></div>
                        <p>Professional offset, screen, and digital printing services for businesses and individuals 
                            in Bari Brahmana, Jammu. From visiting cards to catalogs  we print it all.</p>
                    </motion.div>

                    <motion.div className={styles.printbtn} initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <button>Call Now  <MoveRight size={20} className={styles.arrow } /></button>
                    </motion.div>

                </motion.div>

            </div>

        </section>
     );
}

export default Home;