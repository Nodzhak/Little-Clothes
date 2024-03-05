import React, { Component } from 'react';
import styles from './Gift.module.css';
import Card from './Card/Card';
import Comments from './Reviews/Comments/Comments';
import Form from '../Gift/Reviews/Form/Form'; 

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  handleCommentSubmit = (comment) => {
    this.setState(prevState => ({
      comments: [...prevState.comments, comment]
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <Card />
        <Form onSubmit={this.handleCommentSubmit} /> 
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default Gift;