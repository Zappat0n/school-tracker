/* eslint-disable no-param-reassign */
import * as actions from './actions';

const initialState = {
  username: '',
  title: '',
  errors: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USERNAME: return { ...state, username: action.payload };
    case actions.SET_TITLE: return { ...state, title: action.payload };
    case actions.SET_ERROR: return { ...state, errors: action.payload };
    default: return state;
  }
};

export default userReducer;
