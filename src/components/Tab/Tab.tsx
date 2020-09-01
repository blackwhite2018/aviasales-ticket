import React from 'react';

import styles from './index.module.scss';

interface TabProps {
  value: string;
}

export default ({ value }: TabProps): JSX.Element => (
  <button type="button" className={styles.tab}>
    {value}
  </button>
);
