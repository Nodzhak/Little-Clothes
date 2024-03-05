import React, { Component } from 'react';
import styles from '../Card.module.css';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

export default class Important extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded1: false,
      isExpanded2: false
    };
    this.toggleExpand1 = this.toggleExpand1.bind(this);
    this.toggleExpand2 = this.toggleExpand2.bind(this);
  }

  toggleExpand1() {
    this.setState(prevState => ({
      isExpanded1: !prevState.isExpanded1
    }));
  }

  toggleExpand2() {
    this.setState(prevState => ({
      isExpanded2: !prevState.isExpanded2
    }));
  }

  render() {
    const { isExpanded1, isExpanded2 } = this.state;
    return (
      <div>
        <div className={styles.important}>
          <div className={styles.show}>
            <h3>important</h3>
            <button type='button' onClick={this.toggleExpand1}>{isExpanded1 ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}</button>
          </div>
          {isExpanded1 && (
            <div>
              <ul>
                <li><p>Be sure to click on 'SEND GIFT CARD' on this page as you place your order to either Email now, Schedule an Email date for later, Instant Message a link to the recipient or Print to give in person. Plus you can add any Message here as well.</p></li>
                <li><p>Our gift cards have no additional are valid for 1 year from the date of purchase.</p></li>
                <li><p>Treehouse Gift Cards may not be purchased using promotional offers or discounts</p></li>
              </ul>
            </div>
          )}
        </div>
        <hr className={styles.hr}/>
        <div className={styles.important}>
          <div className={styles.show}>
            <h3>What else?</h3>
            <button type='button' onClick={this.toggleExpand2}>{isExpanded2 ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}</button>
          </div>
          {isExpanded2 && (
            <div>
              <ul>
                <li><p>Treehouse Cards are available for any amount between 25.00 USD and 500.00 USD </p></li>
                <li><p>You may have them sent to your email or emailed directly to the recipient with a personal message.</p></li>
                <li><p>If the denomination you would like is not available here, simply email us at info@mygreenkid.com</p></li>
                <li><p>Purchases will be deducted from the Gift Card until the value reaches zero. To check your balance, please email us at info@mygreenkid.com</p></li>
              </ul> 
            </div>
          )}
        </div>
        <hr className={styles.hr}/>
      </div>
    );
  }
}
