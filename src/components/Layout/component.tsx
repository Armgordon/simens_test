import type { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import Sidebar from '@components/chart/Sidebar';

import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<PropsWithChildren<Props>> = ({ className, children }) => (
  <div className={classnames(styles.Layout, className)}>
    {/* <Sidebar /> */}
    {children}
  </div>
);

Component.displayName = 'Layout';

export default Component;
