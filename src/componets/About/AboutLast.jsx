import React from 'react'
import styles from './AboutLast.module.css'
import { Link } from 'react-router'
import { motion } from 'framer-motion'

function AboutLast() {
    return (
        <>
            <motion.section className={styles.AboutLast} initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                <h1>Local service in Jammu & Bari Brahmana</h1>
                <p>As a locally trusted printing press, we serve the Jammu and Bari Brahmana area with
                    dedication, ensuring quick service, quality prints, and customer satisfaction.</p>
                <Link to='/contact'><button>Connect Now</button></Link>
            </motion.section>
        </>
    );
}

export default AboutLast;