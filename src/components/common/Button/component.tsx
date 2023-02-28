import type { FC, PropsWithChildren } from 'react';

import { useContentClassList, useRootClassList } from './behavior';
import type { Props } from './types';
import { ButtonType } from './types';

/** `Button` - standard button for application */
const Component: FC<PropsWithChildren<Props>> = ({
  className,
  contentAlign,
  contentVerticalAlign,
  type,
  disabled,
  tabIndex,
  onClick,
  children,
  theme,
}) => {
  const rootClassList = useRootClassList(theme, className);
  return (
    <button
      className={rootClassList}
      type={type || ButtonType.BUTTON}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
    >
      <div className={useContentClassList(contentAlign, contentVerticalAlign)}>{children}</div>
    </button>
  );
};

Component.displayName = 'Button';

export default Component;
