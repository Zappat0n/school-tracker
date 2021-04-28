import { store } from '../setupTests';
import {
  addTable, changeTitle, saveToken, saveUsername, savePassword,
} from './actions';

test('Dispatch save Username action', () => {
  store.dispatch(saveUsername('abc'));
  expect(store.getState().userReducer.username).toBe('abc');
});

test('Dispatch save Password action', () => {
  store.dispatch(savePassword('12345678'));
  expect(store.getState().userReducer.password).toBe('12345678');
});

test('Dispatch save Token action', () => {
  store.dispatch(saveToken('*********'));
  expect(store.getState().userReducer.token).toBe('*********');
});

test('Dispatch changeTitle action', () => {
  store.dispatch(changeTitle('Hi'));

  expect(store.getState().userReducer.title).toBe('Hi');
});

test('Dispatch addTable action', () => {
  store.dispatch(addTable({
    tableName: 'classroom',
    headers: 'headers',
    data: 'data',
  }));

  expect(Object.keys(store.getState().userReducer.tables)[0]).toBe('classroom');
  expect(store.getState().userReducer.tables.classroom.headers).toBe('headers');
  expect(store.getState().userReducer.tables.classroom.data).toBe('data');
});
