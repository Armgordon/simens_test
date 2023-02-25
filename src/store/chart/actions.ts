import { actionCreatorFactory } from 'typescript-fsa';
import type { Dot } from '@domain';

import { createListStoreActions } from '../helpers';

const creator = actionCreatorFactory('DOTS_LIST');

/** Clear `dots` sub-storage */
export const clear = creator('CLEAR');

// Create standard list store actions
export const { setCanLoadMore, setOffset, addOne, addList, removeOne, removeList } = createListStoreActions<
  Dot,
  'name'
>(creator);
