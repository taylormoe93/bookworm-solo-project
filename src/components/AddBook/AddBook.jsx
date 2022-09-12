import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

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
        <h3>Add A Book</h3>
        {/* When we click submit */}
        <form onSubmit={handleSubmit}>

            {/* Run handleTitleChange */}
            <input
            required
            placeholder="Title"
            onChange={handleTitleChange}
            ></input>

            {/* Run handleAuthorChange */}
            <input
            required
            placeholder="Author"
            onChange={handleAuthorChange}
            ></input>

            {/* Run handleCoverChange */}
            <input
            required
            placeholder="Cover"
            onChange={handleCoverChange}
            ></input>

            <button type="Submit">Submit</button>
        </form>
    </>
)
} // end AddBookForm

export default AddBook;