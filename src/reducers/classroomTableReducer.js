/* eslint-disable no-param-reassign */
import * as actions from './actions';

const initialState = {
  students: [],
  presentations: [],
  scores: {},
};

const classroomTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_SCORE: {
      const {
        presentation, student, score, id,
      } = action.payload;
      state.scores[`${presentation}-${student}`] = { id, score };
      return state;
    }
    case actions.SAVE_STUDENTS: return { ...state, students: action.payload };
    case actions.SAVE_PRESENTATIONS: return { ...state, presentations: action.payload };
    case actions.SAVE_SCORES: {
      action.payload.forEach(
        (event) => {
          state.scores[`${event.presentation_id}-${event.student_id}`] = { id: event.id, score: event.score };
        },
      );
      return state;
    }
    default: return state;
  }
};

export default classroomTableReducer;
