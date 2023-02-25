import type { ActionCreator } from 'typescript-fsa';
import type { Map as ImmutableMap } from 'immutable';

import type { ImmutableMapItemActionPayload } from '../types';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// List store types
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * List store - view of a loadable list of data of a given type. Contains loaded items array, flag of possibility
 * to load more items and current number of items to skip (offset).
 *
 * @template TYPE Type of items of list store. Should be object type.
 */
export interface ListStore<TYPE> {
  /** Flag of possibility to load more items */
  canLoadMore: boolean;
  /** Current items offset - how many items should skip on next load */
  offset: number;
  /** Loaded items. Each must be unique by some property value (e.g. `id`). */
  items: TYPE[];
}

/**
 * Standard actions for {@link ListStore}. Cover all list store usage cases
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 */
export interface ListStoreActions<TYPE, ID extends keyof TYPE> {
  /** Set {@link ListStore.canLoadMore} field value */
  setCanLoadMore: ActionCreator<boolean>;
  /** Set {@link ListStore.offset} field value */
  setOffset: ActionCreator<number>;
  /**
   * Add one item to {@link ListStore.items} array.
   * If store contains item with same identifier then action will replace it.
   */
  addOne: ActionCreator<TYPE>;
  /**
   * Add several items to {@link ListStore.items} array.
   * If store contains items with same identifiers then action will replace them.
   */
  addList: ActionCreator<TYPE[]>;
  /** Remove one item from {@link ListStore.items} array by identifier */
  removeOne: ActionCreator<TYPE[ID]>;
  /** Remove several items from {@link ListStore.items} array by identifiers list */
  removeList: ActionCreator<TYPE[ID][]>;
}

/**
 * `createListStoreReducer` function parameters
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 */
export interface CreateListStoreReducersParams<TYPE, ID extends keyof TYPE> {
  /** List store actions */
  actions: ListStoreActions<TYPE, ID>;
  /** Name of item identifier property. List items must be have unique values of this property. */
  idProperty: ID;
  /** Store module clear action. If defined then clear reducers will be added. */
  clear?: ActionCreator<void>;
  /**
   * Items sorting criteria. Can be key or property or function which receives item and returns primitive type value.
   * If defined then reducers will sort items by this criteria.
   */
  sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// List stores maps types
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * List stores maps - view of a maps of loadable list of data of a given type. Contains loaded items arrays map,
 * map of flags of possibility to load more items and map of current numbers of items to skip (offset).
 * This version of list store will be useful to store loadable tree-like structures or same list store by
 * different criteria.
 *
 * @template KEY Type of dictionaries key. Can be of any type, but it is desirable to use primitive types.
 * @template TYPE Type of items of list store. Should be object.
 */
export interface ListStoresMaps<KEY, TYPE> {
  /** Can load more items */
  canLoadMore: ImmutableMap<KEY, boolean>;
  /** Current items offset */
  offset: ImmutableMap<KEY, number>;
  /** Loaded items */
  items: ImmutableMap<KEY, TYPE[]>;
}

/**
 * Standard actions for {@link ListStoresMaps}
 *
 * @template KEY Type of dictionary key. Can be of any type, but it is desirable to use primitive types.
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 */
export interface ListStoresMapsActions<KEY, TYPE, ID extends keyof TYPE> {
  /** Set {@link ListStore.canLoadMore} field value */
  setCanLoadMore: ActionCreator<ImmutableMapItemActionPayload<KEY, boolean>>;
  /** Set {@link ListStore.offset} field value */
  setOffset: ActionCreator<ImmutableMapItemActionPayload<KEY, number>>;
  /** Add one item to {@link ListStore.items} array */
  addOne: ActionCreator<ImmutableMapItemActionPayload<KEY, TYPE>>;
  /** Add several items to {@link ListStore.items} array */
  addList: ActionCreator<ImmutableMapItemActionPayload<KEY, TYPE[]>>;
  /** Remove one item from {@link ListStore.items} array by identifier field */
  removeOne: ActionCreator<ImmutableMapItemActionPayload<KEY, TYPE[ID]>>;
  /** Remove several items from {@link ListStore.items} array by identifiers list */
  removeList: ActionCreator<ImmutableMapItemActionPayload<KEY, TYPE[ID][]>>;
}

/**
 * `createListStoresMapsReducer` function parameters
 *
 * @template KEY Type of dictionary key. Can be of any type, but it is desirable to use primitive types.
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 */
export interface CreateListStoresMapsReducersParams<KEY, TYPE, ID extends keyof TYPE> {
  /** Standard list stores map actions. Required for reducer. */
  actions: ListStoresMapsActions<KEY, TYPE, ID>;
  /** Name of item identifier property. List items must be have unique values of this property. */
  idProperty: ID;
  /** Store module clear action. If defined then clear reducers will be added. */
  clear?: ActionCreator<void>;
  /**
   * Items sorting criteria. Can be key or property or function which receives item and returns primitive type value.
   * If defined then reducers will sort items by this criteria.
   */
  sortingCriteria?: keyof TYPE | ((value: TYPE) => unknown);
}
