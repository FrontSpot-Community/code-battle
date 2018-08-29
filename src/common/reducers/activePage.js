import {
  ACTIVE_PAGE_CHANGE
} from 'common/actions';

const initialState = {
  activePageName: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTIVE_PAGE_CHANGE:
    return {
      ...state,
      activePageName: action.payload
    };

  default:
    return state;
  }
};
