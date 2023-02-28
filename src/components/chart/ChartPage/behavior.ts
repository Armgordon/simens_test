import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadDotsFromLS } from '@store/chart';

export const useLoadStorageDotsEffect = (): boolean => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onMount = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(loadDotsFromLS());
    } catch (_) {
      console.error("There wasn't chart data in prev session");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    onMount();
  }, [onMount]);

  return isLoading;
};
