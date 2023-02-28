import type { Dispatch } from 'redux';
import DotsStorage from '@store/chart/DotsStorage';
import { getDotsList } from '@store/chart/selectors';

import { dotsActions } from './actions';
import type { State } from '../types';

export const loadDotsFromLS =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const storage = DotsStorage.getInstance();

    const storageDots = JSON.parse(storage.getDotsValues());

    dispatch(dotsActions.addList(storageDots));
  };

export const saveDotsToLS =
  () =>
  async (dispatch: Dispatch, getState: () => State): Promise<void> => {
    const storage = DotsStorage.getInstance();
    const storeDots = getDotsList(getState());
    storage.setDotsValues(JSON.stringify(storeDots));
  };
