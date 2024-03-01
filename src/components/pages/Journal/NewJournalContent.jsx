import React from 'react';
import styles from './NewJournalContent.module.css';
import articles from './articles.json';
import { useParams } from 'react-router-dom';
import Commitment from './Commitment/Commitment';
import LatestArt from './LatestArt/LatestArt';

const NewJournalContent = () => {
  const { id } = useParams();

  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div className={styles.container}>Стаття не знайдена</div>;
  }

  const renderParagraphWithImage = (paragraph, idx, image) => (
    <div key={idx} className={styles.paragraph}>
      {image && <img src={image} alt={`Image ${idx}`} className={styles.image} />}
      <p>{paragraph}</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <h2>{article.title}</h2>
        {article.titleImage && (
          <img src={article.titleImage} alt={article.title} className={styles.titleImage} />
        )}
        <div className={styles.content}>
          {article.titleContent.map((paragraph, idx) =>
            renderParagraphWithImage(paragraph, idx, article.titleImages && article.titleImages[idx])
          )}
        </div>

        <h3>{article.subTitleA}</h3>
        {article.subTitleImageA && (
          <img src={article.subTitleImageA} alt={article.subTitleA} className={styles.subTitleImage} />
        )}
        <div className={styles.content}>
          {article.subTitleContentA.map((paragraph, idx) =>
            renderParagraphWithImage(paragraph, idx, article.subTitleImagesA && article.subTitleImagesA[idx])
          )}
        </div>

        <h3>{article.subTitleB}</h3>
        {article.subTitleImageB && (
          <img src={article.subTitleImageB} alt={article.subTitleB} className={styles.subTitleImage} />
        )}
        <div className={styles.content}>
          {article.subTitleContentB.map((paragraph, idx) =>
            renderParagraphWithImage(paragraph, idx, article.subTitleImagesB && article.subTitleImagesB[idx])
          )}
        </div>

        <h3>{article.subTitleC}</h3>
        {article.subTitleImageC && (
          <img src={article.subTitleImageC} alt={article.subTitleC} className={styles.subTitleImage} />
        )}
        <div className={styles.content}>
          {article.subTitleContentB.map((paragraph, idx) =>
            renderParagraphWithImage(paragraph, idx, article.subTitleImagesC && article.subTitleImagesC[idx])
          )}
        </div>

        <h3>{article.subTitleD}</h3>
        {article.subTitleImageD && (
          <img src={article.subTitleImageD} alt={article.subTitleD} className={styles.subTitleImage} />
        )}
        <div className={styles.content}>
          {article.subTitleContentD.map((paragraph, idx) =>
            renderParagraphWithImage(paragraph, idx, article.subTitleImagesD && article.subTitleImagesD[idx])
          )}
        </div>

        <h3>{article.subTitleE}</h3>
        {article.subTitleImageE && (
          <img src={article.subTitleImageE} alt={article.subTitleE} className={styles.subTitleImage} />
        )}
        <div className={styles.content}>
          {article.subTitleContentE.map((paragraph, idx) =>
            renderParagraphWithImage(paragraph, idx, article.subTitleImagesE && article.subTitleImagesE[idx])
          )}
        </div>
      </div>
      <LatestArt />
      <Commitment />
    </div>
  );
};

export default NewJournalContent;
