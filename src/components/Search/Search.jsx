import React, {useState, useEffect} from 'react';

function Search() {

      // Take two values and equal to useState hook
  const [data, setData] = useState("");
  // Loading state - set by default to false
  const [loading, setLoading] = useState(false);
  // Error state
  const [error, setError] = useState("");


  useEffect(() => {
    setLoading(true); // if it's loading then set it to true
    fetch("http://openlibrary.org/search.json?author=austen")
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

  if (data) {
    return <div className="app">{data.docs[0].title}</div>;
  }

    return <h1>Welcome to the book searcher</h1>;
}



export default Search;