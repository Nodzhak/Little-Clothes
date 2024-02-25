import React, { Component } from 'react'
import organic from '../images/organic.svg'
import oeko from '../images/oeko.svg'
import flowers from '../images/flowers.jpg'
import field from '../images/field.jpg'
import fifty from '../images/fifty.svg'
import ninetyone from '../images/ninetyone.svg'
import styles from './Environment.module.css'
import leafone from '../images/leafone.svg'
import leaftwo from '../images/leaftwo.svg'

export default class Environment extends Component {
  render() {
    return (
      <div className={styles.environment}>
        <div className={styles.firstColumn}>
            <h2>Environment</h2>
            <h4>from the way the cotton is farmed to how we package our products</h4>
            <p>We are committed to doing better on everything from how the cotton has been farmed, to the type of packaging we use to send your order. We go follow industry leading certification requirements throughout every step of our supply chain. Read more about  GOTS-certified organic cotton and OEKO-TEX     STANDART 100 linen.®</p>
            <div className={styles.icons}>
                <img src={organic} alt="organic" />
                <img src={oeko} alt="oeko" />
            </div>
            <img src={flowers} alt="flowers" />
        </div>
        <div className={styles.secondColumn}>
            <img src={field} alt="field" />
            <h3>CONVENTIONAL VS. ORGANIC</h3>
            <p>Conventional cotton production has a significant negative impact on the environment due to excessive water usage, heavy use of pesticides and fertilizers, soil degradation, and contribution to greenhouse gas emissions. We will use GOTS-certified organic cotton only to significantly reduce environmental harm. </p>
            <h3>did you know that?</h3>
            <div className={styles.column}>
              <div>
                <p>Organic Cotton contributes to </p>
                <img src={fifty} alt="fifty" />
                <p>less CO2 emissions </p>
                </div>  
              <div>
                <p>Organic Cotton uses</p>
                <img src={ninetyone} alt="ninetyone" />
                <p>less water </p>
              </div>
              <div>
                <img src={leafone} alt="leaf one" />
                <img src={leaftwo} alt="leaf two" />
              </div>
            </div>
        </div>
      </div>
    )
  }
}
