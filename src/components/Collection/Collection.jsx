import React, { useState } from 'react';
import styles from "./Collection.module.css";
import leaf from './images/leaf.svg'
import circle from './images/circle.svg'
import bottoms from './images/bottoms.jpg'
import hats from './images/hats.jpg'
import roompers from './images/roompers.jpg'
import shopall from './images/shopall.jpg'
import tops from './images/tops.jpg'

const Collection = () => {
    const [currentImage, setCurrentImage] = useState(0); 

    const images = [
        { src: tops, name: "Tops" },
        { src: bottoms, name: "Bottoms" },
        { src: roompers, name: "Roompers" },
        { src: hats, name: "Hats" },
        { src: shopall, name: "All Collection" },
    ];

    const changeImage = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className={styles.collection}>
            <p>let’s make shopping</p>
            <h2>What are you looking for?</h2>
            <img src={leaf} alt="leaf" className={styles.leaf}/>
            <div>
                <div className={styles.gallery}>
                    <img src={images[currentImage].src} alt={images[currentImage].name} />
                </div>
                <div className={styles.buttonContainer}>
                    {images.map((image, index) => (
                <button
                    key={index}
                    onClick={() => changeImage(index)}
                    className={`${styles.button} ${currentImage === index ? styles.activeButton : ''}`}
                >
                {image.name}
    </button>
  ))}
</div>
            </div>
        </div>
    );
}

export default Collection;