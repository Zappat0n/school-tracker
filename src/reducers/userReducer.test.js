import { store } from '../setupTests';
import { saveUsername } from './actions';

test('Dispatch save Username action', () => {
  store.dispatch(saveUsername('abc'));
  expect(store.getState().userReducer.username).toBe('abc');
});
