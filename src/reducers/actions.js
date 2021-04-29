export const SET_USERNAME = 'SET_USERNAME';
export const SET_TITLE = 'SET_TITLE';
export const SET_ERROR = 'SET_ERROR';

export const SAVE_SCORE = 'SAVE_SCORE';
export const SAVE_STUDENTS = 'SAVE_STUDENTS';
export const SAVE_PRESENTATIONS = 'SAVE_PRESENTATIONS';
export const SAVE_SCORES = 'SAVE_SCORES';

export const saveUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const changeTitle = (title) => ({
  type: SET_TITLE,
  payload: title,
});

export const setError = (errors) => ({
  type: SET_ERROR,
  payload: errors,
});

/* ------ */

export const saveScore = (score) => ({
  type: SAVE_SCORE,
  payload: score,
});

export const saveStudents = (students) => ({
  type: SAVE_STUDENTS,
  payload: students,
});

export const savePresentations = (presentations) => ({
  type: SAVE_PRESENTATIONS,
  payload: presentations,
});

export const saveScores = (scores) => ({
  type: SAVE_SCORES,
  payload: scores,
});
