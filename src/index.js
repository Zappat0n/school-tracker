import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import classroomTableReducer from './reducers/classroomTableReducer';
import './index.scss';
import Routes from './Routes';

const rootReducer = combineReducers({
  userReducer,
  classroomTableReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer)}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
