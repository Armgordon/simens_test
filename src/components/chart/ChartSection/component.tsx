import * as d3 from 'd3';
import type { FC } from 'react';
import classnames from 'classnames';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className }) => {
  const width = 600;
  const height = 400;

  const [dots, setDots] = useState([
    { x: 10, y: 10 },
    { x: 50, y: 50 },
    { x: 60, y: 30 },
  ]);
  const [data, setData] = useState([]);

  const xAxisRef = useRef<any>(null);

  const a = d3.format('.1f')(dots[0].x);

  useEffect(() => {
    const xScale = d3
      .scaleLinear()
      .range([0, width])
      .domain(dots.map((item) => item.x));

    xAxisRef.current = xScale;
  }, [dots]);

  type Datum = {
    name: string;
    count: number;
  };
  type Datum2 = {
    date: Date;
    temp: number;
  };

  const data2: Datum2[] = [
    { date: new Date(), temp: 21 },
    { date: new Date(1122233), temp: 10 },
  ];

  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 35,
  };

  // const x = d3
  //   .scaleLinear()
  //   .domain([0, 10]) // values of the data space
  //   .range([0, width]); // values of the visual space
  //
  // const position = x(3); // p

  // const maxX = d3.max(data, (d) => d.count) as number;

  // const x = d3
  //   .scaleLinear<number>()
  //   .domain([0, maxX])
  //   .range([margin.left, width - margin.right]);

  const viewBox = `0 0 ${width} ${height - margin.top}`;

  const dateDomain = d3.extent(data2, (d) => d.date) as [Date, Date];
  const tempDomain = d3.extent(data2, (d) => d.temp).reverse() as [number, number];

  const tempScale = d3
    .scaleLinear<number>()
    .domain(tempDomain)
    .range([margin.top, height - margin.bottom])
    .interpolate(d3.interpolateRound);

  const dateScale = d3
    .scaleTime()
    .domain(dateDomain)
    .range([margin.left, width - margin.right]);

  const line = d3
    .line<Datum2>()
    .x((d) => dateScale(d.date))
    .y((d) => tempScale(d.temp))(data2) as string;
  const onClickHandler = () => {
    // eslint-disable-next-line no-console
    console.log('dots.length', dots.length);
    if (dots.length === 3) setDots((prev) => [...prev, { x: 110, y: 150 }]);

    if (dots.length === 4) setDots((prev) => [...prev, { x: 160, y: 50 }]);
  };

  return (
    <div className={classnames(styles.root, className)}>
      <button onClick={onClickHandler}>+</button>
      <svg viewBox={viewBox}>
        <g ref={xAxisRef} />
        <g>
          {/* {dots.map((dot, index) => ( */}
          {/*   // eslint-disable-next-line react/no-array-index-key */}
          {/*   <g key={index}> */}
          {/*     <line x1={`${margin.left}`} x2={`${width}`} y1={`${margin.right}`} y2={`${height}`} stroke="#ccc" /> */}
          {/*   </g> */}
          {/* ))} */}

          {dots.map((curr, index, initial) => {
            if (!index)
              return (
                <text x={curr.x} y={curr.y}>
                  {curr.y}
                </text>
              );

            const prev = initial[index - 1];
            return (
              // eslint-disable-next-line react/no-array-index-key
              <g key={index}>
                <text x={curr.x} y={curr.y}>
                  {curr.y}
                </text>
                <line x1={`${prev.x}`} x2={`${curr.x}`} y1={`${prev.y}`} y2={`${curr.y}`} stroke="#ccc" />
              </g>
            );
          })}
        </g>
        {/* <path d={line} stroke="steelblue" fill="none" /> */}
      </svg>
    </div>
  );
};

Component.displayName = 'ChartSection';

export default Component;
