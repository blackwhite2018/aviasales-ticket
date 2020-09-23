import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSearchId, ticketLoad } from './../../actions/actions';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Tabs from '../Tabs';
import TicketList from '../TicketList';

import styles from './index.module.scss';

const App = ({ searchId, actionTicketLoad, actionSearchId }: any) => {
  useEffect(() => {
    actionSearchId('https://aviasales-test-api.java-mentor.com/search');
  }, []);

  useEffect(() => {
    if (searchId) {
      actionTicketLoad(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${searchId}`);
    }
  }, [searchId]);

  return (
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
};

const mapStateToProps = (state: any) => ({
  searchId: state.searchId,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    actionSearchId: dispatch(getSearchId),
    actionTicketLoad: dispatch(ticketLoad),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
