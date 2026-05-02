import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/spp1.png'
import {Link} from 'react-router'

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
                       <Link style={{textDecoration:"none", color: "black"}} to="/"> <ul><li onClick={() => setMenuOpen(false)}>Home</li></ul></Link>
                        <Link style={{textDecoration:"none", color: "black"}} to="/about"> <ul><li onClick={() => setMenuOpen(false)}>About</li></ul></Link>
                        <Link style={{textDecoration:"none", color: "black"}} to="/service"> <ul><li onClick={() => setMenuOpen(false)}>Service</li></ul></Link>
                        <Link style={{textDecoration:"none", color: "black"}} to="/portfolio"> <ul><li onClick={() => setMenuOpen(false)}>Portfolio</li></ul></Link>
                        <Link style={{textDecoration:"none", color: "black"}} to="/contact"> <ul><li onClick={() => setMenuOpen(false)}>Contact</li></ul></Link>

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