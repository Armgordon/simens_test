import type { Store } from 'redux';
import type { State } from '@store';

/** `App` component properties */
export interface Props {
  /** Redux Store instance */
  store: Store<State>;
}
