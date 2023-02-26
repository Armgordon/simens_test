import type { FC, KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Input, { InputType } from '@components/common/Input';
import DotsList from '@components/chart/DotsList';
import type { Dot } from '@domain';

import { useDispatch } from 'react-redux';
import { dotsActions } from '@store/chart';
import styles from './styles.module.scss';
import type { Props } from './types';

/***/
let ID_COUNTER = 0;

const Component: FC<Props> = ({ className }) => {
  const startTime = useRef<number>(Date.now());

  // input control
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onKeyboardEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue !== '') {
      dispatch(
        dotsActions.addOne({
          value: Number(inputValue),
          timestamp: Date.now() - startTime.current,
          id: (ID_COUNTER += 1),
        }),
      );
      setInputValue('');
    }
  };

  return (
    <div className={classnames(styles.root, className)}>
      <Input
        label="Data"
        type={InputType.NUMBER}
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={onKeyboardEvent}
      />
      <DotsList />
    </div>
  );
};

Component.displayName = 'DotsSection';

export default Component;
