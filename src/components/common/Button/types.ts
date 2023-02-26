import type { MouseEvent } from 'react';

import type { FlexAlign, FlexVerticalAlign } from '../utils/flexAlign';

/** Button size */
export enum ButtonSize {
  /** Small button (height is 32 pixels) */
  SMALL = 'small',
  /** Medium button (height is 40 pixels) */
  MEDIUM = 'medium',
}

/** Available types of button */
export enum ButtonType {
  /** Just button (default value) */
  BUTTON = 'button',
  /** Submit button (for forms) */
  SUBMIT = 'submit',
  /** Reset button (for forms) */
  RESET = 'reset',
}

/** `Button` component properties */
export interface Props {
  /** Additional CSS class */
  className?: string;
  /** Identifier of corresponding form. Use this property if you want to place button outside of this form. */
  form?: string;
  /** Button content horizontal alignment. Default value is {@link FlexAlign.JUSTIFY}. */
  contentAlign?: FlexAlign | null | undefined;
  /** Button content vertical alignment. Default value is {@link FlexVerticalAlign.MIDDLE}. */
  contentVerticalAlign?: FlexVerticalAlign | null | undefined;
  /** HTML button type. Default value is {@link ButtonType.BUTTON}. */
  type?: ButtonType | null | undefined;
  /** Is button disabled */
  disabled?: boolean;
  /** Global navigation index (for `Tab` key navigation) */
  tabIndex?: number;

  /** Button click handler */
  onClick?(event?: MouseEvent<HTMLButtonElement>): unknown;
}
