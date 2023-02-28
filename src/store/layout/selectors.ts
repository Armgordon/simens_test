import { createSelector } from 'reselect';

import type { Layout } from './types';
import type { State } from '../types';

/** Get full chart substate */
const getFullState = (state: State): Layout => state.layout;

export const getLeftSidebarState = createSelector(getFullState, ({ leftSideCollapsed }): boolean => leftSideCollapsed);

export const getRightSidebarState = createSelector(
  getFullState,
  ({ rightSideCollapsed }): boolean => rightSideCollapsed,
);
