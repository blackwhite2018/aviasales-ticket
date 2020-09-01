import React from 'react';

import IContent from '../interfaces/ContentProps';
import styles from './index.module.scss';

export default ({ children }: IContent) => <section className={styles.content}>{children}</section>;
