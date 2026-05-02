import React from 'react'
import styles from './AboutCards.module.css'
import { Printer, Search, Clock, Smile } from "lucide-react";
import { motion } from 'framer-motion';
function AboutCards() {
    const cards = [
        {
            id: 1,
            icon: Printer,
            title: "Premium Print Quality",
            description: "We use high-quality materials and advanced printing techniques to deliver sharp, clear, and professional results every time"
        },

        {
            id: 2,
            icon: Search,
            title: "Attention to Detail",
            description: "Every print is carefully reviewed to ensure perfect alignment, accurate colors, and flawless finishing."
        },
        {
            id: 3,
            icon: Printer,
            title: "Reliable & Timely Delivery",
            description: "We use high-quality materials and advanced printing techniques to deliver sharp, clear, and professional results every time"
        },

        {
            id: 4,
            icon: Smile,
            title: "Customer Satisfaction",
            description: "We focus on understanding customer needs and delivering printing solutions that exceed expectations."
        },
    ]
    return (
        <>
            <section className={styles.Aboutcards}>
                <motion.div className={styles.AboutCardstext} initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Commitment to quality printing </h1>
                    <p></p>
                </motion.div>



                <div className={styles.AboutGridCards} >
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div key={card.id} className={styles.card} initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                                <Icon size={40} className={styles.icon} />
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default AboutCards;