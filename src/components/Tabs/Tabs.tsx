import React from 'react';
import shortid from 'shortid';

import Tab from '../Tab';

import styles from './index.module.scss';

const tabs = ['самый дешевый', 'самый быстрый'];

export default () => (
  <div className={styles.tabs}>
    {tabs.map((value: string) => (
      <Tab key={shortid.generate()} value={value} />
    ))}
  </div>
);
