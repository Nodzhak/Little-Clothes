import React, { Component } from 'react';
import styles from './Comments.module.css';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleComments: 6,
    };
    this.showMoreComments = this.showMoreComments.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { rating, name, title, text } = this.state;
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    localStorage.setItem('comments', JSON.stringify([...comments, { rating, name, title, text }]));
    this.setState({
      rating: 0,
      name: '',
      title: '',
      text: '',
    });
  };

  showMoreComments() {
    this.setState((prevState) => ({
      visibleComments: prevState.visibleComments + 4,
    }));
  }

  render() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const { visibleComments } = this.state;

    return (
      <div className={styles.comment}>
        <h2>Comments</h2>
        <div className={styles.commentListContainer}>
          <ul className={styles.commentList}>
            {comments.slice(0, visibleComments).map((comment, index) => (
              <li className={styles.commentItem} key={index}>
                <div className={styles.frame}>
                  <div className={styles.commentContent}>
                    <div className={styles.letter}>
                      <p>{comment.name.charAt(0).toUpperCase()}</p>
                    </div>
                    <div className={styles.commentDetails}>
                      <p className={styles.commentRating}>{comment.rating}</p>
                      <p className={styles.commentName}>{comment.name}</p>
                      <p className={styles.commentTitle}>{comment.title.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className={styles.commentText}>
                    <p>{`${comment.text.charAt(0).toUpperCase()}${comment.text.slice(1)}`}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {comments.length > visibleComments && (
            <button className={styles.showMoreButton} onClick={this.showMoreComments}>
              SEE MORE
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Comments;