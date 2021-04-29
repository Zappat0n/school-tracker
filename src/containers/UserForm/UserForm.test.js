import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderComponent, rendererForComponent, store } from '../../setupTests';
import UserForm from './UserForm';

beforeAll(() => renderComponent(
  <>
    <UserForm action="Log In" handleError={() => {}} />
  </>,
));

test('Display title', () => {
  expect(store.getState().userReducer.title).toBe('Log In');
});

test('Renders Input fields correctly', () => {
  renderComponent(
    <>
      <UserForm action="Log In" handleError={() => {}} />
    </>,
  );

  const inputUsername = screen.getByLabelText('Username');
  expect(inputUsername).toBeInTheDocument();
  expect(inputUsername).toHaveAttribute('type', 'text');

  const inputPassword = screen.getByLabelText('Password');
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveAttribute('type', 'password');
});

test('Stock Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <UserForm action="Log In" handleError={() => {}} />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
