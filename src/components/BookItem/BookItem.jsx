import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import{ useParams } from 'react-router-dom';

function BookItem({book}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

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
return(
    <>
        <div onClick={handleClick}>
            <h3>{book.title}</h3>
            <img src={book.cover} />
        </div>
    </>
);

}// end BookItem

export default BookItem;