import React, { Component } from 'react';
import styles from './Contacts.module.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = this.state;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  }

  render() {
    const { name, email, phone, message } = this.state;
    return (
      <div className={styles.container}>
        <h2>For everything under the sun, write us!</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formGroup}>
            <input type="text" id="name" placeholder="NAME" name="name" value={name} onChange={this.handleChange} />
          </div>
          <div className={styles.formGroup}>
            <input type="email" id="email" name="email" placeholder="EMAIL" value={email} onChange={this.handleChange} />
          </div>
          <div className={styles.formGroup}>
            <input type="tel" id="phone" name="phone" placeholder='PHONE' value={phone} onChange={this.handleChange} />
          </div>
          <div className={styles.formGroup}>
            <textarea id="message" name="message" placeholder='TEXT' value={message} onChange={this.handleChange} />
          </div>
          <button type="submit" className={styles.button}>SEND</button>
        </form>
      </div>
    );
  }
}