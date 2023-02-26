import type { Mapping } from 'classnames';
import { useMemo } from 'react';

/**
 * Hook which returns hidden modifier CSS class mapping for element. Base CSS-class of this element must use
 * `use-hidden` mixin from `./hideHelpers.scss` file.
 *
 * @param styles CSS-classes names dictionary from `.scss`, `.css` or `.sass` file
 * @param baseClassName Base CSS-class key at CSS-classes names dictionary. CSS-class must use
 * `use-hidden` mixin from `./hideHelpers.scss` file.
 * @param isHidden Is target element must be hidden (not to display).
 *
 * @returns Valid {@link Mapping} object for `classnames` package
 */
export const useHiddenMapping = (styles: Record<string, string>, baseClassName: string, isHidden: boolean): Mapping =>
  useMemo(
    (): Mapping => ({
      [styles[`${baseClassName}_hidden`]]: isHidden,
    }),
    [styles, baseClassName, isHidden],
  );

/**
 * Hook which returns invisible modifier CSS class mapping for element. Base CSS-class of this element must use
 * `use-invisible` mixin from `./hideHelpers.scss` file.
 *
 * @param styles CSS-classes names dictionary from `.scss`, `.css` or `.sass` file
 * @param baseClassName Base CSS-class key at CSS-classes names dictionary. CSS-class must use
 * `use-invisible` mixin from `./hideHelpers.scss` file.
 * @param isInvisible Is target element must be invisible (opacity, non-clickable but fit it's space).
 *
 * @returns Valid {@link Mapping} object for `classnames` package
 */
export const useInvisibleMapping = (
  styles: Record<string, string>,
  baseClassName: string,
  isInvisible: boolean,
): Mapping =>
  useMemo(
    (): Mapping => ({
      [styles[`${baseClassName}_invisible`]]: isInvisible,
    }),
    [styles, baseClassName, isInvisible],
  );
