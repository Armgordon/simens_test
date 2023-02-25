import { combineReducers } from 'redux';
import type { Dot } from '@domain';
import type { Chart } from '@store/chart';

import { createListStoreReducer } from '../helpers';
import { clear, setCanLoadMore, setOffset, addOne, addList, removeOne, removeList } from './actions';

const dots = createListStoreReducer<Dot, 'name'>({
  clear,
  idProperty: 'name',
  actions: {
    setCanLoadMore,
    setOffset,
    addOne,
    addList,
    removeOne,
    removeList,
  },
});

export default combineReducers<Chart>({ dots });
