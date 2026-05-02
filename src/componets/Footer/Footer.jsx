import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/spp2.png'
import { MapPin } from 'lucide-react';
import { Phone, Mail } from 'lucide-react';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterContainer}>
                <div className={styles.FooterContent}>
                    <div className={styles.FooterImg}>
                        <img src={logo} alt='logo' />
                    </div>
                    <p>A Home of Quality Printing — serving Bari Brahmana & Jammu with offset,
                        screen, digital printing and stationery supply.</p>
                </div>

                {/* Lines */}

                <div className={styles.FooterLines}>
                    <div className={styles.FooterLine}>
                        <h4>Explore</h4>
                    </div>
                    <div className={styles.FooterHome}>
                        <span>Home</span><br />
                        <span>About Us</span><br />
                        <span>Service</span><br />
                        <span>Portfolio</span><br />
                        <span>Contact Us</span>
                    </div>
                </div>

                {/* services */}
                <div className={styles.FooterLines}>
                    <div className={styles.FooterLine}>
                        <h4>Services</h4>
                    </div>
                    <div className={styles.FooterHome}>
                        <span>Offset Printing</span><br />
                        <span>Screen Printing</span><br />
                        <span>Digital Printing</span><br />
                        <span>Stationery Supply</span><br />
                        <span>Portfolio</span>
                    </div>
                </div>

                {/* Contact */}

                <div className={styles.FooterLines}>
                    <div className={styles.FooterLine}>
                        <h4>Reach Us</h4>
                    </div>
                    <div className={styles.FooterHome}>
                        <span className='FooterSpan'><MapPin size={15} style={{ marginRight: "2px" }} /> 123 Main Street, Bari Brahmana</span><br />
                        <span className='FooterSpan'><Phone size={15} style={{ marginRight: "10px" }} />Phone: +91 9876543210</span><br />
                        <span className='FooterSpan'><Mail size={15} style={{ marginRight: "10px" }} />Email: info@spp2.com</span>
                    </div>
                </div>

                {/* Lines */}

            </div>

            <div className={styles.Footerborderline}></div>
            {/* copy right */}
            <div className={styles.FooterCopyright}>
                <p>&copy; 2026 Saini Offset Printing Press. All rights reserved.</p>
            </div>

            {/* Saini */}
            <div className={styles.marquee}>
                <div className={styles.FooterSizes}>
                    <h1>Saini Offset Printing Press.</h1>
                    <h1>Saini Offset Printing Press.</h1>

                    {/* duplicate for seamless loop */}
                    <h1>Saini Offset Printing Press.</h1>
                    <h1>Saini Offset Printing Press.</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;