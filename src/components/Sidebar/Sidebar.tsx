import React from 'react';
import shortid from 'shortid';

import TransferItem from '../TransferItem/TransferItem';

import styles from './index.module.scss';

const transferList: Array<string> = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

export default () => {
  const TransferList = transferList.map((value: string, index) => (
    <TransferItem key={shortid.generate()} value={value} index={index} />
  ));

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebar__title}>количество пересадок</h3>
      <form action="" className={styles.transfer}>
        {TransferList}
      </form>
    </aside>
  );
};
