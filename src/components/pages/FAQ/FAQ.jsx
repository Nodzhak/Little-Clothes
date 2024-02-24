import React, { Component } from 'react';
import frame from './images/frame.jpg';
import cake from './images/cake.svg';
import groupel from './images/groupel.svg';
import leaffife from './images/leaffife.svg';
import leaffour from './images/leaffour.svg';
import leafone from './images/leafone.svg';
import leafthree from './images/leafthree.svg';
import leaftwo from './images/leaftwo.svg';
import or from './images/or.svg';
import withpleasure from './images/withpleasure.svg';
import faqFirst from './faqF.json';
import faqSecond from './faqS.json';
import faqThird from './faqT.json';
import ViewMore from './ViewMore'
import styles from "./FAQ.module.css";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqItems: faqFirst.map(item => ({ ...item, isOpen: false })),
      faqItemsSecond: faqSecond.map(item => ({ ...item, isOpen: false })),
      faqItemsThird: faqThird.map(item => ({ ...item, isOpen: false })),
    };
  }

  toggleOpen = (id) => {
    this.setState((prevState) => ({
      faqItems: prevState.faqItems.map((item) => 
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      ),
    }));
  };

  toggleOpenSecond = (id) => {
    this.setState((prevState) => ({
      faqItemsSecond: prevState.faqItemsSecond.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      ),
    }));
  };

  toggleOpenThird = (id) => {
    this.setState((prevState) => ({
      faqItemsThird: prevState.faqItemsThird.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      ),
    }));
  };

  render() {
    return (
      <div className={styles.faq}>
        <div className={styles.images}>
        <img src={withpleasure} alt="withpleasure" className={styles.withpleasure}/>
        <img src={leafone} alt="leaf one" className={styles.leafone}/>
        <img src={leaftwo} alt="leaf one" className={styles.leaftwo}/>
        <img src={leafthree} alt="leaf one" className={styles.leafthree}/>
        <img src={leaffour} alt="leaf one" className={styles.leaffour}/>
        <img src={leaffife} alt="leaf one" className={styles.leaffife}/>
        </div>
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
              <li key={i}><GoDotFill/>{answer}</li>
              ))}
              </ul>)}
            </div>
             </div>))}
        </div>

        <h3>Clothing Production</h3>
        <div className={styles.table}>
        {this.state.faqItemsSecond.map((item) => (
  <div key={item.id}>
    <div className={styles.question}>
      <h4>{item.question}</h4>
      <button onClick={() => this.toggleOpenSecond(item.id)}>
        {item.isOpen ? <FaMinus /> : <FaPlus />}
      </button>
    </div>

    <div className={styles.unswer}>
      {item.isOpen && (
        <ul>
          {item.answers.map((answer, i) => (
            <li key={i}>
              <GoDotFill />
              {answer}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
))}
        </div>

        <h3>Products / Sizing</h3>
        <div className={styles.table}>
        {this.state.faqItemsThird.map((item) => (
  <div key={item.id}>
    <div className={styles.question}>
      <h4>{item.question}</h4>
      <button onClick={() => this.toggleOpenThird(item.id)}>
        {item.isOpen ? <FaMinus /> : <FaPlus />}
      </button>
    </div>

    <div className={styles.unswer}>
      {item.isOpen && (
        <ul>
          {item.answers.map((answer, i) => (
            <li key={i}>
              <GoDotFill />
              {answer}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
))}
        </div>
        <ViewMore />
        <div className={styles.bottom}>
          <img src={groupel} width={105} alt="groupel" />
          <img src={cake} width={52} alt="cake" />
          <p>If you have other burning questions we weren't able to address here or just want to chat, text US</p>
          <ul>
            <li><a href="">INstagram</a></li>
            <li><a href="">facebook</a></li>
          </ul>
          <img src={or} width={31} alt="or" />
          <a href="" className={styles.email}>info@mygreenkid.com</a>
        </div>
      </div>
    );
  }
}