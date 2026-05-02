import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/spp1.png'
import { NavLink } from 'react-router'   // ← only NavLink, removed Link

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
                        <ul><li onClick={() => setMenuOpen(false)}><NavLink to="/" className={({ isActive }) => isActive ? styles.navActive : ''}>Home</NavLink></li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}><NavLink to="/about" className={({ isActive }) => isActive ? styles.navActive : ''}>About</NavLink></li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}><NavLink to="/service" className={({ isActive }) => isActive ? styles.navActive : ''}>Service</NavLink></li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}><NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.navActive : ''}>Portfolio</NavLink></li></ul>
                        <ul><li onClick={() => setMenuOpen(false)}><NavLink to="/contact" className={({ isActive }) => isActive ? styles.navActive : ''}>Contact</NavLink></li></ul>

                        <button className={styles.mobileBtn} onClick={() => setMenuOpen(false)}>
                            Get Quote
                        </button>
                    </div>

                    <button className={styles.navButton}>Get Quote</button>

                    <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? '✕' : '☰'}
                    </div>

                </div>
            </div>
        </nav>
     );
}

export default Navbar;