import React, { Component } from 'react'
import styles from './People.module.css'
import smile from '../images/smile.jpg'
import worker from '../images/worker.jpg'

export default class People extends Component {
  render() {
    return (
      <div className={styles.people}>
        <div>
            <h2>People</h2>
            <h4>workers are employed locally, 98% of them living not further than 10km from production unit</h4>
            <p>Those who cut, sew, and dye our garments are true artisans who are respected, well compensated and work in healthy and safe environments. They enjoy all of the perks associated with their esteemed profession, including health care benefits and paid leave.</p>
            <img src={smile} alt="smile" />
        </div>
        <div>
            <img src={worker} alt="worker" />
        </div>
      </div>
    )
  }
}
