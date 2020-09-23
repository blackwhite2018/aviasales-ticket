import React from 'react';
import shortid from 'shortid';

import TransferItem from '../TransferItem';
import styles from './index.module.scss';

const transferList: string[] = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const TransferList = transferList.map((value, index) => (
  <TransferItem key={shortid.generate()} value={value} index={index} />
));

export default () => (
  <aside className={styles.sidebar}>
    <h3 className={styles.sidebar__title}>количество пересадок</h3>
    <form action="" className={styles.transfer}>
      {TransferList}
    </form>
  </aside>
);
