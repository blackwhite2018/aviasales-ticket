import React from 'react';
import { connect } from 'react-redux';

import action from '../../actions/transferItemAction';
import styles from './index.module.scss';

const transferItem = ({ transferSort, transferItemAction, value, index }: any) => {
  // console.log(val); // add fix

  const handleTransferSort = (evt: React.MouseEvent<HTMLInputElement>) => {
    const target = evt.currentTarget;
    transferItemAction({
      index,
      value: target.checked,
    });
  };

  return (
    <label htmlFor={`transfer-item-${String(index)}`} className={styles['transfer-item']}>
      <input
        type="checkbox"
        onClick={handleTransferSort}
        id={`transfer-item-${String(index)}`}
        className={styles['transfer-item__input']}
        checked={!!transferSort[index]}
      />
      <span className={styles['transfer-item__text']}>{value}</span>
    </label>
  );
};

const mapStateToProps = (state: any) => {
  return {
    transferSort: state.transferSort,
  };
};

export default connect(mapStateToProps, action)(transferItem);
