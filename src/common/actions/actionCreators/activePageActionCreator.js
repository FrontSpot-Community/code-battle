import {ACTIVE_PAGE_CHANGE} from '../index';

export const activePageChange = (pageName) => ({
  type: ACTIVE_PAGE_CHANGE,
  payload: pageName
});
