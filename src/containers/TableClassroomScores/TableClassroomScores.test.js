import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderComponent, rendererForComponent, store } from '../../setupTests';
import TableClassroomScores from './TableClassroomScores';
import {
  saveScores, saveStudents, savePresentations,
} from '../../slices/classroomTableSlice';

test('Display title', () => {
  store.dispatch(saveStudents([
    { id: 1, name: 'John' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Mark' },
    { id: 4, name: 'Louis' },
  ]));

  store.dispatch(savePresentations([
    { id: 1, name: 'Math' },
    { id: 2, name: 'Language' },
    { id: 3, name: 'Science' },
    { id: 4, name: 'Spanish' },
  ]));

  store.dispatch(saveScores([
    {
      id: 1, presentation_id: 1, student_id: 1, score: 1,
    },
    {
      id: 2, presentation_id: 2, student_id: 2, score: 2,
    },
    {
      id: 3, presentation_id: 1, student_id: 3, score: 3,
    },
    {
      id: 4, presentation_id: 2, student_id: 2, score: 0,
    },
  ]));

  renderComponent(
    <>
      <TableClassroomScores tableName="classrooms" id="1" title="Classrooms" />
    </>,
  );

  expect(screen.getByText('Math')).toBeInTheDocument();
  expect(screen.getByText('Language')).toBeInTheDocument();
  expect(screen.getByText('Science')).toBeInTheDocument();
  expect(screen.getByText('Spanish')).toBeInTheDocument();
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Peter')).toBeInTheDocument();
  expect(screen.getByText('Mark')).toBeInTheDocument();
  expect(screen.getByText('Louis')).toBeInTheDocument();
});

test('Stock Match SnapShot', () => {
  const tree = rendererForComponent(
    <>
      <TableClassroomScores tableName="classrooms" id="1" title="Classrooms" />
    </>,
  );
  expect(tree).toMatchSnapshot();
});
