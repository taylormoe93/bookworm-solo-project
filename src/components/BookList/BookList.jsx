import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from '../BookItem/BookItem';

//BOOKLIST FUNCTION
function BookList() {
    const dispatch = useDispatch();
    const books = useSelector(store => store.books);
    console.log('books from reducer:', books)

    useEffect(() => {
        dispatch({ type: 'FETCH_BOOKS' });
    }, []);

    return (
        <main>
            <h1>My Library</h1>
            <section className="book">
                {books.map(book => {
                    return (
                        //Import the BookItem component:
                        <BookItem
                        key={book.id}
                        book={book}
                        />
                    );
                })}
            </section>
        </main>
    )
}

export default BookList;