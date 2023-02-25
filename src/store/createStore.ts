import type { Store } from 'redux';

import reducer from './reducer';
import type { State } from './types';
import { createReduxStore } from './helpers';

/** Create Redux Store instance */
export default (): Store<State> => createReduxStore<State>(reducer);
