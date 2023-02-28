import type { FC } from 'react';
import { Provider } from 'react-redux';
import ChartPage from '@components/chart/ChartPage';
import Layout from '@components/wrapper/Layout';

import type { Props } from './types';

const Component: FC<Props> = ({ store }) => (
  <Provider store={store}>
    <Layout>
      <ChartPage />
    </Layout>
  </Provider>
);

Component.displayName = 'App';

export default Component;
