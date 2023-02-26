import type { FC } from 'react';
import classnames from 'classnames';

import ChartSection from '../ChartSection';
import DotsSection from '../DotsSection';
import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className }) => (
  <div className={classnames(styles.chartPage, className)}>
    <ChartSection />
    <DotsSection />
  </div>
);
Component.displayName = 'ChartPage';

export default Component;
