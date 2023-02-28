import type { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';
import Sidebar from '@components/wrapper/Sidebar';
import { Orientation } from '@components/wrapper/Sidebar/types';
import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<PropsWithChildren<Props>> = ({ className, children }) => (
  <div className={classnames(styles.Layout, className)}>
    <Sidebar orientation={Orientation.LEFT} />
    {children}
    <Sidebar orientation={Orientation.RIGHT} />
  </div>
);

Component.displayName = 'Layout';

export default Component;
