/**
 * @fileoverview JavaScript version of application palette. You can set this values to corresponding
 * React Components properties, but we recommend you to use CSS mixins from `./styles.css` file instead.
 */

/** Application palette available colors (names, HEX codes and RGB(A) values) */
export enum Color {
  TRANSPARENT = 'transparent',
  AVATAR_RED = '#ec4c47',
  AVATAR_ORANGE = '#d9822b',
  AVATAR_YELLOW = '#f7d154',
  AVATAR_GREEN = '#47b881',
  AVATAR_TEAL = '#14b5d0',
  AVATAR_BLUE = '#1070ca',
  AVATAR_PURPLE = '#735dd0',
  MENU_BACKGROUND_DARK_BLUE = '#2b3648',
  MENU_HOVER_PRESSED_DARK_BLUE = '#3c4b64',
  MENU_ACTIVE_DARK_BLUE = '#495977',
  TABLE_HEADER_TEXT_BLUE = '#425a70',
  TEXT_DARK_BLUE = '#234361',
  OVERLAY_DARK_BLUE = 'rgba(35, 67, 97, 0.6)',
  MODAL_DIVIDER_BLACK = 'rgba(0, 0, 0, 0.1)',
  DIVIDER_DARK_BLUE = '#384864',
  LIGHT_BROWN = '#9b9b9b',
  GREY = '#587896',
  MENU_TEXT_DIRTY_GREY = '#afbdd1',
  INPUT_DISABLED_GREY = '#f0f2f4',
  LIGHT_GREY = '#e4e7eb',
  HOVER_LIGHT_BLUE = '#eceff2',
  BACKGROUND_LIGHT_BLUE = '#f6f9fd',
  WHITE = '#fff',
  BUTTON_NORMAL_BLUE = '#109cf1',
  BUTTON_HOVER_BLUE = '#34aff9',
  BUTTON_ACTIVE_BLUE = '#098ede',
  MENU_ICONS_TEXT_BLUE = '#59b6ff',
  AVATAR_STROKE_BLUE = '#99c1ff',
  TABLE_CELL_HOVER = '#e4f0ff',
  BUTTON_NORMAL_RED = '#ee4c4c',
  BUTTON_HOVER_RED = '#f66b6b',
  BUTTON_ACTIVE_RED = '#dc4a4a',
  TABLE_BORDER = 'rgba(210, 212, 214, 0.8)',
  BORDERS = '#e2e3e5',
  RED_PALE = '#fbe8e8',
  ORANGE_PALE = '#fcf1e6',
  YELLOW_PALE = '#fdf5da',
  GREEN_PALE = '#e1f3eb',
  TEAL_PALE = '#e4f5f8',
  BLUE_PALE = '#e6f0f9',
  PURPLE_PALE = '#f0edfa',
  PRELOADER_STROKE = 'rgba(88, 120, 150, 0.2)',
}

/** Application palette available box shadows (all values for `boxShadow` property) */
export enum BoxShadow {
  MEDIUM = '0 2px 6px #a1a1a1',
  MENU_BAR = '0 4px 4px #ababab',
  PROFILE_DROPDOWN = '0 2px 8px #484848',
  BUTTON_NORMAL = '0 2px 4px #bfbfbf',
  BUTTON_HOVER_BLUE = '0 4px 10px #d6effe',
  BUTTON_ACTIVE_BLUE = '0 2px 6px #b5ddf5',
  BUTTON_HOVER_RED = '0 4px 10px #fde1e1',
  BUTTON_ACTIVE_RED = '0 2px 6px #f5c9c9',
  TABLE_HEADER = '0 1px 0 #d2d4d6',
  TABLE_BODY = '0 1px 0 #e2e3e5',
  DROPDOWN_LAST_CELL = '0 1px 0 #e2e3e5',
  CARD_NORMAL_SHADOW = '0 2px 4px #dae5ec',
  CARD_HOVER_ACTIVE_SHADOW = '0 2px 8px #d3e6f1',
  PROFILE_DROPDOWN_SHADOW = '0 2px 2px #607ba8',
  BLUE_TABLE_BORDER = '0 1px 0 #d5e6f7',
}

export const DEFAULT_CHART_COLORS = ['ec4c47', '1070ca', '47b881'];
