import React from 'react'
import styles from './AboutBanner.module.css'
import {motion} from 'framer-motion'

function AboutBanner() {
    return (
        <>
            <section className={styles.AboutBanner}>
                <motion.div className={styles.AboutBannerText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>About Saini Offset <br />  Printing Press</h1>
                    <p>Saini Offset Printing Press is a trusted printing partner serving businesses
                        and individuals in Bari Brahmana, Jammu. We specialize in delivering
                        high-quality printing solutions with precision, reliability, and attention to detail.</p>

                    <button>Contact Now</button>
                </motion.div>

            </section>

        </>
    );
}

export default AboutBanner;