import React from 'react';

import styles from './index.module.scss';

export default ({ value, index }: any) => (
  <label htmlFor={`transfer-item-${String(index)}`} className={styles['transfer-item']}>
    <input type="checkbox" id={`transfer-item-${String(index)}`} className={styles['transfer-item__input']} />
    <span className={styles['transfer-item__text']}>{value}</span>
  </label>
);
