import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

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
        })
    } // end update 

    const dispatch = useDispatch()
    const history = useHistory();

    const details = useSelector(store => store.details);

  


    return (
        <>
            <div>
                <div>
                   
                </div>
                <h3>Edit Book</h3>
                <input 
                required
                placeholder={'Title'} 
                value={book.title} 
                onChange={(event) => 
                setBook({...book, title: event.target.value})} 
                />

                <input 
                required
                placeholder={'Author'} 
                value={book.author} 
                onChange={(event) => 
                setBook({...book, author: event.target.value})} 
                />

                <input 
                required
                placeholder={'Cover'} 
                value={book.cover} 
                onChange={(event) => 
                setBook({...book, cover: event.target.value})} 
                />
            </div>

            <div>
                <button onClick={() => history.push('/user')}>Cancel</button>
                <button onClick={() => update()}>Save Changes</button>
            </div>
        </>
    )
}

export default EditBook;