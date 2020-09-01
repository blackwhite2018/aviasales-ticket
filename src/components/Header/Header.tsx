import React from 'react';

import styles from './index.module.scss';

export default () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={`${process.env.PUBLIC_URL}/img/Logo.png`} className={styles.logo__img} alt="aviasales" />
    </div>
  </header>
);
