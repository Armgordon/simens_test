import type { Reducer } from 'redux';
import { combineReducers } from 'redux';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import type { Map as ImmutableMap } from 'immutable';
import { sortBy, uniqBy } from 'lodash';

import type { CreateListStoresMapsReducersParams, ListStoresMaps } from './types';
import type { ImmutableMapItemActionPayload } from '../types';
import { setImmutableMapValueReducer, stubImmutableMap } from '../reducers';

/**
 * Create reducer for `addOne` action
 *
 * @template KEY Type of dictionaries key. Can be of any type, but it is desirable to use primitive types.
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
  <KEY, TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (
    state: ImmutableMap<KEY, TYPE[]>,
    { key, value }: ImmutableMapItemActionPayload<KEY, TYPE>,
  ): ImmutableMap<KEY, TYPE[]> => {
    let result = state.has(key) ? state : state.set(key, []);

    let list: TYPE[] = uniqBy([value, ...result.get(key)!], idProperty);

    if (sortingCriteria) {
      list = sortBy(list, sortingCriteria);
    }

    result = result.set(key, list);

    return result;
  };

/**
 * Create reducer for `addList` action
 *
 * @template KEY Type of dictionaries key. Can be of any type, but it is desirable to use primitive types.
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
  <KEY, TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (
    state: ImmutableMap<KEY, TYPE[]>,
    { key, value }: ImmutableMapItemActionPayload<KEY, TYPE[]>,
  ): ImmutableMap<KEY, TYPE[]> => {
    let result = state.has(key) ? state : state.set(key, []);

    let list: TYPE[] = uniqBy([...value, ...result.get(key)!], idProperty);

    if (sortingCriteria) {
      list = sortBy(list, sortingCriteria);
    }

    result = result.set(key, list);

    return result;
  };

/**
 * Create reducer for `removeOne` action
 *
 * @template KEY Type of dictionaries key. Can be of any type, but it is desirable to use primitive types.
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
  <KEY, TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (
    state: ImmutableMap<KEY, TYPE[]>,
    { key, value }: ImmutableMapItemActionPayload<KEY, TYPE[ID]>,
  ): ImmutableMap<KEY, TYPE[]> => {
    let result = state.has(key) ? state : state.set(key, []);

    let list: TYPE[] = result.get(key)!.filter((item) => item[idProperty] !== value);

    if (sortingCriteria) {
      list = sortBy(list, sortingCriteria);
    }

    result = result.set(key, list);

    return result;
  };

/**
 * Create reducer for `removeList` action
 *
 * @template KEY Type of dictionaries key. Can be of any type, but it is desirable to use primitive types.
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
  <KEY, TYPE, ID extends keyof TYPE>(idProperty: ID, sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown)) =>
  (
    state: ImmutableMap<KEY, TYPE[]>,
    { key, value }: ImmutableMapItemActionPayload<KEY, TYPE[ID][]>,
  ): ImmutableMap<KEY, TYPE[]> => {
    let result = state.has(key) ? state : state.set(key, []);

    let list: TYPE[] = result.get(key)!.filter((item) => !value.includes(item[idProperty]));

    if (sortingCriteria) {
      list = sortBy(list, sortingCriteria);
    }

    result = result.set(key, list);

    return result;
  };

/**
 * Create standard reducer for {@link ListStoresMaps}
 *
 * @template KEY Type of dictionaries key. Can be of any type, but it is desirable to use primitive types.
 * @template TYPE Type of item to store at list. Should be object.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param param0 Function parameters as {@link CreateListStoresMapsReducersParams} object
 *
 * @returns Reducer for {@link ListStoresMaps}
 */
const createListStoresMapsReducer = <KEY, TYPE, ID extends keyof TYPE>({
  actions,
  idProperty,
  clear,
  sortingCriteria,
}: CreateListStoresMapsReducersParams<KEY, TYPE, ID>): Reducer<ListStoresMaps<KEY, TYPE>> => {
  const canLoadMore = reducerWithInitialState<ImmutableMap<KEY, boolean>>(stubImmutableMap()).case(
    actions.setCanLoadMore,
    setImmutableMapValueReducer,
  );

  if (clear) {
    canLoadMore.case(clear, stubImmutableMap);
  }

  const offset = reducerWithInitialState<ImmutableMap<KEY, number>>(stubImmutableMap()).case(
    actions.setOffset,
    setImmutableMapValueReducer,
  );

  if (clear) {
    offset.case(clear, stubImmutableMap);
  }

  const items = reducerWithInitialState<ImmutableMap<KEY, TYPE[]>>(stubImmutableMap())
    .case(actions.addOne, createAddOneReducer<KEY, TYPE, ID>(idProperty, sortingCriteria))
    .case(actions.addList, createAddListReducer<KEY, TYPE, ID>(idProperty, sortingCriteria))
    .case(actions.removeOne, createRemoveOneReducer<KEY, TYPE, ID>(idProperty, sortingCriteria))
    .case(actions.removeList, createRemoveListReducer<KEY, TYPE, ID>(idProperty, sortingCriteria));

  if (clear) {
    items.case(clear, stubImmutableMap);
  }

  return combineReducers<ListStoresMaps<KEY, TYPE>>({
    canLoadMore,
    offset,
    items,
  });
};

export default createListStoresMapsReducer;
