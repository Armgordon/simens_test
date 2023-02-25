import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { sortBy, stubArray, stubTrue, uniqBy } from 'lodash';

import type { CreateListStoreReducersParams, ListStore } from './types';
import { replaceReducer, stubZero } from '../reducers';

/**
 * Create reducer for `addOne` action
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param idProperty Name of item identifier property. List items must be have unique values of this property.
 * @param sortingCriteria Items sorting criteria. Can be key or property or function which receives item and
 * returns primitive type value. If defined then reducers will sort items by this criteria.
 *
 * @returns Reducer function for `addOne` action
 */
export const createAddOneReducer =
  <TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (state: TYPE[], payload: TYPE): TYPE[] => {
    let result = uniqBy([payload, ...state], idProperty);

    if (sortingCriteria) {
      result = sortBy(result, sortingCriteria);
    }

    return result;
  };

/**
 * Create reducer for `addList` action
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param idProperty Name of item identifier property. List items must be have unique values of this property.
 * @param sortingCriteria Items sorting criteria. Can be key or property or function which receives item and
 * returns primitive type value. If defined then reducers will sort items by this criteria.
 *
 * @returns Reducer function for `addList` action
 */
export const createAddListReducer =
  <TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (state: TYPE[], payload: TYPE[]): TYPE[] => {
    let result = uniqBy([...payload, ...state], idProperty);

    if (sortingCriteria) {
      result = sortBy(result, sortingCriteria);
    }

    return result;
  };

/**
 * Create reducer for `removeOne` action
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param idProperty Name of item identifier property. List items must be have unique values of this property.
 * @param sortingCriteria Items sorting criteria. Can be key or property or function which receives item and
 * returns primitive type value. If defined then reducers will sort items by this criteria.
 *
 * @returns Reducer function for `removeOne` action
 */
export const createRemoveOneReducer =
  <TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (state: TYPE[], payload: TYPE[ID]): TYPE[] => {
    let result = state.filter((item) => item[idProperty] !== payload);

    if (sortingCriteria) {
      result = sortBy(result, sortingCriteria);
    }

    return result;
  };

/**
 * Create reducer for `removeList` action
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param idProperty Name of item identifier property. List items must be have unique values of this property.
 * @param sortingCriteria Items sorting criteria. Can be key or property or function which receives item and
 * returns primitive type value. If defined then reducers will sort items by this criteria.
 *
 * @returns Reducer function for `removeList` action
 */
export const createRemoveListReducer =
  <TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (state: TYPE[], payload: TYPE[ID][]): TYPE[] => {
    let result = state.filter((item) => !payload.includes(item[idProperty]));

    if (sortingCriteria) {
      result = sortBy(result, sortingCriteria);
    }

    return result;
  };

/**
 * Create standard reducer for {@link ListStore}
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param param0 Function parameters as {@link CreateListStoreReducersParams} object
 *
 * @returns Reducer for {@link ListStore}
 */
const createListStoreReducer = <TYPE, ID extends keyof TYPE>({
  actions,
  idProperty,
  clear,
  sortingCriteria,
}: CreateListStoreReducersParams<TYPE, ID>): Reducer<ListStore<TYPE>> => {
  const canLoadMore = reducerWithInitialState<boolean>(stubTrue()).case(actions.setCanLoadMore, replaceReducer);

  if (clear) {
    canLoadMore.case(clear, stubTrue);
  }

  const offset = reducerWithInitialState<number>(stubZero()).case(actions.setOffset, replaceReducer);

  if (clear) {
    offset.case(clear, stubZero);
  }

  const items = reducerWithInitialState<TYPE[]>(stubArray())
    .case(actions.addOne, createAddOneReducer<TYPE, ID>(idProperty, sortingCriteria))
    .case(actions.addList, createAddListReducer<TYPE, ID>(idProperty, sortingCriteria))
    .case(actions.removeOne, createRemoveOneReducer<TYPE, ID>(idProperty, sortingCriteria))
    .case(actions.removeList, createRemoveListReducer<TYPE, ID>(idProperty, sortingCriteria));

  if (clear) {
    items.case(clear, stubArray);
  }

  return combineReducers<ListStore<TYPE>>({
    canLoadMore,
    offset,
    items,
  });
};

export default createListStoreReducer;
