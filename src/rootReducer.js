import { combineReducers } from 'redux';
import { listType } from './constants';

// action type
const SELECT_LIST_TYPE = 'SELECT_LIST_TYPE';

// action creator
export const selectListType = type => ({
  type: SELECT_LIST_TYPE,
  payload: { listType: type },
});

// reducer
const defaultAppState = {
  listType: listType.topstories,
};

const AppState = (state = defaultAppState, action) => {
  switch (action.type) {
    case SELECT_LIST_TYPE: {
      return {
        ...state,
        listType: action.payload.listType,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const rootReducer = combineReducers({ AppState });

export default rootReducer;
