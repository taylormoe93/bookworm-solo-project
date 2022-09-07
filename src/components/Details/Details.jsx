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

    const book = useSelector(store => store.currentBook);
    const genre = useSelector(store => store.genres);

    //GET DETAILS
    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = () => {
        dispatch({
            type: 'FETCH_GENRES',
            payload: params.id
        });
    };

    /*
    HANDLECLICK for BACK button.
    Sends User to the My Library Page.
    */
   const handleClick = () => {
    history.push('/'); // does this need to be /user instead of /?
   }

/*
RENDER the details to the DOM.
We bring in the title, cover, and the description, etc. by targeting the associated Database values (i.e. {book.title})
Beneath that we have the genre.
*/

return(
    <>
        {/* TITLE, COVER, DESCRIPTION */}
        <h1>{book.title}</h1>
        <img src={book.cover} />
        <p>{book.notes}</p>

        {/* GENRE */}
        <div>
            {genre.map(genre => {
                return(
                    <p key={genre.id}>{genre.name}</p>
                )
            })}
        </div>
        
        {/* BACK BUTTON */}
        <button onClick={handleClick}>Back</button>
    </>
)

} // end Details

export default Details;