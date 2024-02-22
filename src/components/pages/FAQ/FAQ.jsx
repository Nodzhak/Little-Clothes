import React, { Component } from 'react';
import frame from './images/frame.jpg';
import faqData from './faq.json';
import styles from "./FAQ.module.css";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqItems: faqData.map(item => ({ ...item, isOpen: false })),
    };
  }

  toggleOpen = (id) => {
    this.setState((prevState) => ({
      faqItems: prevState.faqItems.map((item) => 
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      ),
    }));
  };

  render() {
    return (
      <div className={styles.faq}>
        <div className={styles.frame}>
          <p>How can we help?</p>
          <h2>Frequently asked questions</h2>
          <img src={frame} alt="frame" />
        </div>
      <h3>Shipping/Returns/Exchanges</h3>
        <div className={styles.table}>
        {this.state.faqItems.map((item) => (
          <div key={item.id} >
            <div className={styles.question}>
            <h4>{item.question}</h4>
            <button onClick={() => this.toggleOpen(item.id)}>
            {item.isOpen ? <FaMinus/> : <FaPlus/>}
            </button>
            </div>
            
            <div className={styles.unswer}>
              {item.isOpen && (
              <ul>
              {item.answers.map((answer, i) => (
              <li key={i}><GoDotFill />{answer}</li>
              ))}
              </ul>)}
            </div>
  </div>
))}
        </div>
      </div>
    );
  }
}