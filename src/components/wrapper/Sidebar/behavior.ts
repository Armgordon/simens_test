import { useMemo } from 'react';
import classnames from 'classnames';
import { Orientation } from '@components/wrapper/Sidebar/types';
import { useDispatch, useSelector } from 'react-redux';
import { getLeftSidebarState, getRightSidebarState, setLeftSidebarState, setRightSidebarState } from '@store/layout';

import styles from './styles.module.scss';

/** Hook which returns sidebar behavior handlers */
export const useSidebarBehavior = (orientation: Orientation): { collapsed: boolean; onCollapseHandler: () => void } => {
  const collapsed = useSelector(orientation === Orientation.LEFT ? getLeftSidebarState : getRightSidebarState);
  const dispatch = useDispatch();
  const onCollapseHandler = () => {
    const action = orientation === Orientation.LEFT ? setLeftSidebarState : setRightSidebarState;
    dispatch(action(!collapsed));
  };
  return {
    collapsed,
    onCollapseHandler,
  };
};

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

/** Hook which returns button element CSS classes */
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
