import React from 'react';
import styles from "./OurCare.module.css";
import one from './images/one.svg'
import two from './images/two.svg'
import three from './images/three.svg'
import four from './images/four.svg'
import smallcircle from './images/smallcircle.svg'
import bigcircle from './images/bigcircle.svg'
import girls from './images/girls.jpg'
import hands from './images/hands.jpg'
import heart from './images/heart.svg'
import human from './images/human.svg'
import wand from './images/wand.svg'



const OurCare = () => {
  return (
    <div className={styles.ourcare}>
        <div className={styles.firstColumn}>
            <p>OUR CARE</p>
            <h2>We prioritize your peace of mind.</h2>
            <div className={styles.paragraph}>
                <img src={one} alt="one" />
                <h3>saving your time </h3>
                <p>Each item in our collection seamlessly matches the next. Invest in a few pieces or the entire line for a season's worth of clothing options, designed to last and be loved by others once your little one has grown.</p>
            </div>
            <div className={styles.paragraph}>
                <img src={two} alt="two" />
                <h3>ethical manufacturing </h3>
                <p>Our commitment to ethical production isn’t just rhetoric. We place the welfare of workers and the environment at the forefront of our decision making. Always.</p>
            </div>
            <div className={styles.hands}><img src={hands} alt="hands" /></div>
            <div className={styles.human}><img src={human} alt="human" /></div>
            <div className={styles.smallcircle}><img src={smallcircle} alt="small circle" /></div>
            <div className={styles.bigcircle}><img src={bigcircle} alt="big circle" /></div>
            <div className={styles.heart}><img src={heart} alt="heart" /></div>
        </div>
        <div className={styles.wand}><img src={wand} alt="wand" /></div>
        <div className={styles.secondColumn}>
            <img src={girls} alt="girls" />
            <div className={styles.paragraph}>
                <img src={three} alt="three" />
                <h3>The highest quality </h3>
                <p>We use only he highest quality sustainable fabrics, including GOTS-certified organic cotton and OEKO-TEX    STANDARD 100 linen, to ensure your child's delicate skin is cared for.</p>
            </div>
            <div className={styles.paragraph}>
                <img src={four} alt="four" />
                <h3>womAn owned brand </h3>
                <p>When you choose us, you're supporting an ethical and sustainable small business owned by a woman. We don't just talk the talk, we walk the walk.</p>
            </div>
        </div>

    </div>
  );
}

export default OurCare;