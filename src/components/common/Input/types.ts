import type { KeyboardEvent } from 'react';

/** Available input types */
export enum InputType {
  /** Simple text input */
  TEXT = 'text',
  /** Password input */
  NUMBER = 'number',
}

/** Available input themes */
export enum InputTheme {
  /** Default input theme */
  DEFAULT = 'default',
  /** Table search input theme */
  TABLE_SEARCH = 'table_search',
  /** Table settings unused columns input theme */
  COLUMN_SEARCH = 'column_search',
  /** Content search at providers page(s) */
  CONTENT_SEARCH = 'content_search',
  /** Content search in select */
  SELECT_SEARCH = 'content_search',
  ZONE_TABLE = 'zone_table',
}

export enum InputHeight {
  SMALL = 'small',
  MEDIUM = 'medium',
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
