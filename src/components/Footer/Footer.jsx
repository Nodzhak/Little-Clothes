import React, { useState } from 'react';
import { FaPaypal } from "react-icons/fa";
import { RiMastercardLine } from "react-icons/ri";
import { RiVisaLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import styles from "./Footer.module.css";
import leafOne from './images/leafOne.svg';
import leafTwo from './images/leafTwo.svg';
import leafThree from './images/leafThree.svg';
import logo from './images/logo.svg';
import up from './images/up.svg';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.footer}>
            <img src={leafOne} alt="leaf One" className={styles.leafOne}/>
            <img src={leafTwo} alt="leaf Two" className={styles.leafTwo}/>
            <img src={leafThree} alt="leaf Three" className={styles.leafThree}/>
            <div className={styles.firstColumn}>
                <h3>subscribe to our mailing list and get 15% off your first order</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">I’m in</button>
            </form>
            <img src={logo} alt="logo" />
            <p>Tree House 2023 © All Rights reserved</p>
            </div>
            <div className={styles.secondColumn}>
                <div className={styles.sitemap}>
                <h4>SITEMAP</h4>
                <nav>
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Meet us</a></li>
                        <li><a href="">Our impact</a></li>
                        <li><a href="">Gift cards</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </nav>
                </div>
                <div className={styles.sitemap}>
                    <h4>SOCIAL</h4>
                    <ul>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Pinterest</a></li>
                    </ul>
                </div>
                <div className={styles.sitemap}>
                    <h4>CUSTOMER CARE</h4>
                        <ul>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Delivery & return</a></li>
                            <li><a href="">Track your order</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                </div>
                <div className={styles.sitemap}>
                    <h4>PAYMENT</h4>
                    <ul>
                        <li><a href=""><FaPaypal /></a></li>
                        <li><a href=""><RiMastercardLine /></a></li>
                        <li><a href=""><RiVisaLine /></a></li>
                        <li><a href=""><FaGooglePay /></a></li>
                        <li><a href=""><FaApplePay /></a></li>
                    </ul>
                </div>
            </div>
            <button className={styles.scrollToTop} onClick={scrollToTop}>
                <img src={up} alt="Scroll to top" />
            </button>
        </div>
    );
};

export default Footer;