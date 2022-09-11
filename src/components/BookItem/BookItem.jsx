import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import{ useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';

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
    dispatch({
        type: 'FETCH_BOOK',
        payload: params.id
    });

    history.push(`/details/${book.id}`);
}

// Click the book and trigger the history.push to the details view
// does this need a conditional to make auth work?
return(
    <>  
     {/* Click the div to trigger details handleClick */}
            <br></br>
        <div key={book.id} onClick={handleClick}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <img src={book.cover} />
            <br></br>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
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