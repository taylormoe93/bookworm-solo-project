import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';

// DETAILS
function Details() {
    //Declare history, dispatch, params, useSelectors
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    const book = useSelector(store => store.fetchBook);
    // const genre = useSelector(store => store.genres);
    console.log('DETAILS SHOULD GIVE BOOK:', book);
    //GET DETAILS
    useEffect(() => {
        getDetails(id);
    }, []);
    let {id} = useParams();

    const getDetails = (id) => {
        console.log(id)
        dispatch({
            type: 'GET_DETAIL_VIEW',
            payload: id
        });
    };

    /*
    HANDLECLICK for BACK button.
    Sends User to the My Library Page.
    */
   const handleClick = () => {
    history.push('/user'); 
   }

/*
RENDER the details to the DOM.
We bring in the title, cover, and the description, etc. by targeting the associated Database values (i.e. {book.title})
Beneath that we have the genre.
*/

return(
    <>
        {/* TITLE, COVER, DESCRIPTION */}
        {/* <div className="detailsInfo">
            <h1>{book.title}</h1>
             <p>{book.author}</p>
            <img src={book.cover} /> */}
           
        {/* </div> */}

        {/* BACK BUTTON */}
        <button onClick={handleClick}>Back</button>
        {/* <button onClick={`/edit/${id}`}>Edit</button> */}
    </>
)

} // end Details

export default Details;