import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderComponent, rendererForComponent, store } from '../../setupTests';
import Table from './Table';
import { addTable } from '../../reducers/actions';

test('Display title', () => {
  store.dispatch(addTable({
    tableName: 'classrooms/1',
    headers: 'headers',
    data: [
      {
        id: 1,
        name: 'John',
        birth_date: '2018-01-01',
      },
      {
        id: 2,
        name: 'Peter',
        birth_date: '2018-01-01',
      },
      {
        id: 3,
        name: 'Mark',
        birth_date: '2018-01-01',
      },
      {
        id: 4,
        name: 'Louis',
        birth_date: '2018-01-01',
      },
    ],
  }));

  renderComponent(
    <>
      <Table tableName="classrooms" id="1" title="Classrooms" />
    </>,
  );

  expect(store.getState().userReducer.tables['classrooms/1'].data.length).toBe(4);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Peter')).toBeInTheDocument();
  expect(screen.getByText('Mark')).toBeInTheDocument();
  expect(screen.getByText('Louis')).toBeInTheDocument();
});

test('Table Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <Table tableName="classrooms" id="1" title="Classrooms" />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
