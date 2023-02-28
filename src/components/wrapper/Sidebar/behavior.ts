import { useMemo } from 'react';
import classnames from 'classnames';
import { Orientation } from '@components/wrapper/Sidebar/types';

import styles from './styles.module.scss';

/** Hook which returns sidebar bar element CSS classes */
export const useSidebarClassList = (collapsed: boolean, orientation: Orientation, classname?: string): string =>
  useMemo(
    () =>
      classnames(
        styles.SideBar,
        {
          [styles.SideBar_colapsed]: collapsed,
        },
        {
          [styles.SideBar_left]: orientation === Orientation.LEFT,
          [styles.SideBar_right]: orientation === Orientation.RIGHT,
        },
        classname,
      ),
    [classname, collapsed, orientation],
  );

/** Hook which returns sidebar bar element CSS classes */
export const useButtonClassList = (collapsed: boolean, orientation: Orientation, classname?: string): string =>
  useMemo(
    () =>
      classnames(
        styles.button,
        {
          [styles.button_reversed]:
            (orientation === Orientation.LEFT && !collapsed) || (orientation === Orientation.RIGHT && collapsed),
        },
        classname,
      ),
    [classname, collapsed, orientation],
  );
