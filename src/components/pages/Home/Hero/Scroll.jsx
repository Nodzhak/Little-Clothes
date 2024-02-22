import React from 'react';
import style from "./Hero.module.css";
import scroll from './images/scroll.svg';

const Scroll = () => {
  const scrollDown = () => {
    window.scrollBy({top: window.innerHeight, behavior: 'smooth'})
  }

  return (
    <div className={style.scrollContainer}>
      <button type='button' className={style.scroll} onClick={scrollDown}>
        <span>Scroll</span>
        <img src={scroll} alt="Scroll icon" />
      </button>
    </div>
  );
}

export default Scroll;