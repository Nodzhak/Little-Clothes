import React from 'react';
import ReadMore from '../../ReadMore/ReadMore.jsx'
import styles from "./Meet.module.css";
import girl from './images/girl.jpg'
import leaf from './images/leaf.svg'
import leafiet from './images/leafiet.jpg'
import treehouse from './images/treehouse.svg'

const Meet = () => {
  return (
    <div className={styles.meet}>
      <div className={styles.images}>
        <div className={styles.girl}><img src={girl} alt="girl" /></div>
        <div className={styles.leaf}><img src={leaf} alt="leaf" /></div>
        <div className={styles.leafiet}><img src={leafiet} alt="leafiet" /></div>
        <div className={styles.treehouse}><img src={treehouse} alt="treehouse" /></div>
      </div>
      <div className={styles.text}>
        <p>WELCOME</p>
        <h2>Hi, meet      TreeHouse.</h2>
        <p>Mindfully crafted gender-neutral children's clothing focused on your little one and designed with great care for our planet and the people on it.</p>
        <ReadMore />
      </div>
    </div>
  );
}

export default Meet;