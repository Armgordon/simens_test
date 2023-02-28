import { actionCreatorFactory } from 'typescript-fsa';

const creator = actionCreatorFactory('DOTS_LIST');

/** Clear `layout` sub-storage */
export const clear = creator('CLEAR');

export const setLeftSidebarState = creator<boolean>('SET_LEFT_SIDEBAR_STATE');

export const setRightSidebarState = creator<boolean>('SET_RIGHT_SIDEBAR_STATE');
