import {
  signUpRequest, logInRequest, logOutRequest, getIndexRequest, postEventRequest,
} from './requests';

const displayError = (error) => {
  const container = document.querySelector('.errors');
  if (container.innerHTML === '') {
    const display = document.createElement('h5');
    display.innerText = error;
    container.appendChild(display);
    setTimeout(() => {
      const container = document.querySelector('.errors');
      container.innerHTML = '';
    }, 3000);
  }
};

async function query(request) {
  try {
    const response = await fetch(request);
    const json = await response.json();
    return json;
  } catch (error) {
    displayError(error);
    return null;
  }
}

async function logIn(email, password) {
  return query(logInRequest(email, password));
}

async function signUp(email, password) {
  const response = await query(signUpRequest(email, password));
  return response;
}

async function getIndex(token, controller) {
  const request = getIndexRequest(token, controller);
  const response = await query(request);
  return response;
}

async function postEvent(token, date, student, presentation, score) {
  const request = postEventRequest(token, date, student, presentation, score);
  console.log(request);
  const response = await query(request);
  return response;
}

async function logOut(token, username, password) {
  return query(logOutRequest(token, username, password));
}

export {
  logIn, signUp, logOut, getIndex, postEvent,
};
