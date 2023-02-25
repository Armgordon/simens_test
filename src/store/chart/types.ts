import type { Dot } from '@domain';
import type { ListStore } from '@store/helpers';

/** `visits` sub-state */
export interface Chart {
  dots: ListStore<Dot>;
}
