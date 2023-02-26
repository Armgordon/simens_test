import type { FC } from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import classNames from 'classnames';
import ChartPage from '@components/chart/ChartPage';
import reactLogo from '../../assets/react.svg';

import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ store }) => (
  <Provider store={store}>
    <ChartPage />
  </Provider>
);

Component.displayName = 'App';

export default Component;
