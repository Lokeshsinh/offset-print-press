import React from 'react'
import styles from './WhatPrint.module.css'
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import offset from '../../assets/offprint.jpg'
import screen from '../../assets/screenprint.jpg'
import digital from '../../assets/digitalprint.jpg'
import station from '../../assets/books.jpg'

function WhatPrint() {

    const printTypes = [
        {
            id: 1,
            img: offset,
            title: "Offset Printing",
            description: "Visiting cards, letterheads, bill books, brochures and bulk jobs.",
        },

        {
            id: 2,
            img: screen,
            title: "Screen Printing",
            description: "Stickers, labels, plastic & packaging printing, promotional items.",
        },

        {
            id: 3,
            img: digital,
            title: "Digital Printing",
            description: "Posters, flyers, certificates, ID cards & custom short-runs.",
        },

        {
            id: 4,
            img: station,
            title: "Stationery Supply",
            description: "Office stationery, printed notebooks, files, folders & receipt books.",
        },

    ]
    return (
        <section className={styles.WhatPrint}>
            <div className={styles.WhatPrintContainer}>
                <motion.div className={styles.whatPrintHeading} initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h3>What We Print</h3>
                    <h1>Every kind of print <br />made with care.</h1>
                    <span></span>
                </motion.div>

                <div className={styles.printgrid}>
                    
                    {printTypes.map((print) => (
                        <>
                            <motion.div    key={print.id} initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}overlay
                                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }} className={styles.printItem}>
                                <img src={print.img} alt={print.title} />
                                <div className={styles.overlay}>
                                    <h2>{print.title}</h2>
                                    <label className={styles.printline}></label>
                                    <p>{print.description}</p>
                                    <span className={styles.learn}>Learn more <MoveRight size={20} className={styles.arrow} /></span>
                                </div>
                            </motion.div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatPrint;