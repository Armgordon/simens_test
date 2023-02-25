// eslint-disable-next-line import/no-unresolved
import { createSelector } from 'reselect';
// import { nthArg } from 'lodash';
import type { Dot } from '@domain';
import type { ListStore, SecondArgumentSelector } from '@store/helpers';

import type { Chart } from './types';
import type { State } from '../types';

/** Get full chart substate */
export const getFullState = (state: State): Chart => state.chart;

export const getDotsState = createSelector(getFullState, ({ dots }): ListStore<Dot> => dots);

export const getCanLoadMore = createSelector(getDotsState, ({ canLoadMore }): boolean => canLoadMore);

/** Get current pagination offset value */
export const getOffset = createSelector(getDotsState, ({ offset }): number => offset);

/** Get list of loaded dots */
export const getDotsList = createSelector(getDotsState, ({ items }): Dot[] => items);

// const getDotId: SecondArgumentSelector<State, number | null | undefined> = nthArg(1);
//
// /** Get loaded visit by identifier. If visit not found then returns `undefined` */
// export const getVisitById = createSelector(getDotsList, getVisitId, (dots, id): Dot | undefined =>
//   dots.find((dot) => dot.id === id),
// );
