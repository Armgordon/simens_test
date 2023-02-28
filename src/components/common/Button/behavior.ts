import classnames from 'classnames';
import { useMemo } from 'react';
import { ButtonTheme } from '@components/common/Button/types';

import { FlexAlign, FlexVerticalAlign, useFlexAlignMapping, useFlexVerticalAlignMapping } from '../utils/flexAlign';
import styles from './styles.module.scss';

/**
 * Hook which returns content element CSS-classes list
 *
 * @param [contentAlign] Button content horizontal alignment. Default value is {@link FlexAlign.JUSTIFY}.
 * @param [contentVerticalAlign] Button content vertical alignment. Default value is {@link FlexVerticalAlign.MIDDLE}.
 * @param [contentClassName] Content element CSS class. Deprecated: use content alignment types.
 *
 * @returns Formatted CSS-classes list divided by space
 */
export const useContentClassList = (
  contentAlign?: FlexAlign | null | undefined,
  contentVerticalAlign?: FlexVerticalAlign | null | undefined,
  contentClassName?: string | null | undefined,
): string => {
  const align = contentAlign || FlexAlign.JUSTIFY;
  const verticalAlign = contentVerticalAlign || FlexVerticalAlign.MIDDLE;

  const alignMapping = useFlexAlignMapping(styles, 'content', align);
  const verticalAlignMapping = useFlexVerticalAlignMapping(styles, 'content', verticalAlign);

  return useMemo(
    () => classnames(styles.content, alignMapping, verticalAlignMapping, contentClassName),
    [alignMapping, verticalAlignMapping, contentClassName],
  );
};

/**
 * Hook which returns CSS-classes list for root element
 *
 * @param [theme] Button theme.
 * @param [className] Additional CSS class for root element
 *
 * @returns Formatted CSS-classes list divided by space
 */
export const useRootClassList = (
  theme?: ButtonTheme | null | undefined,
  className?: string | null | undefined,
): string =>
  useMemo(
    () =>
      classnames(
        styles.Button,
        {
          [styles.Button_themeIcon]: theme === ButtonTheme.ICON,
        },
        className,
      ),
    [className, theme],
  );
