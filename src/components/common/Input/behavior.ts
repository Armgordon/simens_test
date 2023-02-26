import classnames from 'classnames';
import type { ChangeEvent, ChangeEventHandler } from 'react';
import { useCallback } from 'react';

import styles from './styles.module.scss';

/** Label element CSS classes hook */
export const useLabelClassnames = (label?: string): string =>
  classnames(styles.label, {
    [styles.label_hidden]: !label,
  });

/** Hook which wraps incoming `onChange` callback to native input change event handler */
export const useOnChange = (onChange?: (value: string) => unknown): ChangeEventHandler<HTMLInputElement> =>
  useCallback((event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.value), [onChange]);
