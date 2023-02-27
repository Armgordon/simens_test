import type { FC } from 'react';
import classnames from 'classnames';

import ChartSection from '../ChartSection';
import DotsSection from '../DotsSection';
import styles from './styles.module.scss';
import type { Props } from './types';
import { useLoadStorageDotsEffect } from './behavior';

const Component: FC<Props> = ({ className }) => {
  useLoadStorageDotsEffect();
  return (
    <div className={classnames(styles.chartPage, className)}>
      <ChartSection />
      <DotsSection />
    </div>
  );
};
Component.displayName = 'ChartPage';

export default Component;
