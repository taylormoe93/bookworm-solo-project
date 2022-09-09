import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga will be fired on "FETCH_BOOKS" 
function* fetchBook() {

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

    const response = yield axios.get('/api/book', config);

    yield put({ type: 'SET_BOOK', payload: response.data })
    } catch (error) {
        console.error('GET IN BOOKLIST SAGA FAILED:', error);
    }
} // end fetchBooks

// Insert delete from example item.saga.js in auth-shelf
function *deleteBook(action) {
    try {
        const config = {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
        };

        const response = yield axios.delete(`/api/booklist/${action.payload}`, config);

        yield put({type: 'FETCH_BOOK' });
    } catch (error) {
        console.error('deleteBook failed:', error);
    }
} // end deleteBook

function* booklistSaga() {
    yield takeLatest('FETCH_BOOKS', fetchBook);
    yield takeLatest('DELETE_BOOK', deleteBook);
}

export default booklistSaga;