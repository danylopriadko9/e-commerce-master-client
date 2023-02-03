import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InfoBlock.module.scss';

const MainPageDescription = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.infoContainer}>
      <div className={styles.container}>
        <h1>{t('information_block.title')}</h1>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptinBlock}>
            <p>{t('information_block.part1')}</p>
            <p>{t('information_block.part2')}</p>
            <p>{t('information_block.part3')}</p>
          </div>
          <div className={styles.descriptinBlock}>
            <p>{t('information_block.part4')}</p>
            <p>{t('information_block.part5')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageDescription;
