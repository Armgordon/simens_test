import { memo } from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import { useDotsList } from '@components/selectHooks/chartHooks';

import Item from './Item';
import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className }) => {
  const dots = useDotsList();

  return (
    <div className={classnames(styles.root, className)}>
      <span>List of values</span>
      {dots.map((item, index) => (
        <Item key={item.id} id={item.id} value={item.value} timestamp={item.timestamp} />
      ))}
    </div>
  );
};

Component.displayName = 'BlankComponent';

export default memo(Component);
