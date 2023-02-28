import type { Chart } from '../chart';
import type { Layout } from '../layout';

/** Application Redux Store state */
export default interface State {
  /** `chart` module sub-state */
  chart: Chart;
  /** `layout` module sub-state */
  layout: Layout;
}
