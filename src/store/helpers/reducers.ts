import { nthArg } from 'lodash';

/**
 * Standard reducer which just replace state value by incoming action payload. You can add this reducer to
 * `case` method of reducer created by `typescript-fsa-reducers` package.
 */
export const replaceReducer = nthArg(1);
