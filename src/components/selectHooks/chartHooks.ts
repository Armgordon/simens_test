import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import type { Dot } from '@domain';
import type { State } from '@store';

export const useDotsList = (): Dot[] => {
  const selector = useCallback(({ chart }: State): Dot[] => chart.dots.items, []);
  return useSelector(selector);
};
