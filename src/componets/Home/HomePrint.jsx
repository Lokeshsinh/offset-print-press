import React from 'react'
import styles from './HomePrint.module.css'
import { motion } from 'framer-motion';

function HomePrint() {
  return (
    <section className={styles.HomePrint}>
      <motion.div className={styles.HomePrintContent} initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
        <h1>High-Quality Offset <br /> Printing Services</h1>
        <p>We provide premium offset printing solutions designed for businesses
          that demand sharp, vibrant, and long-lasting prints. From business cards to bulk catalogs,
          our precision printing ensures every detail stands out with professional quality. image</p>
        <button>Contact Now</button>
      </motion.div>
    </section>
  );
}

export default HomePrint;