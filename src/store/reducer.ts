/* eslint-disable */

import { combineReducers } from 'redux';

import type { State } from './types';
import chart from './chart';

export default combineReducers<State>({
  chart,
});
