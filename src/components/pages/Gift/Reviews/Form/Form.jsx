import React, { Component } from 'react';
import Rating from '../Rating/Rating'; 
import styles from './Form.module.css'; 

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      name: '',
      title: '',
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { rating, name, title, text } = this.state;
    this.props.onSubmit({ rating, name, title, text }); 
    this.setState({
      rating: 0,
      name: '',
      title: '',
      text: ''
    });
  
    // Зберегти коментарі в localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    localStorage.setItem('comments', JSON.stringify([...comments, { rating, name, title, text }]));
  };

  render() {
    const { rating, name, title, text } = this.state;

    return (
      <div className={styles.reviewForm}>
        <form onSubmit={this.handleSubmit}>
            <div><Rating onChange={(value) => this.setState({ rating: value })} /></div>
          
          <div className={styles.row}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Review Title"
            onChange={this.handleChange}
          />
          <textarea
            name="text"
            value={text}
            placeholder="Your Review"
            onChange={this.handleChange}
          />
          

          </div>
          <div className={styles.button}><button type='submit' >Publish</button></div>
        </form>
      </div>
    );
  }
}

export default Form;