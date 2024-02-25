import React, { Component } from 'react'
import ShopNow from "../../ShopNow/ShopNow.jsx";
import styles from './Commitment.module.css'

export default class Commitment extends Component {
  render() {
    return (
      <div className={styles.commitment}>
        <h2>Our commitment to the health of our children and the planet they’ll inherit from us is sewn into every piece we put out into this world.</h2>
        <ShopNow />
      </div>
    )
  }
}
