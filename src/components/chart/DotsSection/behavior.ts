import { useState } from 'react';
import type { Dispatch, SetStateAction, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { dotsActions, saveDotsToLS } from '@store/chart';

/* Mock Id counter */
let ID_COUNTER = 0;

export const useInputControlBehavior = (): {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  onKeyboardEvent: (event: KeyboardEvent<HTMLInputElement>) => void;
} => {
  // input control
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onKeyboardEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue !== '') {
      dispatch(
        dotsActions.addOne({
          value: Number(inputValue),
          timestamp: Date.now(),
          id: (ID_COUNTER += 1),
        }),
      );
      dispatch(saveDotsToLS());
      setInputValue('');
    }
  };

  return {
    inputValue,
    setInputValue,
    onKeyboardEvent,
  };
};
