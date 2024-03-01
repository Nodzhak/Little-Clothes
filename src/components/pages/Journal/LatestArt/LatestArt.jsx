import React, { Component } from 'react';
import styles from './LatestArt.module.css';
import articles from '../articles.json';
import { NavLink } from 'react-router-dom';
import ourlatestarticles from '../images/ourlatestarticles.svg'

export default class LatestArt extends Component {
    render() {
        const lastThreeArticles = articles.slice(-3);

        return (<div className={styles.latestArt}>
            <div><img src={ourlatestarticles} alt="our latest articles" /></div>
            <div className={styles.journalArticles}>
            {lastThreeArticles.map(article => (
                <NavLink to={`/articles/${article.id}`} key={article.id} className={styles.newsLink}>
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
        </div>
        </div>
            
        );
    }
}