import React from 'react';
import { format } from 'date-fns';

import styles from './index.module.scss';

export default ({ ticket: { price, segments } }: any) => {
  const [departure, arrival] = segments;

  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <div className={styles['ticket-header__price']}>{price} Р</div>
        <div className={styles['ticket-header__logo']} />
      </div>
      <table>
        <tbody>
          <tr className={styles['row--title']}>
            <td>{`${departure.origin}-${departure.destination}`}</td>
            <td>в пути</td>
            <td>{segments[0].stops.length} пересадки</td>
          </tr>
          <tr className={styles['row--data']}>
            <td>{`${format(new Date(departure.date), 'HH:mm')}`}</td>
            <td>{`${Math.floor(departure.duration / 60)}ч ${Math.floor(departure.duration % 60)}м`}</td>
            <td>{departure.stops.join(', ')}</td>
          </tr>
          <tr className={styles['row--title']}>
            <td>{`${arrival.origin}-${arrival.destination}`}</td>
            <td>в пути</td>
            <td>{segments[1].stops.length} пересадка</td>
          </tr>
          <tr className={styles['row--data']}>
            <td>{`${format(new Date(arrival.date), 'HH:mm')}`}</td>
            <td>{`${Math.floor(arrival.duration / 60)}ч ${Math.floor(arrival.duration % 60)}м`}</td>
            <td>{arrival.stops.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
