import React from 'react'
import styles from './HomeProducts.module.css'
import prompt from '../../assets/HomeProducts/prompt.jpg';
import label from '../../assets/HomeProducts/lable.jpg'
import poster from '../../assets/HomeProducts/potser.webp'
import book from '../../assets/HomeProducts/book.jpg'
import { motion } from 'framer-motion';

function HomeProducts() {
    return (
        <section className={styles.HomeProducts}>
            <div className={styles.HomeProductsContainer}>
                <motion.div className={styles.HomeProductsContent} initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Products & Service</h1>
                    <span></span>
                </motion.div>

                {/* Products */}
                <motion.div className={styles.HomeProductsItems} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <div className={styles.HomeProductsImg}>
                        <img src={prompt} alt='promt' />
                        <div className={styles.HomeProductsTitle}>
                            <h1>Pamphlets</h1>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className={styles.HomeProductsuser}>
                        <div className={styles.HomeProductsImg1}>
                            <img src={label} alt='label' />
                            <div className={styles.HomeProductsTitle}>
                                <h1>Labels</h1>
                            </div>
                        </div>
                        <div className={styles.HomeProductsImg1}>
                            <img src={book} alt='label' />
                            <div className={styles.HomeProductsTitle}>
                                <h1>Note Book</h1>
                            </div>
                        </div>
                    </div>

                    {/* last */}
                    <div className={styles.HomeProductsImg}>
                        <img src={poster} alt='poster' />
                        <div className={styles.HomeProductsTitle}>
                            <h1>Poster</h1>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default HomeProducts;