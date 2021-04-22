/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  presentations: [],
  scores: {},
};

export const classroomTableSlice = createSlice({
  name: 'classroomTable',
  initialState,
  reducers: {
    saveScore: (state, action) => {
      const {
        presentation, student, score, id,
      } = action.payload;
      state.scores[`${presentation}-${student}`] = { id, score };
    },
    saveStudents: (state, action) => {
      state.students = action.payload;
    },
    savePresentations: (state, action) => {
      state.presentations = action.payload;
    },
    saveScores: (state, action) => {
      action.payload.forEach(
        (event) => {
          state.scores[`${event.presentation_id}-${event.student_id}`] = { id: event.id, score: event.score };
        },
      );
    },
    clean: (state) => {
      state.scores = [];
    },
  },
});

export const {
  clean, saveScore, saveScores, saveStudents, savePresentations,
} = classroomTableSlice.actions;

export default classroomTableSlice.reducer;
