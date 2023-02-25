/**
 * Standard type for "second argument selector" which useful to work with `reselect` library.
 * You can use it to typecast result of `nthArg` function from `lodash`.
 *
 * @template STATE Redux Store State type (first argument in selectors)
 * @template SECOND Type of second argument
 */
export interface SecondArgumentSelector<STATE, SECOND> {
  (_: STATE, second: SECOND): SECOND;
}

/**
 * Standard type for "third argument selector" which useful to work with `reselect` library.
 * You can use it to typecast result of `nthArg` function from `lodash`.
 *
 * @template STATE Redux Store State type (first argument in selectors)
 * @template THIRD Type of third argument
 * @template SECOND Type of second argument. `unknown` by default.
 */
export interface ThirdArgumentSelector<STATE, THIRD, SECOND = unknown> {
  (_0: STATE, _1: SECOND, third: THIRD): THIRD;
}

/** Standard payload for actions which works with concrete items of {@link ImmutableMap} */
export interface ImmutableMapItemActionPayload<KEY, VALUE> {
  /** Key of list store to modify */
  key: KEY;
  /** Value of list store to set */
  value: VALUE;
}
