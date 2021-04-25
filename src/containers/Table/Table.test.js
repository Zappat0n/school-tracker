import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderComponent, rendererForComponent, store } from '../../setupTests';
import Table from './Table';
import { addTable } from '../../slices/userSlice';

test('Display title', () => {
  store.dispatch(addTable({
    tableName: 'classrooms/1',
    headers: 'headers',
    data: [
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Peter',
      },
      {
        id: 3,
        name: 'Mark',
      },
      {
        id: 4,
        name: 'Louis',
      },
    ],
  }));

  renderComponent(
    <>
      <Table tableName="classrooms" id="1" title="Classrooms" />
    </>,
  );

  expect(store.getState().user.tables['classrooms/1'].data.length).toBe(4);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Peter')).toBeInTheDocument();
  expect(screen.getByText('Mark')).toBeInTheDocument();
  expect(screen.getByText('Louis')).toBeInTheDocument();
});

test('Stock Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <Table tableName="classrooms" id="1" title="Classrooms" />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
