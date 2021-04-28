import { store } from '../setupTests';
import {
  saveScore, saveScores, saveStudents, savePresentations,
} from './actions';

test('Dispatch Table Classroom data with saveScore action', () => {
  store.dispatch(saveScore({
    presentation: 1,
    student: 1,
    score: 1,
    id: 5,
  }));

  expect(Object.keys(store.getState().classroomTableReducer.scores).includes('1-1')).toBe(true);
  expect(store.getState().classroomTableReducer.scores['1-1'].id).toBe(5);
  expect(store.getState().classroomTableReducer.scores['1-1'].score).toBe(1);
});

test('Dispatch action saveStudents', () => {
  store.dispatch(saveStudents([1, 2]));

  expect(store.getState().classroomTableReducer.students.length).toBe(2);
});

test('Dispatch action savePresentations', () => {
  store.dispatch(savePresentations([1, 2]));

  expect(store.getState().classroomTableReducer.presentations.length).toBe(2);
});

test('Dispatch action saveScores', () => {
  store.dispatch(saveScores([
    {
      id: 1,
      presentation_id: 1,
      student_id: 2,
      score: 3,
    },
    {
      id: 2,
      presentation_id: 3,
      student_id: 2,
      score: 1,
    },
    {
      id: 3,
      presentation_id: 10,
      student_id: 1,
      score: 1,
    },
  ]));

  expect(Object.keys(store.getState().classroomTableReducer.scores).length).toBe(4);
  expect(store.getState().classroomTableReducer.scores['1-2'].id).toBe(1);
  expect(store.getState().classroomTableReducer.scores['3-2'].score).toBe(1);
  expect(store.getState().classroomTableReducer.scores['10-1'].id).toBe(3);
});
