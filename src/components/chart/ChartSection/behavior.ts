import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { MutableRefObject } from 'react';
import * as d3 from 'd3';
import { useDotsList } from '@components/selectHooks/chartHooks';
import type { DotData } from '@domain';

export const CHART_MARGINS = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 25,
};

export const useDimensionsEffect = (): { width: number; height: number } => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  /** Resize observer
   * Альтернатива применения RO

   * preserveAspectRatio="none" для svg контейнера:
   * (визуально при ресайзе выглядит хуже, но не вызывает ререндеров)
   * */
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width: dimensions.width,
    height: dimensions.height,
  };
};

export const useCalculateChartData = (
  width: number,
  height: number,
): {
  xAxisRef: MutableRefObject<any>;
  yAxisRef: MutableRefObject<any>;
  dotsData: DotData[];
} => {
  const dots = useDotsList();
  const [dotsData, setDotsData] = useState<DotData[]>([]);

  const xAxisRef = useRef<any>(null);
  const yAxisRef = useRef<any>(null);

  /** d3 calculations */
  useLayoutEffect(() => {
    const xRes = dots.map((item) => new Date(item.timestamp));
    const xScale = d3
      .scaleTime()
      .range([0, width])
      .domain([d3.min(xRes) ?? 0, d3.max(xRes) ?? 1]);

    const xAxis = d3.axisBottom(xScale).tickFormat((d) => {
      const date = d as Date;
      return `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
    });

    d3.select(xAxisRef.current).call(xAxis);

    const yRes = dots.map((item) => item.value);
    const yScale = d3
      .scaleLinear()
      .range([0, height])
      .domain([d3.max(yRes) ?? 1, d3.min(yRes) ?? 0]);

    const yAxis = d3.axisLeft(yScale).tickFormat((d) => d.toString());

    d3.select(yAxisRef.current).call(yAxis);

    setDotsData(
      dots.map((item) => ({
        id: item.id,
        x: xScale(Number(item.timestamp)),
        y: yScale(item.value),
        value: item.value,
      })),
    );
  }, [dots, height, width]);

  return {
    dotsData,
    xAxisRef,
    yAxisRef,
  };
};

export const useViewBox = (width: number, height: number): string =>
  useMemo(
    () =>
      `0 ${-CHART_MARGINS.top - CHART_MARGINS.bottom} ${width + CHART_MARGINS.left} ${
        height + CHART_MARGINS.top + CHART_MARGINS.bottom
      }`,
    [height, width],
  );
