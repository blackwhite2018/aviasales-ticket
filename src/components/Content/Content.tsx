import React from 'react';

import { IContent } from '../../types';
import styles from './index.module.scss';

export default ({ children }: IContent) => <section className={styles.content}>{children}</section>;
