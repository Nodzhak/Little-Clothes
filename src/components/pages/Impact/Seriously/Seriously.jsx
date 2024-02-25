import React, { Component } from 'react'
import styles from './Seriously.module.css'
import ReadMore from '../../ReadMore/ReadMore.jsx'

export default class Seriously extends Component {
  render() {
    return (
      <div className={styles.seriously}>
        <h2>We care for the environmental as much as we care for the people involved in manufacturing our collections. It's a commitment we take seriously.</h2>
        <ReadMore />
      </div>
    )
  }
}
