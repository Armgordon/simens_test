// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Some typical reducers which can be used by store modules. Before adding a "typical" selector, make sure that
// there is no similar function in the "lodash" package (e.g. "stubArray", "stubString" etc.).
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import { nthArg } from 'lodash';
import { Map as ImmutableMap } from 'immutable';

import type { ImmutableMapItemActionPayload } from './types';

/**
 * Standard reducer which just replace state value by incoming action payload. You can add this reducer to
 * `case` method of reducer created by `typescript-fsa-reducers` package.
 */
export const replaceReducer = nthArg(1);

/**
 * Standard reducer which add or replace concrete item of {@link ImmutableMap}
 *
 * @param state Previous state value (instance of {@link ImmutableMap})
 * @param param1 Action payload, which contains item key and value to set (see {@link ImmutableMapItemActionPayload})
 *
 * @returns Updated state value
 */
export const setImmutableMapValueReducer = (
  state: ImmutableMap<any, any>,
  { key, value }: ImmutableMapItemActionPayload<any, any>,
): ImmutableMap<any, any> => state.set(key, value);

/** Standard clear reducer for nullable fields - returns `false` value as new state value. */
export const stubFalse = (): false => false;

/** Standard clear reducer for nullable fields - returns `null` value as new state value. */
export const stubNull = (): null => null;

/** Standard clear reducer for numeric fields - returns `0` value as new state value */
export const stubZero = (): number => 0;

/** Standard clear reducer for {@link ImmutableMap} object from `immutable` package */
export const stubImmutableMap = (): ImmutableMap<any, any> => ImmutableMap<any, any>();
