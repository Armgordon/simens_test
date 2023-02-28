import type { FC } from 'react';
import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';
import type { Props } from './types';
import { InputType } from './types';
import { useLabelClassnames, useOnChange } from './behavior';

/** Standard input component */
const Component: FC<Props> = ({
  className,
  id: externalId,
  value,
  disabled,
  tabIndex,
  label,
  placeholder,
  onChange,
  onKeyDown,
  type,
}) => {
  const labelClassNames = useLabelClassnames(label);
  const onChangeInternal = useOnChange(onChange);

  return (
    <div className={classnames(styles.Input, className)}>
      <label className={labelClassNames} htmlFor={externalId}>
        {label}
      </label>
      <input
        id={externalId}
        type={type || InputType.TEXT}
        tabIndex={tabIndex}
        className={styles.input}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeInternal}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

Component.displayName = 'Input';

export default Component;
