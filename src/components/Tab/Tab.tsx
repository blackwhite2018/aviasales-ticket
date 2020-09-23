import React from 'react';
import { connect } from 'react-redux';

import { ITabProps } from './../../types';
import actions from './../../actions';
import styles from './index.module.scss';

const Tab: React.FC<ITabProps> = ({ index, value, indexActive, sortTicketAction }: any) => {
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

export default connect(mapStateToProps, actions)(Tab);
