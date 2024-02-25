import React from 'react';
import styles from "./Hero.module.css";
import hero from './images/people.jpg'
import ShopNow from '../../ShopNow/ShopNow.jsx'
import Scroll from './Scroll.jsx'

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
        <img width={1440} height={700} src={hero} alt="hero" />
        </div>
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p>TREEHOUSE:</p>
        <h1>Little Clothes. Big Impact.</h1>
        <p>High-quality children's clothing, crafted with care from sustainable materials that are kind to the planet. These timeless styles are the perfect companions for your little adventurer, wherever their imagination takes them. </p>
      </div>
      <ShopNow />
      </div> 
      <Scroll />
    </div>
  );
}

export default Hero;