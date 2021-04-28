import React from 'react';
import '@testing-library/jest-dom';
import { rendererForComponent } from '../../setupTests';
import TableClassroomScores from './TableClassroomScores';

test('Stock Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <TableClassroomScores tableName="classrooms" id="1" title="Classrooms" />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
