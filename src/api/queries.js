import { getBooksRequest, createBookRequest, deleteBookRequest } from './requests';

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
    return (response ? response.json() : response);
  } catch (error) {
    displayError(error);
    return null;
  }
}

async function getBooks() {
  return query(getBooksRequest());
}

async function createBook(book) {
  return query(createBookRequest(book));
}

async function deleteBook(title) {
  return query(deleteBookRequest(title));
}

export { getBooks, createBook, deleteBook };
