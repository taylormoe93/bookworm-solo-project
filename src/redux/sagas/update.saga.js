import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateSaga() {
    yield takeLatest('UPDATE', updateBook);
}

function* updateBook(action) {
    console.log('updateBook payload',action.payload);
    try {
        yield axios.put(`/api/book/${action.payload.id}`, action.payload)
        yield put({type: 'SET_EDITED_DETAILS'})
        } catch {
            console.error(error);
        }

    }

export default updateSaga;