import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EditBook.css'

//MUI STACK LAYOUT
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

//MUI INPUT AND BUTTON
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// MUI STACK LAYOUT STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); // end MUI STYLING

function EditBook() {
    // Load the book details on page refresh
    useEffect(() => {
        reload(id)
    }, [])
    
    let id = useParams()
    console.log('EDIT BOOK', id.id);


      // user id?
    const [book, setBook] = useState({id: id.id, title: '', author: '', cover: '', book_read:''})
    // const [genre_id, setGenre_id] = useState('')

    const reload = (id) => {
        console.log('In EditBook reload. ID:', id);
        dispatch({
            type: 'GET_EDITED_DETAILS',
            payload: id
        })
    }

    const update = () => {
        console.log(book)
        dispatch({
            type: 'UPDATE',
            payload: book
        });

        history.push('/user');
    } // end update 

    const dispatch = useDispatch()
    const history = useHistory();

    // const details = useSelector(store => store.details);

  


    return (
        <>
        
            <div className="editDiv">
                <Box sx={{width: '100%' }}>
                <Stack spacing={2}>
                <Item>
                <div>
                
                <h1>Edit Book</h1>

                <TextField 
                variant="outlined"
                required
                placeholder={'Title'} 
                value={book.title} 
                onChange={(event) => 
                setBook({...book, title: event.target.value})} 
                />

                <br></br> 
                <br></br>   

                <TextField
                variant="outlined" 
                required
                placeholder={'Author'} 
                value={book.author} 
                onChange={(event) => 
                setBook({...book, author: event.target.value})} 
                />
            
                <br></br>
                <br></br>
                   

                <TextField
                variant="outlined"
                required
                placeholder={'Cover'} 
                value={book.cover} 
                onChange={(event) => 
                setBook({...book, cover: event.target.value})} 
                />

                
                
            </div>

            <div>
                <br></br>
                
                <Button variant="(default)" 
                className="saveChanges"
                onClick={() => update()}>
                Save Changes
                </Button>

                
                &nbsp; 

                <Button variant="(default)"
                className="cancel"
                onClick={() => history.push('/user')}>
                Cancel
                </Button>

            </div>
            
        </Item>
        </Stack>
        </Box>
        </div>
        </>
    )
}

export default EditBook;