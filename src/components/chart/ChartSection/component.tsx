import * as d3 from 'd3';
import type { FC } from 'react';
import classnames from 'classnames';
import { useDotsList } from '@components/selectHooks/chartHooks';

import { useEffect, useRef, useState } from 'react';
import type { DotData } from '@domain';

import styles from './styles.module.scss';
import type { Props } from './types';

const CHART_MARGINS = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 25,
};

const Component: FC<Props> = ({ className }) => {
  const [dotsData, setDotsData] = useState<DotData[]>([]);
  const width = 1440;
  const height = 1080;

  const dots = useDotsList();

  const xAxisRef = useRef<any>(null);
  const yAxisRef = useRef<any>(null);

  useEffect(() => {
    // X axis
    const xRes = dots.map((item) => new Date(item.timestamp));
    const xScale = d3
      .scaleTime()
      .range([0, width])
      .domain([d3.min(xRes) ?? 0, d3.max(xRes) ?? 1]);

    const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => {
      const date = d as Date;
      return `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
    });

    d3.select(xAxisRef.current).call(xAxis);

    // Y axis
    const yRes = dots.map((item) => item.value);
    const yScale = d3
      .scaleLinear()
      .range([0, height])
      .domain([d3.max(yRes) ?? 1, d3.min(yRes) ?? 0]);

    const yAxis = d3.axisLeft(yScale).tickFormat((d, i) => d.toString());

    d3.select(yAxisRef.current).call(yAxis);

    setDotsData(
      dots.map((item) => ({
        id: item.id,
        x: xScale(Number(item.timestamp)),
        y: yScale(item.value),
        value: item.value,
      })),
    );
  }, [dots]);

  const viewBox = `0 ${-CHART_MARGINS.top - CHART_MARGINS.bottom} ${width + CHART_MARGINS.left} ${
    height + CHART_MARGINS.top + CHART_MARGINS.bottom
  }`;

  return (
    <div className={classnames(styles.root, className)}>
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
        <g ref={xAxisRef} transform={`translate(${CHART_MARGINS.left}, ${height - CHART_MARGINS.bottom})`} />
        <g ref={yAxisRef} transform={`translate(${CHART_MARGINS.left}, ${-CHART_MARGINS.bottom})`} />
        <g className={styles.chart} transform={`translate(${CHART_MARGINS.left}, ${-CHART_MARGINS.bottom})`}>
          {dotsData.map((curr, index, initial) => {
            const prev = initial[index - 1];
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
