import React from 'react'
import styles from './AboutWho.module.css'
import { Link } from 'react-router'
import About1 from '../../assets/AboutImage/about1.jpg'
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion'

function AboutWho() {
    return (
        <>
            <section className={styles.AboutWho}>
                <div className={styles.AboutWhoContainer}>
                    <motion.div className={styles.AboutWhoText} initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: "easeOut" }}>
                        <h4>Who We Are</h4>
                        <h1>Your Trusted <br /> Printing Partner</h1>
                        <p>Saini Offset Printing Press is a well-established local printing service provider
                            with years of experience in delivering professional printing solutions. Located in
                            Bari Brahmana, Jammu, we cater to shops, businesses,
                            and individuals who seek reliable and high-quality printing services.</p>
                        <p>We combine traditional expertise with modern printing techniques to ensure every
                            project meets the
                            highest standards of quality and accuracy. can you generate one more title </p>
                        <Link to="/contact"><button>Connect Now</button></Link>
                    </motion.div>


                    <motion.div className={styles.AboutID} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}>
                        <div className={styles.AboutWhoImg}>
                            <img src={About1} alt='about us' />
                            <div className={styles.AboutCards}>
                                <span><Clock className={styles.icons} size={30} /></span>
                                <div className={styles.AboutWhoCardText}>
                                    <h4>15+</h4>
                                    <p>Years of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default AboutWho;