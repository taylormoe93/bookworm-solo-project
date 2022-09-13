import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import './Details.css'


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
    HANDLECLICK for BACK button.
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
          <div className="detailPage" key={detailedView.id}>
            <h1>{detailedView.title} </h1>
            <h2>{detailedView.author}</h2>
            <img className="coverDiv" src={detailedView.cover} />
            <br></br>
            <br></br>
            {/* BACK BUTTON */}
            <button className="backButton" onClick={handleClick}>Back</button>
            {/* DELETE BUTTON */} 
            &nbsp;
            <button onClick={() => deleteBook(details.id)}>Delete</button>
            {/* EDIT BUTTON */} 
            &nbsp;
            <button onClick={() => handleEdit(details.id)}>Edit</button>
          </div>
        ))}


        {/* <button onClick={`/edit/${id}`}>Edit</button> */}
    </>
)

} // end Details

export default Details;