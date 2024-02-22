import React, { Component } from 'react';
import Form from './Form';
import styles from './Contacts.module.css';
import arrow from './images/arrow.svg';
import arrowtwo from './images/arrowtwo.svg';
import cake from './images/cake.svg';
import girl from './images/girl.jpg';
import groupel from './images/groupel.svg';
import hands from './images/hands.jpg';
import leaf from './images/leaf.svg';
import leaftwo from './images/leaftwo.svg';
import list from './images/list.svg';
import seeyousoon from './images/seeyousoon.svg';
import leafthree from './images/leafthree.svg';

export default class Contacts extends Component {
  render() {
    return (
      <div className={styles.contactsContainer}>
        <div>
          <img src={arrow} alt="arrow" className={styles.arrow}/>
          <img src={arrowtwo} alt="arrowtwo" className={styles.arrowtwo}/>
          <img src={cake} alt="cake" className={styles.cake}/>
          <img src={girl} alt="girl" className={styles.girl}/>
          <img src={groupel} alt="groupel" className={styles.groupel}/>
          <img src={hands} alt="hands" className={styles.hands}/>
          <img src={leaf} alt="leaf" className={styles.leaf}/>
          <img src={leaftwo} alt="leaftwo" className={styles.leaftwo}/>
          <img src={leafthree} alt="leafthree" className={styles.leafthree}/>
          <img src={list} alt="list" className={styles.list}/>
          <img src={seeyousoon} alt="seeyousoon" className={styles.seeyousoon}/>
        </div>
        <div className={styles.sectionFirst}>
          <p className={styles.up}>Drop us a line!</p>
          <h3>Let's be social!</h3>
          <p className={styles.bottom}>We’re here to help, for everything and anything, chat us here!</p>
        </div>
        <div className={styles.sectionSecond}>
          <p className={styles.up}>EMAIL</p>
          <h3>info@mygreenkid.com</h3>
          <p className={styles.bottom}>For inquiries, returns, and exchanges and any question</p>
        </div>
        <Form />
      </div>
    );
  }
}
