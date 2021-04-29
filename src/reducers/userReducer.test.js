import { store } from '../setupTests';
import {
  changeTitle, saveUsername,
} from './actions';

test('Dispatch save Username action', () => {
  store.dispatch(saveUsername('abc'));
  expect(store.getState().userReducer.username).toBe('abc');
});

test('Dispatch changeTitle action', () => {
  store.dispatch(changeTitle('Hi'));

  expect(store.getState().userReducer.title).toBe('Hi');
});
