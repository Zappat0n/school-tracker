import storage from '../storage/storage';

require('dotenv').config();

export const signUpRequest = (username, password) => new Request(
  `${process.env.REACT_APP_SERVER}/users`,
  {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: `{
      "user" : {
        "username" : "${username}",
        "password" : "${password}",
        "password_confirmation" : "${password}"
      }
    }`,
  },
);

export const logInRequest = (username, password) => new Request(
  `${process.env.REACT_APP_SERVER}/authentications`,
  {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: `{
      "username" : "${username}",
      "password" : "${password}"
    }`,
  },
);

export const logOutRequest = (username, password) => new Request(
  `${process.env.REACT_APP_SERVER}/oauth/revoke`,
  {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
    },
    body: JSON.stringify({
      token: storage.load(),
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    }),
  },
);

export const postEventRequest = (date, student, presentation, score) => new Request(
  `${process.env.REACT_APP_SERVER}/events`,
  {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${storage.load()}`,
    },
    body: `{
      "date" : "${date}",
      "student_id" : ${student},
      "presentation_id" : ${presentation},
      "score" : ${score}
    }`,
  },
);

export const updateEventRequest = (id, date, student, presentation, score) => new Request(
  `${process.env.REACT_APP_SERVER}/events/${id}`,
  {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${storage.load()}`,
    },
    body: `{
      "date" : "${date}",
      "student_id" : ${student},
      "presentation_id" : ${presentation},
      "score" : ${score}
    }`,
  },
);

export const getIndexRequest = (controller) => new Request(
  `${process.env.REACT_APP_SERVER}/${controller}`,
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${storage.load()}`,
    },
  },
);
