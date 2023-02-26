import { combineReducers } from 'redux';
import type { Dot } from '@domain';
import type { Chart } from '@store/chart';

import { createListStoreReducer } from '../helpers';
import { clear, dotsActions } from './actions';

const dots = createListStoreReducer<Dot, 'id'>({
  clear,
  idProperty: 'id',
  actions: dotsActions,
});

export default combineReducers<Chart>({ dots });
