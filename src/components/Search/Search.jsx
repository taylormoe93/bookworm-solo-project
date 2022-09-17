import React, {useState, useEffect} from 'react';

//MUI INPUT AND BUTTON
import TextField from '@mui/material/TextField';

function Search(){
  // Take two values and equal to useState hook
  const [data, setData] = useState("");
  // Loading state - set by default to false
  const [loading, setLoading] = useState(false);
  // Error state
  const [error, setError] = useState("");

   useEffect(() => {
    setLoading(true); // if it's loading then set it to true
    fetch("http://openlibrary.org/search.json?author=austen") // how to input the name of the author you want?
    .then((response) => response.json())
    .then((data) => setData(data))
    .then(() => setLoading())
    .catch(setError);
  }, []);

   // Define loading screen while it fetches data
  // Uses inline styling to center the text
  if(loading) {
    return <h1 style={{ textAlign: "center" }}>
      Loading ...
    </h1>;
  }

  if(error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if(!data) {
    return null;
  }

  // if (data) {
  //   return <div className="container">{data.docs[0].title}</div>;
  // }

  let array = data.docs;
    return (
         <>
         <div className="container">
            <ul>
              {array.map((item, i) => {
                return <li key={i}>
                  <i className="fa fa-book"></i>
                  &nbsp;
                  {item.title}
                </li>;
              })}
            </ul>
          </div>
                        
        </>

           )
}




export default Search;