// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import userReducer from './reducers/userReducer';
import classroomTableReducer from './reducers/classroomTableReducer';

const rootReducer = combineReducers({
  userReducer, classroomTableReducer,
});

const initialState = {
  userReducer: {
    username: '',
    password: '',
    title: '',
    token: '',
    errors: [],
    tables: {},
  },
  classroomTableReducer: {
    students: [],
    presentations: [],
    scores: {},
  },
};

const store = createStore(rootReducer, initialState);

const renderComponent = (component) => render(
  <Provider store={store}>
    <BrowserRouter>
      {component}
    </BrowserRouter>
  </Provider>,
);

const rendererForComponent = (component) => renderer.create(
  <Provider store={store}>
    <BrowserRouter>
      {component}
    </BrowserRouter>
  </Provider>,
);

export { renderComponent, rendererForComponent, store };
