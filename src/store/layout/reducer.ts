import { combineReducers } from 'redux';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import type { Layout } from '@store/layout/types';
import { replaceReducer } from '@store/helpers/reducers';

import { clear, setLeftSidebarState, setRightSidebarState } from './actions';

const rightSideCollapsed = reducerWithInitialState<boolean>(true)
  .case(clear, () => true)
  .case(setRightSidebarState, replaceReducer);

const leftSideCollapsed = reducerWithInitialState<boolean>(true)
  .case(clear, () => true)
  .case(setLeftSidebarState, replaceReducer);

export default combineReducers<Layout>({
  rightSideCollapsed,
  leftSideCollapsed,
});
