import React, { useState } from 'react';
import styles from "./Slider.module.css";
import first from './image/first.jpg';
import second from './image/second.jpg';
import third from './image/third.jpg';
import fourth from './image/fourth.jpg';
import stroke from './image/stroke.svg';
import nextOne from './image/nextOne.svg';
import nextTwo from './image/nextTwo.svg';


const Slider = () => {
    const images = [first, second, third, fourth];
    const text = ["Сozy chic for the playground", "Effortless Beach Style", "Playdate With Friends 5th", "Lounging at home"];
    const [firstVisibleSlide, setFirstVisibleSlide] = useState(0);

    const prevSlide = () => {
        const newFirstVisibleSlide = (firstVisibleSlide === 0) ? images.length - 3 : firstVisibleSlide - 1;
        setFirstVisibleSlide(newFirstVisibleSlide);
    };

    const nextSlide = () => {
        const newFirstVisibleSlide = (firstVisibleSlide === images.length - 3) ? 0 : firstVisibleSlide + 1;
        setFirstVisibleSlide(newFirstVisibleSlide);
    };

    const progressBarWidth = `${((firstVisibleSlide) / (images.length - 3)) * 100}%`; 

    return (
       <div className={styles.sliderContainer}>
        <div className={styles.top}>
            <div>
                <p className={styles.perfect}>your perfect match</p>
                <h2 className={styles.title}>Shop the look</h2>
            </div>
            <div className={styles.controls}>
               <button className={styles.prev} onClick={prevSlide}><img src={nextOne} alt="Next-One" /></button>
               <button className={styles.next} onClick={nextSlide}><img src={nextTwo} alt="Next-Two" /></button>
            </div>
        </div>
           <div className={styles.slider}>
               {images.slice(firstVisibleSlide, firstVisibleSlide + 3).map((image, index) => (
                   <div key={index} className={styles.slide}>
                       <img src={image} alt={`Slide ${firstVisibleSlide + index}`} className={styles.img}/>
                       <div className={styles.text}>
                           <p>{text[firstVisibleSlide + index]}</p>
                           <div className={styles.view}>
                           <img src={stroke} alt="stroke" className={styles.stroke}/>
                           <p className={styles.viewP}> VIEW PRODUCTS</p>
                           </div>
                       </div>
                   </div>
               ))}
           </div>
           <div className={styles.progressBar} style={{width: progressBarWidth}}></div> 
       </div>
    );
}

export default Slider;