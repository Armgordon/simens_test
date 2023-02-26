import type { FC, PropsWithChildren } from 'react';
import classnames from 'classnames';

import { useContentClassList } from './behavior';
import type { Props } from './types';
import { ButtonType } from './types';
import styles from './styles.module.scss';

/** `Button` - standard button for application */
const Component: FC<PropsWithChildren<Props>> = ({
  className,
  contentAlign,
  contentVerticalAlign,
  type,
  disabled,
  form,
  tabIndex,
  onClick,
  children,
}) => (
  <button
    className={classnames(styles.root, className)}
    form={form}
    type={type || ButtonType.BUTTON}
    tabIndex={tabIndex}
    disabled={disabled}
    onClick={onClick}
  >
    <div className={useContentClassList(contentAlign, contentVerticalAlign)}>{children}</div>
  </button>
);

Component.displayName = 'Button';

export default Component;
