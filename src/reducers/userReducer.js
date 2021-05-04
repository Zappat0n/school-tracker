/* eslint-disable no-param-reassign */
import * as actions from './actions';

const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USERNAME: return { ...state, username: action.payload };
    default: return state;
  }
};

export default userReducer;
