import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { dotsActions, saveDotsToLS } from '@store/chart';

export const useDotListTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  return `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
};

export const useRemoveDot = (id: number): (() => void) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(dotsActions.removeOne(id));
    dispatch(saveDotsToLS());
  }, [dispatch, id]);
};
