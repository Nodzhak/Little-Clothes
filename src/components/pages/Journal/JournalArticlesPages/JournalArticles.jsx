import React, { Component } from 'react';
import styles from './JournalArticles.module.css';
import articles from '../articles.json';
import { NavLink } from 'react-router-dom';

export default class JournalArticles extends Component {
  state = {
    visibleArticles: 3,
  };

  handleShowMore = () => {
    this.setState(prevState => ({
      visibleArticles: prevState.visibleArticles + 3,
    }));
  };

  render() {
    const { visibleArticles } = this.state;
    const visibleArticlesList = articles.slice(0, visibleArticles);
    console.log(visibleArticlesList);

    return (
      <div className={styles.journalArticles}>
        {visibleArticlesList.map(article => (
          <NavLink to={`/articles/${article.id}`} key={article.id}>
            <div className={styles.firstNews}>
              <div className={styles.content}>
                <p>02.06.2023</p>
                <h3>{article.title.slice(0, 78)}...</h3>
                <p>{article.titleContent[0].slice(0, 70)}...</p>
                <p>READ MORE</p>
              </div>
            </div>
          </NavLink>
        ))}
        {articles.length > visibleArticles && (
          <button className={styles.showMoreButton} onClick={this.handleShowMore}>
            READ MORE ARTICLES
          </button>
        )}
      </div>
    );
  }
}