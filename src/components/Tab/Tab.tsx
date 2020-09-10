import React from 'react';
import { connect } from 'react-redux';

import sortAction from './../../actions/sortTicketAction';
import styles from './index.module.scss';

interface TabProps {
  value: string;
  index: number;
  indexActive: number;
  sortTicketAction: Function;
}

const Tab = ({ index, value, indexActive, sortTicketAction }: TabProps) => {
  const handleClick = () => {
    sortTicketAction(index);
  };

  return (
    <button
      type="button"
      className={`${styles.tab} ${index === indexActive ? styles['tab--active'] : ''}`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

const mapStateToProps = (state: any) => ({
  indexActive: state.active,
});

export default connect(mapStateToProps, sortAction)(Tab);
