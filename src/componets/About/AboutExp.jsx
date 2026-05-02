import React from 'react'
import styles from './AboutExp.module.css'
import { motion } from 'framer-motion';
import printOff from '../../assets/AboutImage/setoff.jpg'
import display from '../../assets/AboutImage/display.jpg'
import digital from '../../assets/AboutImage/digital.jpg'
import station from '../../assets/AboutImage/station.jpg'

function AboutExp() {
    return (
        <>
            <section className={styles.aboutExprience}>
                <motion.div className={styles.aboutExprienceHeading} initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Trusted Printing Experience</h1>
                    <span></span>
                </motion.div>

                <div className={styles.aboutExprienceContent}>
                    <div className={styles.aboutExprienceItem}>
                        <motion.div className={styles.aboutExprienceImg1}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <div className={styles.aboutExprienceImage}>
                                <img src={printOff} alt='print' />
                            </div>
                            <div className={styles.aboutExprienceImage}>
                                <img src={display} alt='display' />
                            </div>
                        </motion.div>


                        {/* image */}
                        <motion.div className={styles.aboutExprienceImg1} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <div className={styles.aboutExprienceImage}>
                                 <img src={digital} alt='digital' />
                            </div>
                            <div className={styles.aboutExprienceImage}>
                                     <img src={station} alt='digital' />
                            </div>
                        </motion.div>

                    </div>



                    {/* text  */}

                    <motion.div className={styles.aboutExpreinceText}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Experience in <br />Printing</h1>
                        <p>Saini Offset Printing Press brings years of hands-on experience in delivering
                            high-quality printing solutions for businesses and individuals. Our deep understanding
                            of printing techniques allows us to handle
                            everything from simple prints to complex bulk orders with precision.</p>
                        <p>Over the years, we have built a strong reputation for consistency, reliability, and
                            attention to detail. Whether it is offset, screen, or digital printing, our experience
                            ensures that
                            every project is completed with accuracy, clarity, and a professional finish.</p>
                    </motion.div>

                </div>

            </section>
        </>);
}

export default AboutExp;