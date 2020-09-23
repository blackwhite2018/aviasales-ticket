import React from 'react';
import shortid from 'shortid';

import Tab from '../Tab';
import styles from './index.module.scss';

const tabs: string[] = ['самый дешевый', 'самый быстрый'];

export default () => (
  <div className={styles.tabs}>
    {tabs.map((value: string, index: number) => (
      <Tab key={shortid.generate()} index={index} value={value} />
    ))}
  </div>
);
