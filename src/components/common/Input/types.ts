import type { KeyboardEvent } from 'react';

/** Available input types */
export enum InputType {
  /** Simple text input */
  TEXT = 'text',
  /** Password input */
  NUMBER = 'number',
}

/** `Input` component properties */
export interface Props {
  /** Additional CSS class */
  className?: string;
  /** Input unique identifier (mostly need for labels) */
  id?: string;
  /** Value of input */
  value?: string;
  /** Input label */
  label?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Is input disabled */
  disabled?: boolean;
  /** Global navigation index (for `Tab` key navigation) */
  tabIndex?: number;

  type?: InputType;

  /** Change event handler */
  onChange?(value: string): unknown;
  onKeyDown?(event: KeyboardEvent<HTMLInputElement>): void;
}
