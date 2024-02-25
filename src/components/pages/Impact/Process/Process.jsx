import React, { Component } from 'react'
import styles from './Process.module.css'
import machine from '../images/machine.jpg'
import yarn from '../images/yarn.jpg'
import skein from '../images/skein.svg'
import champion from '../images/champion.svg'


export default class Process extends Component {
  render() {
    return (
        <div className={styles.overflow}>
        <div className={styles.process}>
        <div><img src={machine} alt="machine" /></div>
        <div><img src={yarn} alt="yarn" /></div>
        <div className={styles.text}>
            <h2>Process</h2>
            <h4>We partner with factories and farmers in India committed to our principles</h4>
            <p>We take a hands-on approach in overseeing every stage of the production process and feel privileged to have partners who are GOTS and OEKO-TEX® certified, operate using renewable energy sources such as solar panels. Sustainability is at the forefront of their operations, read more about their initiatives here</p>
        </div>
            <img src={skein} alt="skein" />
            <img src={champion} alt="champion" />
      </div>
          <h1>champion your values</h1>
        </div>
      
    )
  }
}
