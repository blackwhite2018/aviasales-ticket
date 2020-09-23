import React from 'react';
import { connect } from 'react-redux';

import { ITransferItem } from './../../types';
import actions from './../../actions';
import styles from './index.module.scss';

const transferItem: React.FC<ITransferItem> = ({ index, value, transferSort, transferItemAction }) => {
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
        checked={transferSort[index]}
      />
      <span className={styles['transfer-item__text']}>{value}</span>
    </label>
  );
};

const mapStateToProps = (state: any) => ({
  transferSort: state.transferSort,
});

export default connect(mapStateToProps, actions)(transferItem);
