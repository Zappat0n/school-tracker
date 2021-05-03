export const SET_USERNAME = 'SET_USERNAME';
export const SAVE_SCORE = 'SAVE_SCORE';
export const SAVE_SCORES = 'SAVE_SCORES';

export const saveUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const saveScore = (score) => ({
  type: SAVE_SCORE,
  payload: score,
});

export const saveScores = (scores) => ({
  type: SAVE_SCORES,
  payload: scores,
});
