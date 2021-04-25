import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { renderComponent, rendererForComponent } from '../../setupTests';
import NavBar from './NavBar';

test('Renders Input fields correctly', () => {
  renderComponent(
    <>
      <NavBar />
    </>,
  );

  expect(document.querySelector('.d-none')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('menubar'));
  expect(screen.getByText('Classrooms')).toBeInTheDocument();
  expect(document.querySelector('.d-none')).not.toBeInTheDocument();
});

test('NavBar Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <NavBar />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
