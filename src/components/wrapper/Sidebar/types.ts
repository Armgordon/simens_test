/** `SideBar` component properties */
export interface Props {
  /** Extra classnames */
  className?: string;
  orientation: Orientation;
}

export enum Orientation {
  LEFT = 'left',
  RIGHT = 'right',
}
