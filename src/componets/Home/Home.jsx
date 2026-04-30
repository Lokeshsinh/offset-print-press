import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import banner from '../../assets/back.jpg'
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import back from '../../assets/back.jpg'
import id from '../../assets/banner/id1.jpg';
import lable from '../../assets/banner/lable.jpg'
import id2 from '../../assets/banner/id2.jpg'
import lable2 from '../../assets/banner/lable1.jpg'


function Home() {
    const images = [back, id2, lable2]
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
    }

 const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []); 
    return (
        <section className={styles.printHome}>
            <div className={styles.printbanner} style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.71)), url(${images[currentSlide]})`,
                 backgroundSize: "cover",
                 backgroundPosition:"center",
                 backgroundRepeat:"no-repeat"
            }}>
                <div className={styles.sliderButtons}>
                    <button onClick={prevSlide}>‹</button>
                    <button onClick={nextSlide}>›</button>
                </div>
                <motion.div className={styles.printcontent}>
                    <motion.div className={styles.printtext} initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <p>A Home of Quality Printing</p>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 60 }}
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
                        <button>Call Now  <MoveRight size={23} className={styles.arrow} /></button>
                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}

export default Home;