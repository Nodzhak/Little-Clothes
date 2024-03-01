import React, { Component } from 'react'
import styles from './Commitment.module.css'
import ShopNow from '../../ShopNow/ShopNow'
import livello from '../images/livello.svg'

export default class Commitment extends Component {
  render() {
    return (
      <div className={styles.commitment}>
        <div className={styles.text}>
            <p>Our commitment to you extends beyond just the our clothing - we prioritize the well-being of your children, the environment, and the workers who craft our pieces.</p>
            <ShopNow/>
        </div>
        <div><img src={livello} alt="livello" /></div>
      </div>
    )
  }
}
