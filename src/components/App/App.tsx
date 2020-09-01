import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Tabs from '../Tabs';
import TicketList from '../TicketList';

import styles from './index.module.scss';

export default () => (
  <div className={styles.page}>
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <Content>
          <Tabs />
          <TicketList />
        </Content>
      </main>
    </div>
  </div>
);
