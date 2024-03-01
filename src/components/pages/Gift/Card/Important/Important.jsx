import React, { Component } from 'react';
import styles from '../Card.module.css';

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
            <h3>important 1</h3>
            <button type='button' onClick={this.toggleExpand1}>{isExpanded1 ? 'Hide' : 'Show'}</button>
          </div>
          {isExpanded1 && (
            <div>
              <p>Be sure to click on 'SEND GIFT CARD' on this page as you place your order to either Email now, Schedule an Email date for later, Instant Message a link to the recipient or Print to give in person. Plus you can add any Message here as well.</p>
              <p>Our gift cards have no additional are valid for 1 year from the date of purchase.</p>
              <p>Treehouse Gift Cards may not be purchased using promotional offers or discounts</p>
            </div>
          )}
        </div>
        <div className={styles.important}>
          <div className={styles.show}>
            <h3>What else?</h3>
            <button type='button' onClick={this.toggleExpand2}>{isExpanded2 ? 'Hide' : 'Show'}</button>
          </div>
          {isExpanded2 && (
            <div>
              <p>Treehouse Cards are available for any amount between 25.00 USD and 500.00 USD </p>
              <p>You may have them sent to your email or emailed directly to the recipient with a personal message.</p>
              <p>If the denomination you would like is not available here, simply email us at info@mygreenkid.com</p>
              <p>Purchases will be deducted from the Gift Card until the value reaches zero. To check your balance, please email us at info@mygreenkid.com</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
