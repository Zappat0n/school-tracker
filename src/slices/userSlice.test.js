import { store } from '../setupTests';
import { addTable, changeTitle, save } from './userSlice';

test('Dispatch User data with save action', () => {
  store.dispatch(save({
    email: 'abc@abc.com',
    password: '12345678',
    token: '*********',
  }));

  expect(store.getState().user.email).toBe('abc@abc.com');
  expect(store.getState().user.password).toBe('12345678');
  expect(store.getState().user.token).toBe('*********');
});

test('Dispatch changeTitle action', () => {
  store.dispatch(changeTitle('Hi'));

  expect(store.getState().user.title).toBe('Hi');
});

test('Dispatch addTable action', () => {
  store.dispatch(addTable({
    tableName: 'classroom',
    headers: 'headers',
    data: 'data',
  }));

  expect(Object.keys(store.getState().user.tables)[0]).toBe('classroom');
  expect(store.getState().user.tables.classroom.headers).toBe('headers');
  expect(store.getState().user.tables.classroom.data).toBe('data');
});
