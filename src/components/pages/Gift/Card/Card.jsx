import React, { Component } from 'react';
import styles from './Card.module.css';
import card from '../images/card.svg';
import prise from '../images/prise.svg';
import logo from '../images/logo.svg';
import groupel from '../images/groupel.svg';
import giftcard from '../images/giftcard.svg';
import Important from './Important/Important'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1 
    };
  }

  increaseQuantity = () => {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.firstColumn}>
          <img src={card} alt="card" />
          <div className={styles.imageContainer}>
            <img src={giftcard} alt="giftcard" />
            <img src={groupel} alt="groupel" />
            <img src={logo} alt="logo" />
            <img src={prise} alt="prise" />
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div>
            <h2>E-Gift card</h2>
            <p>A meaningful gift that lasts. Treehouse is love and care.</p>
            <div className={styles.tax}>
              <h3 >25.00 USD</h3>
              <p>(Tax included)</p>
            </div>
            <div className={styles.synonyms}>
              <div>
                <p>Amount</p>
                <select name="example" id="exampleSelect">
                  <option value="value1">25.00</option>
                  <option value="value2">50.00</option>
                  <option value="value3">100.00</option>
                  <option value="value4">150.00</option>
                  <option value="value5">200.00</option>
                  <option value="value6">500.00</option>
                </select>
              </div>
              <div>
                <p>Quantity</p>
                <div className={styles.quantity}>
                  <button onClick={this.decreaseQuantity}>-</button>
                  <span>{this.state.quantity}</span>
                  <button onClick={this.increaseQuantity}>+</button>
                </div>
              </div>
            </div>
            <div className={styles.buttonAdd}>
              <button type='button' >ADD TO CART</button>
            </div>
            <div className={styles.buttonSend}>
              <button type='button' >SEND AS A GIFT</button>
            </div>
            <hr className={styles.hr}/>
            <Important/>
          </div>
        </div>
      </div>
    );
  }
}
