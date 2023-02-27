import type { Dispatch } from 'redux';
import DotsStorage from '@store/chart/DotsStorage';

import { getDotsList } from '@store/chart/selectors';
import { dotsActions } from './actions';
import type { State } from '../types';

/** How many dashboards can be loaded at time */
export const DOTS_LIMIT = 10;

/**
 * Load more dashboards:
 *   - If user is not authorized or all available dashboards was load then thunk will interrupt;
 *   - Call dashboards list API endpoint;
 *   - If API endpoint suсeed then:
 *     - Add loaded dashboards into store (replace exist dashboards with same identifiers);
 *     - Increase the current `offset` state property by `DASHBOARDS_LIMIT` constant;
 *     - Update current `canLoadMore` state property by backend response;
 *   - Otherwise `AxiosError` will be thrown;
 * @returns Redux Thunk function ready to dispatch
 */
export const loadDotsFromDB =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const storage = DotsStorage.getInstance();

    const storageDots = JSON.parse(storage.getDotsValues());

    dispatch(dotsActions.addList(storageDots));
  };

export const saveDotsToDB =
  () =>
  async (dispatch: Dispatch, getState: () => State): Promise<void> => {
    const storage = DotsStorage.getInstance();
    const storeDots = getDotsList(getState());
    storage.setDotsValues(JSON.stringify(storeDots));
  };

// /**
//  * Save visit:
//  *   - If user is not authorized then thunk will interrupt;
//  *   - If visit is exist (`id` property _is defined and not `null`_) then call new visit updating API endpoint;
//  *   - Else if visit is new (`id` property _is `null` or not defined_) then call new visit creation API endpoint;
//  *   - If API endpoint execution succeed then save visit into store (replace old version if exists).
//  *   - Otherwise `AxiosError` error will be thrown;
//  * @param param0 Visit parameters
//  * @returns Redux Thunk function ready to dispatch
//  */
// export const saveDots =
//   ({ id, ...params }: SaveVisitParams) =>
//   async (dispatch: Dispatch, getState: () => State): Promise<void> => {
//     const state = getState();
//     const isAuthorized = getIsAuthorized(state);
//
//     if (isAuthorized) {
//       const token = getAccessToken(getState());
//       let visit: Visit;
//
//       if (!isNil(id)) {
//         visit = await visitService.updateVisit(token, id, params);
//       } else {
//         visit = await visitService.createVisit(token, params);
//       }
//       dispatch(addOne(visit));
//     }
//   };
//
// /** Remove visit from backend and from store */
// export const removeVisit =
//   (visitId: number) =>
//   async (dispatch: Dispatch, getState: () => State): Promise<void> => {
//     const state = getState();
//     const isAuthorized = getIsAuthorized(state);
//
//     if (isAuthorized) {
//       await visitService.removeVisit(visitId);
//       dispatch(removeOne(visitId));
//     }
//   };
