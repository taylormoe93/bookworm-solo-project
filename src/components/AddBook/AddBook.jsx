import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

//MUI STACK LAYOUT
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// MUI STACK LAYOUT STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); // end MUI STYLING


function AddBook() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({
        title: '', 
        author: '', 
        cover: '',
        book_read: false,
        // add book_read
        // import genre?? in this or outside - I'm guessing
    });

    /*
    Spread newBook. Capture the value from the input.
    */
    const handleTitleChange = (event) => {
        setNewBook({...newBook, title: event.target.value})
    }

    const handleAuthorChange = (event) => {
        setNewBook({...newBook, author: event.target.value})
    }

    const handleCoverChange = (event) => {
        setNewBook({...newBook, cover: event.target.value})
    }

    //ADD BOOK READ AND GENRES?

    // Dispatch the payload which contains the captured data from the inputs.
    const handleSubmit = () => {
        dispatch({
            type: 'ADD_BOOK',
            payload: newBook
        })

        history.push('/user');
    }

    console.log(newBook)


return(
    <>
       <div className="editDiv">
                <Box sx={{width: '100%' }}>
                <Stack spacing={2}>
                <Item>
                

                
        <h3>Add A Book</h3>
        {/* When we click submit */}
        <form onSubmit={handleSubmit}>

            {/* Run handleTitleChange */}
            <TextField
            required
            placeholder="Title"
            onChange={handleTitleChange}
            ></TextField>

            <br></br>
            <br></br>

            {/* Run handleAuthorChange */}
            <TextField
            required
            placeholder="Author"
            onChange={handleAuthorChange}
            ></TextField>

            <br></br>
            <br></br>

            {/* Run handleCoverChange */}
            <TextField
            required
            placeholder="Cover"
            onChange={handleCoverChange}
            ></TextField>

            <br></br>
            <br></br>

            <Button variant="(default)" type="Submit">Submit</Button>
             
            <Button variant="(default)"
                className="cancel"
                onClick={() => history.push('/user')}>
                Cancel
                </Button>

        </form>
        
        </Item>
        </Stack>
        </Box>
        </div>
        
    </>
)
} // end AddBookForm

export default AddBook;