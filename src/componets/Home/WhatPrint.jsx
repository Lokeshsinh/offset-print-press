import React from 'react'
import styles from './WhatPrint.module.css'
import { motion } from 'framer-motion';
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
            title: "Stationery SupplyOffset Printing",
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
                        <div className={styles.printItem} key={print.id}>
                            <img src={print.img} alt={print.title} />
                            <h1>Hello</h1>
                        </div>
                   </>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatPrint;