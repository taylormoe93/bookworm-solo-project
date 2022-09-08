import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // allows us to use redux within our react app
import { createStore, combineReducers} from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

//import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';

import store from './redux/store';

import App from './components/App/App';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_BOOKS', fetchAllBooks);
  yield takeEvery('FETCH_GENRES', fetchAllGenres);
  yield takeEvery('CURRENT_BOOK', fetchCurrentBook);
}

function* fetchAllBooks() {
  //get all books from the Database
  try{
    const book = yield axios.get(`/api/book`);
    console.log('get all:', book.data);
    yield put({ type: 'SET_BOOKS', payload: book.data});
  } catch {
    console.error('Error in fetchAllBooks in index.js');
  }
} // end fetchAllBooks 

function* fetchAllGenres(action) {
  try {
    const genre = yield axios.get(`/api/genre/${action.payload}`);
    yield put({type: 'SET_GENRE', payload: genre.data})
  } catch {
    console.error('Error in fetchAllGenres in index.js')
  }
} // end fetchAllGenres

function* fetchCurrentBook(action) {
  try {
    const currentBook = yield axios.get(`/api/book/${action.payload}`);
    yield put({type: 'SET_BOOK', payload: currentBook.data});
  } catch {
    console.error('Error in fetchCurrentBook in index.js');
  }
} // end fetchCurrentBook

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


//Current book
const currentBook = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.payload;
    default: 
      return state;
  }
} // end Current Book

const book = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOK':
      return action.payload;
    default:
        return state;

  }
} // end Book

// Used to store the book genres
const genre = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
} // end genres

//Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    book,
    genre,
    currentBook
  }),
  //Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
); // end storeInstance

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);

