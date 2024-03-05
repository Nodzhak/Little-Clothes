import React, { Component } from 'react';
import styles from './Comments.module.css'

class Comments extends Component {
  render() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    return (
      <div className={styles.comment}>
        <h2>Comments</h2>
        <div className={styles.list}>
        <ul >
          {comments.map((comment, index) => (
            <li className={styles.structure} key={index}>
              <div className={styles.letter}><p>{comment.name.charAt(0).toUpperCase()}</p></div>
              <div className={styles.text}>
                <p>Rating: {comment.rating}</p>
                <p>Name: {comment.name}</p>
                <p>Title: {comment.title}</p>
                <p>Text: {`${comment.text.charAt(0).toUpperCase()}${comment.text.slice(1)}`}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
