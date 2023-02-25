import type { Chart } from '../chart';

/** Application Redux Store state */
export default interface State {
  /** `auth` module sub-state */
  chart: Chart;
  /** `programs` module sub-state */
}
