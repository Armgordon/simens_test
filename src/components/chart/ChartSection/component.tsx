import type { FC } from 'react';
import classnames from 'classnames';

import { CHART_MARGINS, useCalculateChartData, useDimensionsEffect, useViewBox } from './behavior';
import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className }) => {
  const { width, height } = useDimensionsEffect();
  const { dotsData, xAxisRef, yAxisRef } = useCalculateChartData(width, height);
  const viewBox = useViewBox(width, height);

  return (
    <div className={classnames(styles.ChartSection, className)}>
      <svg height="100%" width="100%" viewBox={viewBox}>
        <g ref={xAxisRef} transform={`translate(${CHART_MARGINS.left}, ${height - CHART_MARGINS.bottom})`} />
        <g ref={yAxisRef} transform={`translate(${CHART_MARGINS.left}, ${-CHART_MARGINS.bottom})`} />
        <g className={styles.chart} transform={`translate(${CHART_MARGINS.left}, ${-CHART_MARGINS.bottom})`}>
          {dotsData.map((curr, index, origin) => {
            const prev = origin[index - 1];
            return (
              <g key={curr.id}>
                {index && <line x1={prev.x} x2={curr.x} y1={prev.y} y2={curr.y} className={styles.chartLine} />}
                <text x={curr.x + 5} y={curr.y}>
                  {curr.value}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

Component.displayName = 'ChartSection';

export default Component;
