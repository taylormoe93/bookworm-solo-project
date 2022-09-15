import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from '../BookItem/BookItem';

//MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// MUI STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'center', 
  color: theme.palette.text.secondary,
})); // end MUI STYLING


//BOOK LIST FUNCTION
function BookList() {
    const dispatch = useDispatch();
    const bookListReducer = useSelector((store) => store.bookListReducer);
    console.log('THE BOOK LIST REDUCER:',bookListReducer);
    const books = useSelector((store) => store.books);
    console.log('books from reducer:', books)

    useEffect(() => {
        dispatch({ type: 'FETCH_BOOKS' });
    }, []);

    return (
        <main>
            <h1>My Library</h1>
            <section className="book">
                {bookListReducer.map(book => {
                    return (
                        <>
                        <Box sx={{ width: '100%' }}>
                       
                        {/* //Import the BookItem component: */}
                       <Stack spacing={2}>
                        <Item>
                        <BookItem
                        key={book.id}
                        book={book}
                        />
                        </Item>
                        </Stack>
                       </Box>
                        </>
                    );
                })}
            </section>
        </main>
    )
}

export default BookList;