import type { FC } from 'react';
import { useState } from 'react';
import { useButtonClassList, useSidebarClassList } from '@components/wrapper/Sidebar/behavior';
import Button from '@components/common/Button';
import triangle from '@assets/triangle.svg';

import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className, orientation }) => {
  const [collapsed, setCollapsed] = useState(true);
  const rootClassNames = useSidebarClassList(collapsed, orientation, className);
  const buttonClassNames = useButtonClassList(collapsed, orientation, className);
  return (
    <div className={rootClassNames}>
      <Button className={buttonClassNames} onClick={() => setCollapsed((prev) => !prev)}>
        <img alt="side_open_btn" className={styles.triangle} src={triangle} />
      </Button>
    </div>
  );
};

Component.displayName = 'SideBar';

export default Component;
