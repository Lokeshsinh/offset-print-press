import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router'
import styles from './ServiceBanner.module.css'

function ServiceBanner() {
    return ( 
        <>
        <section className={styles.AboutBanner}>
                <motion.div className={styles.AboutBannerText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Reliable Printing Solutions<br /> for Every Need</h1>
                    <p>We offer high-quality offset, screen, and digital printing services along with 
                        reliable stationery supply for businesses and individuals in Jammu & Bari Brahmana.</p>

                    <Link style={{textDecoration:"none"}} to='/contact'><button>Contact Now</button></Link>
                </motion.div>

            </section>

        </>
     );
}

export default ServiceBanner;