import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import{ useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import "./BookItem.css"

function BookItem({book}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    // Bring in user. Make a deleteBook dispatch. Payload is id.
    //added for DELETE (1). And added delete button in return.:
    const user = useSelector(store => store.user)
    
    const deleteBook = (id) => {
        console.log('In deleteBook');
        dispatch({
            type: 'DELETE_BOOK',
            payload: id
        })
    }
    // end of delete stuff

/*
After handleClick is triggered, history.push to the details view, using that book's specific ID.
*/
const handleClick = () => {
    console.log('In BookItem.jsx handleClick. The clicked Book ID is:', book.id);
    history.push(`/details/${book.id}`)
    // dispatch({
    //     type: 'FETCH_BOOK',
    //     payload: params.id
    // });

    // history.push(`/details/${book.id}`);
}

const handleEdit = (id) => {
    console.log('In handleEdit', id);
    history.push(`/edit/${id}`);
}

// Click the book and trigger the history.push to the details view
// does this need a conditional to make auth work?
return(
    <>  
     {/* Click the div to trigger details handleClick */}
            <br></br>
        <div className="bookDiv">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <img className="bookcover" key={book.id} onClick={handleClick} src={book.cover} />
            <br></br>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <button onClick={() => handleEdit(book.id)}>Edit</button>
        </div>
    </>
    // BASIC CODE THAT WORKS FOR DIV
    //  <div onClick={handleClick}>
            
    //         <h3>{book.title}</h3>
    //         <p>{book.author}</p>
    //         <img src={book.cover} />
    //     </div>
);

}// end BookItem

export default BookItem;