import React from 'react';
import shortid from 'shortid';

import TicketListItem from '../TicketListItem';

import styles from './index.module.scss';

const data = [1, 2, 3];

export default () => (
  <div className={styles['ticket-list']}>
    {data.map((nbr: number) => (
      <TicketListItem key={shortid.generate()} />
    ))}
  </div>
);
