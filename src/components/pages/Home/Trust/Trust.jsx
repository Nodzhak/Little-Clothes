import React from 'react';
import styles from "./Trust.module.css";
import dres from './images/dres.jpg';
import graphicelement from './images/graphicelement.svg';
import inserita from './images/inserita.svg';
import kite from './images/kite.svg';
import leaf from './images/leaf.svg';
import play from './images/play.svg';
import treehouse from './images/treehouse.svg';
import line from './images/line.svg';
import ShopNow from '../../ShopNow/ShopNow';



const Trust = () => {
    
    return (
       <div className={styles.trust}>
        <div className={styles.images}>
        <img src={graphicelement} alt="graphice element" className={styles.graphicelement}/>
        <img src={inserita} alt="inserita" className={styles.inserita}/>
        <img src={kite} alt="kite" className={styles.kite}/>
        <img src={leaf} alt="leaf" className={styles.leaf}/>
        <img src={play} alt="play" className={styles.play}/>
        <img src={treehouse} alt="treehouse" className={styles.treehouse}/>
        <img src={line} alt="line" className={styles.line}/>
        </div>
        <div className={styles.center}>
            <p>you can trust</p>
            <h2>Transparency in every detail</h2>
            <img src={dres} width={597} alt="dres" />
            <ShopNow />
        </div>
        
        
       </div>
    );
}

export default Trust;