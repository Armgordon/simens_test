import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDotsFromDB, saveDotsToDB } from '@store/chart';

export const useLoadStorageDotsEffect = () => {
  const dispatch = useDispatch();

  const onMount = useCallback(async () => {
    try {
      await dispatch(loadDotsFromDB());
    } catch (err) {
      console.error(err instanceof Error ? err.message : 'Error was thrown');
    }
  }, [dispatch]);

  const onUnmount = useCallback(() => {
    dispatch(saveDotsToDB());
  }, [dispatch]);

  useEffect(() => {
    onMount();
    return onUnmount();
  }, [onMount, onUnmount]);
};
