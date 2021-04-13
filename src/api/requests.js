export const getBooksRequest = () => new Request(
  'https://infinite-woodland-11668.herokuapp.com/books/index/',
  {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export const createBookRequest = (book) => new Request(
  `https://infinite-woodland-11668.herokuapp.com/books?title=${book.title}&author=${book.author}&category=${book.category}`,
  {
    mode: 'no-cors',
    method: 'POST',
  },
);

export const deleteBookRequest = (title) => new Request(
  `https://infinite-woodland-11668.herokuapp.com/books?title=${title}`,
  {
    method: 'DELETE',
  },
);
