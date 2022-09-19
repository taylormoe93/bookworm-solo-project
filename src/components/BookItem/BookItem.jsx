import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import{ useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import "./BookItem.css"

function BookItem({book}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    // todo comments
    // !
    // ?
    // *
    
    // Bring in user. Make a deleteBook dispatch. Payload is id.
    //added for DELETE (1). And added delete button in return.:
    const user = useSelector(store => store.user)
    


/*
After handleClick is triggered, history.push to the details view, using that book's specific ID.
*/
const handleClick = () => {
    console.log('In BookItem.jsx handleClick. The clicked Book ID is:', book.id);
    history.push(`/details/${book.id}`)
        dispatch({
            type: 'GET_DETAIL_VIEW',
            payload: book.id
        });

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
            <br></br>
         
        </div>
    </>

);

}// end BookItem

export default BookItem;