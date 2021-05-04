import React from 'react';
import '@testing-library/jest-dom';
import { rendererForComponent } from '../../setupTests';
import Table from './Table';

test('Table Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <Table tableName="classrooms" id="1" title="Classrooms" handleError={() => {}} />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
