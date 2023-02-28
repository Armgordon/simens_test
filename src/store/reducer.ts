/* eslint-disable */

import { combineReducers } from 'redux';

import type { State } from './types';
import chart from './chart';
import layout from './layout';

export default combineReducers<State>({
  chart,
  layout,
});
