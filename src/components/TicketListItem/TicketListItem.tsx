import React from 'react';

import styles from './index.module.scss';

export default () => (
  <div className={styles.ticket}>
    <div className={styles['ticket-header']}>
      <div className={styles['ticket-header__price']}>13400 Р</div>
      <div className={styles['ticket-header__logo']} />
    </div>
    <table>
      <tbody>
        <tr className={styles['row--title']}>
          <td>MOW-НКТ</td>
          <td>в пути</td>
          <td>2 пересадки</td>
        </tr>
        <tr className={styles['row--data']}>
          <td>10:45 – 08:00</td>
          <td>в пути</td>
          <td>HKG, JNB</td>
        </tr>
        <tr className={styles['row--title']}>
          <td>MOW-НКТ</td>
          <td>в пути</td>
          <td>1 пересадка</td>
        </tr>
        <tr className={styles['row--data']}>
          <td>11:20 – 00:50</td>
          <td>13ч 30м</td>
          <td>HKG</td>
        </tr>
      </tbody>
    </table>
  </div>
);
