import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import './Details.css'

// MUI BUTTONS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

//MUI STACK LAYOUT
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// MUI STACK LAYOUT STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); // end MUI STYLING

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>


// DETAILS
function Details(book) {
    //Declare history, dispatch, params, useSelectors
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    // const book = useSelector(store => store.fetchBook);
    const details = useSelector(store => store.detailsReducer);
    const user = useSelector(store => store.user)

    console.error('DETAILS REDUCER', details)
    // const genre = useSelector(store => store.genres);
    console.log('DETAILS SHOULD GIVE BOOK:', book);
    //GET DETAILS
    useEffect(() => {
    }, []);
    let {id} = useParams();

    /*
    HANDLE CLICK for BACK button.
    Sends User to the My Library Page.
    */
   const handleClick = () => {
    history.push('/user'); 
   }

  //EDIT BOOK
  const handleEdit = () => {
    console.log('In handleEdit', id);
    history.push(`/edit/${id}`);
}

  //DELETE BOOK
  const deleteBook = () => {
        console.log('In deleteBook');
        dispatch({
            type: 'DELETE_BOOK',
            payload: id
        });
        history.push('/user'); 
    }
    // end of delete stuff

/*
RENDER the details to the DOM.
We bring in the title, cover, and the description, etc. by targeting the associated Database values (i.e. {book.title})
Beneath that we have the genre.
*/

return(
    <>
        {/* TITLE, COVER, DESCRIPTION */}
        <div className="detailsInfo">
        </div>
            {details.map(detailedView => (
            
            <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
              <Item>

          <div className="detailPage" key={detailedView.id}>
            <h1>{detailedView.title} </h1>
            <h2>{detailedView.author}</h2>
            <img className="coverDiv" src={detailedView.cover} />
            <br></br>
            <br></br>
            {/* BACK BUTTON */}
            <Button variant="(default)" 
            className="backButton" 
            onClick={handleClick}>
            Home
            </Button>

            {/* EDIT BUTTON */} 
            &nbsp;
            <Button variant="(default)" 
            className="edit"
            //  style={{color: "#87ceeb"}} 
            onClick={() => handleEdit(details.id)}>
           
            Edit
            </Button>

             {/* DELETE BUTTON */} 
            &nbsp;
            <Button variant="(default)"
            onClick={() => deleteBook(details.id)}
            style={{color: "red"}} 
            startIcon={<DeleteIcon />}>
             Delete
            </Button>


          </div>
          </Item>
          </Stack>
          </Box>
        ))}


        {/* <button onClick={`/edit/${id}`}>Edit</button> */}
    </>
)

} // end Details

export default Details;