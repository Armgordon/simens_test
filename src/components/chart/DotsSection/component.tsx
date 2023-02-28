import { memo } from 'react';
import type { FC } from 'react';
import classnames from 'classnames';
import Input, { InputType } from '@components/common/Input';
import DotsList from '@components/chart/DotsList';

import { useInputControlBehavior } from './behavior';
import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className, isLoading }) => {
  const { inputValue, setInputValue, onKeyboardEvent } = useInputControlBehavior();

  return (
    <div className={classnames(styles.DotsSection, className)}>
      <Input
        label="Data"
        type={InputType.NUMBER}
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={onKeyboardEvent}
        disabled={isLoading}
      />
      <DotsList />
    </div>
  );
};

Component.displayName = 'DotsSection';

export default memo(Component);
