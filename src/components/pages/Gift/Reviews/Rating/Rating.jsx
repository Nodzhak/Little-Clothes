import React, { Component } from 'react';
import { LiaStarSolid } from "react-icons/lia";
import styles from './Rating.module.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  handleStarClick = (index) => {
    this.setState({ rating: index + 1 }); 
  };

  render() {
    const { rating } = this.state;

    return (
        <div className={styles.rating}>
          <h4>Rating</h4>
          <div className={styles.star}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? styles.starActive : styles.starInactive} 
              onClick={() => this.handleStarClick(index)}
            >
              <LiaStarSolid /> 
            </span>
          ))}
          </div>
          <h2>{rating}</h2>
        </div>
    );
  }
}

export default Rating;