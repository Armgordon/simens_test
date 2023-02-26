import type { FC } from 'react';
import classnames from 'classnames';
import Button from '@components/common/Button';
import { FlexAlign, FlexVerticalAlign } from '@components/common/utils/flexAlign';

import { useDotListTime, useRemoveDot } from './behavior';
import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className, id, value, timestamp }) => {
  const dotTime = useDotListTime(timestamp);
  const onRemoveDot = useRemoveDot(id);

  return (
    <div className={classnames(styles.root, className)}>
      <span>{dotTime}</span>
      <span className={styles.value}>{value}</span>
      <Button contentAlign={FlexAlign.CENTER} contentVerticalAlign={FlexVerticalAlign.MIDDLE} onClick={onRemoveDot}>
        Remove
      </Button>
    </div>
  );
};

Component.displayName = 'BlankComponent';

export default Component;
