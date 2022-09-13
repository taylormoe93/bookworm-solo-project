import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import './Details.css'


// DETAILS
function Details() {
    //Declare history, dispatch, params, useSelectors
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    const book = useSelector(store => store.fetchBook);
    const details = useSelector(store => store.detailsReducer);
    console.error('DETAILS REDUCER', details)
    // const genre = useSelector(store => store.genres);
    console.log('DETAILS SHOULD GIVE BOOK:', book);
    //GET DETAILS
    useEffect(() => {
    }, []);
    let {id} = useParams();

    const getDetails = (id) => {
        console.log('IN getDetails DETAILS.JSX. ID:', id)
       
        // dispatch({
        //     type: 'GET_DETAIL_VIEW',
        //     payload: id
        // });
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
        <div className="detailsInfo">
        </div>
            {details.map(detailedView => (
          <div key={detailedView.id}>
            <h1>{detailedView.title} </h1>
            <h2>{detailedView.author}</h2>
            <img className="coverDiv" src={detailedView.cover} />
            <br></br>
          </div>
        ))}

        {/* BACK BUTTON */}
        <button onClick={handleClick}>Back</button>
        {/* <button onClick={`/edit/${id}`}>Edit</button> */}
    </>
)

} // end Details

export default Details;