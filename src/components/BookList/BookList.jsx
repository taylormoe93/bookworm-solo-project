import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import bookitem

//BOOKLIST FUNCTION
function BookList() {
    const dispatch = useDispatch();
    const books = useSelector(store => store.books);

    useEffect(() => {
        dispatch({ type: 'FETCH_BOOKS' });
    }, []);

    return (
        <main>
            <h1>My Book List</h1>
            <section className="books">
                {books.map(books => {
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