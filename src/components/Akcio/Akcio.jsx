import React from 'react';
import ShopNow from '../Hero/ShopNow.jsx'
import styles from "./Akcio.module.css";
import chupachups from './images/chupachups.svg'
import cloth from './images/cloth.jpg'
import girls from './images/girls.jpg'
import percent from './images/percent.svg'
import stars from './images/stars.svg'
import boy from './images/boy.svg'

const Akcio = () => {


    return (
<div className={styles.akcio}>
    <div className={styles.columns}>
         <div className={styles.column}>
            <img src={chupachups} alt="chupa-chups" className={styles.svgOne}/>
            <img src={percent} alt="percent" className={styles.svgTwo}/>
            <p>Save yourself the headache of endless shopping with our Capsule Collection. Buy all 14 pieces, save 25%, and enjoy endless outfit options, dressing your littles in no time!</p>
            <ShopNow />
         </div>
         <div className={styles.column}>
            <img src={girls} alt="girls" />
         </div>
    </div>
    <div className={styles.bottom}>
        <img src={cloth} alt="cloth" className={styles.cloth}/>
        <img src={stars} alt="stars" className={styles.stars}/>
        <p className={styles.starsText}>The entire collection has a gender-neutral style and every item matches perfectly with the next.</p>
        <img src={boy} alt="boy" className={styles.boy}/>
        <h2 className={styles.boyText}>Buy less, buy better</h2>
    </div>
</div>
)
}

export default Akcio;