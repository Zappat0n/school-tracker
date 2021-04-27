require('dotenv').config();

export const signUpRequest = (username, password) => new Request(
  `${process.env.REACT_APP_SERVER}/users`,
  {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: `{
      "username" : "${username}",
      "password" : "${password}"
    }`,
  },
);

export const logInRequest = (username, password) => new Request(
  `${process.env.REACT_APP_SERVER}/auth/login`,
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

export const logOutRequest = (token, username, password) => new Request(
  `${process.env.REACT_APP_SERVER}/oauth/revoke`,
  {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
    },
    body: JSON.stringify({
      token,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    }),
  },
);

export const postEventRequest = (token, date, student, presentation, score) => new Request(
  `${process.env.REACT_APP_SERVER}/events`,
  {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: `{
      "date" : "${date}",
      "student_id" : ${student},
      "presentation_id" : ${presentation},
      "score" : ${score}
    }`,
  },
);

export const updateEventRequest = (token, id, date, student, presentation, score) => new Request(
  `${process.env.REACT_APP_SERVER}/events/${id}`,
  {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: `{
      "date" : "${date}",
      "student_id" : ${student},
      "presentation_id" : ${presentation},
      "score" : ${score}
    }`,
  },
);

export const getIndexRequest = (token, controller) => new Request(
  `${process.env.REACT_APP_SERVER}/${controller}`,
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
