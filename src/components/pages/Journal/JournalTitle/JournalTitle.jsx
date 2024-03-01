import stroke from '../images/stroke.svg'
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './JournalTitle.module.css';
import articles from '../articles.json';

export default class JournalTitle extends Component {
  render() {
    const article1 = articles.find(article => article.id === 1);
    const article2 = articles.find(article => article.id === 2);
    const article3 = articles.find(article => article.id === 3);
    const article4 = articles.find(article => article.id === 4);

    const renderTitleContent = (article) => {
      return article.titleContent[0].slice(0, 110) + '...';
    };

    return (
      <div>
        <div className={styles.title}>
          <h4>only helpful thoughts</h4>
          <h2>Our journal</h2>
          <p>Here you can read our thoughts all things sustainable kids fashion. Just a bit of inspiration.</p>
        </div>
        <div className={styles.columns}>
          <NavLink to={`/articles/${article1.id}`}>
            <div className={styles.firstNews}>
              <img src={article1.titleImage} alt="shop" />
              <div className={styles.content}>
                <a href=""><h3>{article1.title}</h3></a>
                <p>{renderTitleContent(article1)}</p>
                <a href="">READ MORE<img src={stroke} alt="stroke" /></a>
              </div>
            </div>
          </NavLink>
          <div className={styles.most}>
            <h3>Most popular</h3>
            <NavLink to={`/articles/${article2.id}`}>
              <div className={styles.secondNews}>
                <img src={article2.titleImage} alt="first" />
                <div className={styles.secondNewsContent}>
                  <a href=""><h3>{article2.title}</h3></a>
                </div>
              </div>
            </NavLink>
            <NavLink to={`/articles/${article3.id}`}>
              <div className={styles.secondNews}>
                <img src={article3.titleImage} alt="second" />
                <div className={styles.secondNewsContent}>
                  <a href=""><h3>{article3.title}</h3></a>
                </div>
              </div>
            </NavLink>
            <NavLink to={`/articles/${article4.id}`}>
              <div className={styles.secondNews}>
                <img src={article4.titleImage} alt="third" />
                <div className={styles.secondNewsContent}>
                  <a href=""><h3>{article4.title}</h3></a>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}