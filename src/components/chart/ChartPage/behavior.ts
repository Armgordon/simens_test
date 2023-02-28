import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadDotsFromDB, saveDotsToDB } from '@store/chart';

export const useLoadStorageDotsEffect = (): boolean => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onMount = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(loadDotsFromDB());
    } catch (err) {
      console.error(err instanceof Error ? err.message : 'Error was thrown');
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    onMount();
  }, [onMount]);

  return isLoading;
};
