import type { FC } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';
import type { Props } from './types';

const Component: FC<Props> = ({ className }) => <div className={classnames(styles.root, className)}>blank</div>;

Component.displayName = 'BlankComponent';

export default Component;
