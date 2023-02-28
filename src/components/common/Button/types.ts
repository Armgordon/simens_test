import type { MouseEvent } from 'react';

import type { FlexAlign, FlexVerticalAlign } from '../utils/flexAlign';

/** Available types of button */
export enum ButtonTheme {
  /** Just button (default value) */
  ICON = 'ICON',
}

/** Available types of button */
export enum ButtonType {
  /** Just button (default value) */
  BUTTON = 'button',
}

/** `Button` component properties */
export interface Props {
  /** Additional CSS class */
  className?: string;
  /** Button content horizontal alignment. Default value is {@link FlexAlign.JUSTIFY}. */
  contentAlign?: FlexAlign | null | undefined;
  /** Button content vertical alignment. Default value is {@link FlexVerticalAlign.MIDDLE}. */
  contentVerticalAlign?: FlexVerticalAlign | null | undefined;
  /** HTML button type. */
  type?: ButtonType | null | undefined;
  /** HTML button type. */
  theme?: ButtonTheme | null | undefined;
  /** Is button disabled */
  disabled?: boolean;
  /** Global navigation index (for `Tab` key navigation) */
  tabIndex?: number;

  /** Button click handler */
  onClick?(event?: MouseEvent<HTMLButtonElement>): unknown;
}
