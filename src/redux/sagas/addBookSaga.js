import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addBook(action){

    try {
    console.log('action.payload in the addbook saga',action.payload);

        yield axios.post('/api/book', action.payload);
        yield put({type: 'FETCH_BOOKS'});
    } catch (error) {
        console.error('Error in addBookSaga:', error);
    };
} // end of addBook worker saga

function* addBookSaga() {
    yield takeEvery('ADD_BOOK', addBook);
}// end of addBookSaga

export default addBookSaga;