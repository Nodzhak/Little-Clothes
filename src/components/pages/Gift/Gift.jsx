import React, { Component } from 'react'
import styles from './Gift.module.css'
import Card from './Card/Card'


export default class Gift extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card />
      </div>
    )
  }
}
