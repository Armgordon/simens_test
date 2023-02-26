import { useMemo } from 'react';
import type { Mapping } from 'classnames';

/**
 * Horizontal alignment of flex container elements independent of flex direction.
 * Should be used with `use-flex-align` mixin from `./flexAlign.scss` file.
 */
export enum FlexAlign {
  /** Elements to the left side of container */
  LEFT = 'left',
  /** Elements to the center of container */
  CENTER = 'center',
  /** Elements to the right side of container */
  RIGHT = 'right',
  /** Fit elements to container with space between them */
  JUSTIFY = 'justify',
}

/**
 * Hook which returns horizontal alignment modifier CSS-classes mapping rules for flex container element.
 * Base CSS-class of this element must use `use-flex-align` mixin from `./flexAlign.scss` file.
 *
 * @param styles CSS-classes names dictionary from `.scss`, `.css` or `.sass` file
 * @param baseClassName Base CSS-class key at CSS-classes names dictionary.
 * CSS-class must use `use-flex-align` mixin from `./flexAlign.scss` file.
 * @param flexAlign Flex horizontal alignment
 *
 * @returns Valid {@link Mapping} object for `classnames` package
 */
export const useFlexAlignMapping = (
  styles: Record<string, string>,
  baseClassName: string,
  flexAlign: FlexAlign,
): Mapping =>
  useMemo(
    (): Mapping => ({
      [styles[`${baseClassName}_alignLeft`]]: flexAlign === FlexAlign.LEFT,
      [styles[`${baseClassName}_alignCenter`]]: flexAlign === FlexAlign.CENTER,
      [styles[`${baseClassName}_alignRight`]]: flexAlign === FlexAlign.RIGHT,
      [styles[`${baseClassName}_alignJustify`]]: flexAlign === FlexAlign.JUSTIFY,
    }),
    [styles, baseClassName, flexAlign],
  );

/**
 * Vertical alignment of flex container elements, independent of flex direction.
 * Should be used with `use-flex-vertical-align` mixin from `./flexAlign.scss` file.
 */
export enum FlexVerticalAlign {
  /** Elements to the top side of container */
  TOP = 'top',
  /** Elements to the middle of container */
  MIDDLE = 'middle',
  /** Elements to the bottom side of container */
  BOTTOM = 'bottom',
  /** Fit elements to container with space between them */
  JUSTIFY = 'justify',
}

/**
 * Hook which returns vertical alignment modifier CSS-classes mapping rules for flex container element.
 * Base CSS-class of this element must use `use-flex-vertical-align` mixin from `./flexAlign.scss` file.
 *
 * @param styles CSS-classes names dictionary from `.scss`, `.css` or `.sass` file
 * @param baseClassName Base CSS-class key at CSS-classes names dictionary.. CSS-class must use
 * `use-flex-vertical-align` mixin from `./flexAlign.scss` file.
 * @param flexVerticalAlign Flex vertical alignment
 *
 * @returns Valid {@link Mapping} object for `classnames` package
 */
export const useFlexVerticalAlignMapping = (
  styles: Record<string, string>,
  baseClassName: string,
  flexVerticalAlign: FlexVerticalAlign,
): Mapping =>
  useMemo(
    (): Mapping => ({
      [styles[`${baseClassName}_verticalAlignTop`]]: flexVerticalAlign === FlexVerticalAlign.TOP,
      [styles[`${baseClassName}_verticalAlignMiddle`]]: flexVerticalAlign === FlexVerticalAlign.MIDDLE,
      [styles[`${baseClassName}_verticalAlignBottom`]]: flexVerticalAlign === FlexVerticalAlign.BOTTOM,
      [styles[`${baseClassName}_verticalAlignJustify`]]: flexVerticalAlign === FlexVerticalAlign.JUSTIFY,
    }),
    [styles, baseClassName, flexVerticalAlign],
  );
