import {
  signUpRequest, logInRequest, logOutRequest, getIndexRequest, postEventRequest, updateEventRequest,
} from './requests';

async function query(request) {
  try {
    const response = await fetch(request);
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
}

const logIn = async (username, password) => query(logInRequest(username, password));

async function signUp(username, password) {
  const response = await query(signUpRequest(username, password));
  return response;
}

async function getIndex(controller) {
  const request = getIndexRequest(controller);
  const response = await query(request);
  return response;
}

async function postEvent(date, student, presentation, score) {
  const request = postEventRequest(date, student, presentation, score);
  const response = await query(request);
  return response;
}

async function updateEvent(id, date, student, presentation, score) {
  const request = updateEventRequest(id, date, student, presentation, score);
  const response = await query(request);
  return response;
}

async function logOut(username, password) {
  return query(logOutRequest(username, password));
}

export {
  logIn, signUp, logOut, getIndex, postEvent, updateEvent,
};
