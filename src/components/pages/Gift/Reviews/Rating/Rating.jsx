import React, { Component } from 'react';
import styles from './Rating.module.css';

class Rating extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className={styles.rating}>
        <h4>Rating</h4>
        <div className={styles.star}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < value.length ? styles.starActive : styles.starInactive} 
              onClick={() => onChange('★'.repeat(index + 1))}
            >
              {index < value.length ? '★' : '☆'} 
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Rating;