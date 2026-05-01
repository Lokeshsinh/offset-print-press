import React, { useEffect, useState } from 'react'
import styles from './HomeAbout.module.css'
import pack from '../../assets/pack.jpg'
import poster from '../../assets/poster.jpg'
import id from '../../assets/id.jpg'
import cover from '../../assets/cover1.png'
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';


function HomeAbout() {
    const images = [pack, poster, id];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 2000)
        return () => clearInterval(interval)
    })
    return (
        <>
            <section className={styles.homeAbout}>
                <div className={styles.homeAboutFlex}>
                    {/* image slider */}

                    <div className={styles.homeAboutBox}>
                        <motion.div initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }} className={styles.homeAboutBoxInner}>
                            <h1>SPP</h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 1, ease: "easeOut" }} className={styles.homeaboutimage}>
                            <img src={images[currentImage]} alt="Packaging" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.0, ease: "easeOut" }} className={styles.homeAboutBoxImg}>
                            <img src={cover} alt='cover' />
                        </motion.div>
                    </div>


                    {/* About */}

                    <div className={styles.homeAboutText}>
                        <motion.div initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 1, ease: "easeOut" }} className={styles.homeAboutTextInner}>
                            <p>About Us</p>
                            <h1>A family-run press <br />built on quality.</h1>
                            <div className={styles.homeAboutpara}>
                                <p>Founded by Ram Paul ji, Saini Offset Printing Press began as a small neighbourhood
                                    press in Bari Brahmana with one promise  never compromise on print quality.</p>
                                <p>For over two decades we've served businesses, shops, schools and individuals across
                                    Jammu — from premium visiting cards and bill books to bulk brochures, stickers and packaging.</p>
                                <p>When you call, you speak to the people actually printing your work. That's our edge.</p>
                            </div>
                            <div className={styles.homeAboutButton}>
                                <button>More About Us <MoveRight size={23} className={styles.arrow} /></button>
                            </div>
                        </motion.div>
                    </div>


                </div>
            </section>
        </>
    );
}

export default HomeAbout;