import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose as reduxCompose } from 'redux';
import type { Reducer, Store } from 'redux';

/**
 * Get compose function for store:
 *   - If development environment enabled and extended compose function from Redux Dev Tools provided then
 * use this compose function;
 *   - Otherwise use native Redux compose function;
 *
 * @returns Redux Compose function
 */
export const getCompose = (): typeof reduxCompose =>
  import.meta.env.MODE === 'development' && (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : reduxCompose;

/**
 * Create Redux Store. In development environment when Redux Dev Tools installed, store will be attached to it.
 *
 * @template S Store state type. Required.
 *
 * @param reducer Main state reducer
 *
 * @returns Redux Store instance
 */
export const createReduxStore = <S>(reducer: Reducer<S>): Store<S> =>
  createStore(reducer, getCompose()(applyMiddleware(reduxThunk)));
