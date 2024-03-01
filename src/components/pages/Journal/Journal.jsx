import React from 'react';
import styles from './Journal.module.css'
import JournalTitle from './JournalTitle/JournalTitle.jsx'
import JournalArticles from './JournalArticlesPages/JournalArticles.jsx'
import Commitment from './Commitment/Commitment.jsx'

const Journal = () => {
  return (
    <div className={styles.container}>
      <JournalTitle />
      <JournalArticles />
      <Commitment />
    </div>
  );
}

export default Journal;

