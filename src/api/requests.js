require('dotenv').config();

export const signUpRequest = (email, password) => new Request(
  `${process.env.REACT_APP_SERVER}/users/`,
  {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: `{
      "email" : "${email}",
      "password" : "${password}",
      "client_id" : "${process.env.REACT_APP_CLIENT_ID}"
    }`,
  },
);

export const logInRequest = (email, password) => new Request(
  `${process.env.REACT_APP_SERVER}/oauth/token/`,
  {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: `{
      "grant_type" : "password",
      "email" : "${email}",
      "password" : "${password}",
      "client_id" : "${process.env.REACT_APP_CLIENT_ID}",
      "client_secret" : "${process.env.REACT_APP_CLIENT_SECRET}"
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

export const classroomsRequest = (token) => new Request(
  `${process.env.REACT_APP_SERVER}/classrooms`,
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const deleteBookRequest = (title) => new Request(
  `https://infinite-woodland-11668.herokuapp.com/books?title=${title}`,
  {
    method: 'DELETE',
  },
);
