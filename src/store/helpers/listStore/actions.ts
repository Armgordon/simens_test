import type { ActionCreatorFactory } from 'typescript-fsa';
import type { ImmutableMapItemActionPayload } from '../types';
import type { ListStoreActions, ListStoresMapsActions } from './types';

/**
 * Action name formatting function
 *
 * @param name Action name
 * @param [prefix] Optional prefix for action name. If defined and not empty then it will be added to beginning
 * of action name.
 *
 * @returns Action name
 */
export const actionName = (name: string, prefix?: string): string =>
  prefix ? `${prefix.toUpperCase()}/${name.toUpperCase()}` : name.toUpperCase();

/**
 * Create standard actions for {@link ListStore}
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param creator Action creator for store module
 * @param [prefix] Optional prefix for actions names
 *
 * @returns See ListStoreActions
 */
export const createListStoreActions = <TYPE, ID extends keyof TYPE>(
  creator: ActionCreatorFactory,
  prefix?: string,
): ListStoreActions<TYPE, ID> => ({
  setCanLoadMore: creator<boolean>(actionName('SET_CAN_LOAD_MORE', prefix)),
  setOffset: creator<number>(actionName('SET_OFFSET', prefix)),
  addOne: creator<TYPE>(actionName('ADD_ONE', prefix)),
  addList: creator<TYPE[]>(actionName('ADD_LIST', prefix)),
  removeOne: creator<TYPE[ID]>(actionName('REMOVE_ONE', prefix)),
  removeList: creator<TYPE[ID][]>(actionName('REMOVE_LIST', prefix)),
});

/**
 * Create standard actions for {@link ListStoresMap}
 *
 * @template TYPE Type of item to store at list. Should not be primitive type.
 * @template ID Key of identifier field of `TYPE`. Need for remove actions.
 *
 * @param creator Action creator for store module
 * @param [prefix] Optional prefix for actions names
 *
 * @returns See ListStoreActions
 */
export const createListStoresMapsActions = <KEY, TYPE, ID extends keyof TYPE>(
  creator: ActionCreatorFactory,
  prefix?: string,
): ListStoresMapsActions<KEY, TYPE, ID> => ({
  setCanLoadMore: creator<ImmutableMapItemActionPayload<KEY, boolean>>(actionName('SET_CAN_LOAD_MORE', prefix)),
  setOffset: creator<ImmutableMapItemActionPayload<KEY, number>>(actionName('SET_OFFSET', prefix)),
  addOne: creator<ImmutableMapItemActionPayload<KEY, TYPE>>(actionName('ADD_ONE', prefix)),
  addList: creator<ImmutableMapItemActionPayload<KEY, TYPE[]>>(actionName('ADD_LIST', prefix)),
  removeOne: creator<ImmutableMapItemActionPayload<KEY, TYPE[ID]>>(actionName('REMOVE_ONE', prefix)),
  removeList: creator<ImmutableMapItemActionPayload<KEY, TYPE[ID][]>>(actionName('REMOVE_LIST', prefix)),
});
