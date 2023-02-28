import { createSelector } from 'reselect';
import type { Dot } from '@domain';
import type { ListStore } from '@store/helpers';

import type { Chart } from './types';
import type { State } from '../types';

/** Get full chart substate */
export const getFullState = (state: State): Chart => state.chart;

const getDotsState = createSelector(getFullState, ({ dots }): ListStore<Dot> => dots);

/** Get list of loaded dots */
export const getDotsList = createSelector(getDotsState, ({ items }): Dot[] => items);
