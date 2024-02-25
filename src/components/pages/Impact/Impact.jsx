import React, { Component } from 'react'
import styles from './Impact.module.css'
import Environment from './Environment/Environment.jsx'
import Commitment from './Commitment/Commitment.jsx'
export default class Impact extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Environment />
        <Commitment />
      </div>
    )
  }
}
