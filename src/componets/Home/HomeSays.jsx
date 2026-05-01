import React from 'react'
import styles from './HomeSays.module.css'
import { motion } from 'framer-motion';

function HomeSays() {
    return (
        <>
            <section className={styles.HomeSays}>
                <div className={styles.HomeSaysBack}>
                    <motion.div className={styles.HomeSaysTitle}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Ready to print something great?</h1>
                        <p>Send us your design or just your idea — we'll guide you on paper,
                            finish and the most economical print run.</p>
                    </motion.div>
                    <motion.div className={styles.HomeSaysButton}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}>
                        <button className={styles.HomeSaysGetStarted}>Get Started Now</button>
                        <a
                            href="https://wa.me/919419311049 "
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.HomeSaysLearnMore}
                        >
                            <i className="ri-whatsapp-line"></i>
                            Connect Now
                        </a>
                    </motion.div>

                </div>
            </section>

        </>
    );
}

export default HomeSays;