/* eslint-disable no-param-reassign */
import * as actions from './actions';

const initialState = {
  username: '',
  password: '',
  title: '',
  token: '',
  errors: [],
  tables: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USERNAME: return { ...state, username: action.payload };
    case actions.SET_PASSWORD: return { ...state, password: action.payload };
    case actions.SET_TITLE: return { ...state, title: action.payload };
    case actions.SET_TOKEN: return { ...state, token: action.payload };
    case actions.SET_ERROR: return { ...state, errors: action.payload };
    case actions.ADD_TABLE: return {
      ...state,
      tables: {
        [action.payload.tableName]: { headers: action.payload.headers, data: action.payload.data },
      },
    };
    default: return state;
  }
};

export default userReducer;
