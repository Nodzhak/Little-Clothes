import React, { Component } from 'react'
import styles from './Impact.module.css'
import Environment from './Environment/Environment.jsx'
import Commitment from './Commitment/Commitment.jsx'
import Process from './Process/Process.jsx'
import People from './People/People.jsx'
import Packaging from './Packaging/Packaging.jsx'
import Seriously from './Seriously/Seriously.jsx'

export default class Impact extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Environment />
        <Commitment />
        <Process />
        <People />
        <Packaging />
        <Seriously />
      </div>
    )
  }
}
