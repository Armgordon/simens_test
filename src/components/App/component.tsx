import type { FC } from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import classNames from 'classnames';
import reactLogo from '../../assets/react.svg';

import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ store }) => {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className={styles.app}>
        <p>First tag</p>
      </div>
    </Provider>
  );
};

Component.displayName = 'App';

export default Component;
