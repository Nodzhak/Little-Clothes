import React, { Component } from 'react'
import styles from './Packaging.module.css'
import packaging from '../images/packaging.jpg'
import groupel from '../images/groupel.svg'
import shell from '../images/shell.svg'
import star from '../images/star.svg'


export default class Packaging extends Component {
  render() {
    return (
        <div>
        <div className={styles.packaging}>
        <div className={styles.column}><img src={packaging} alt="packaging" /></div>
        <div className={styles.column}>
            <div className={styles.content}>
            <img src={groupel} alt="group el" />
            <img src={shell} alt="shell" />
            <h2>Packaging</h2>
            <h4>the issue of responsible packaging is an ever moving target.</h4>
            <p>We give careful attention to the impact of our packaging materials. We are committed to eliminating plastic, minimizing all unnecessary packaging. The materials we do use to keep your item clean and safe are fully compostable.</p>
            </div>
            
        </div>
      </div>
      <div className={styles.footnote}>
        <img src={star} alt="star" />
        <h4>Every brand has a choice, and our choice is to be kind.</h4>
      </div>
        </div>
      
    )
  }
}
