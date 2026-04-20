import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/spp1.png'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return ( 
        <nav className={styles.navPrint}>
            <div className={styles.navbar}>
                <div className={styles.navFlex}>

                    {/* Logo */}
                    <div className={styles.navLogo}>
                        <img src={logo} alt='logo' />
                    </div>

                    {/* Links */}
                    <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                        <ul><li onClick={() => setMenuOpen(false)}>Home</li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}>About</li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}>Service</li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}>Portfolio</li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}>Contact</li></ul>

                        {/* Mobile Button */}
                        <button 
                            className={styles.mobileBtn}
                            onClick={() => setMenuOpen(false)}
                        >
                            Get Quote
                        </button>
                    </div>

                    {/* Desktop Button */}
                    <button className={styles.navButton}>
                        Get Quote
                    </button>

                    {/* Hamburger */}
                    <div 
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </div>

                </div>
            </div>
        </nav>
     );
}

export default Navbar;