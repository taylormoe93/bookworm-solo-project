import React, {useState, useEffect} from 'react';
import './Search.css'
import SearchInput from "./SearchInput";

//MUI INPUT AND BUTTON
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// MUI STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'center', 
  color: theme.palette.text.secondary,
})); // end MUI STYLING

function Search(){
  // Take two values and equal to useState hook
  const [data, setData] = useState("");
  // Loading state - set by default to false
  const [loading, setLoading] = useState(false);
  // Error state
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

   useEffect(() => {
    setLoading(true); // if it's loading then set it to true
    fetch("http://openlibrary.org/search.json?author=tolkien") // how to input the name of the author you want?
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
const searchHandler = (search) => {
  setSearch(search);
  if(search !==""){
    const newBookList = array.filter((book) => {
      return Object.values(book)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
    });
    setSearchResults(newBookList);
  } else {
    setSearchResults(array);
  }
}



  let array = data.docs;
    return (
         <>
          
         <Stack spacing={2}>
          <Item>
         <div className="container">
            <SearchInput term={search} searchKeyword={searchHandler}/>
            {/* If search results are less than one show this */}
            {search.length < 1 ? 
            <ul className="list">
              {array.map((item, i) => {
                return <ul key={i} className="list-item">
                  <i className="fa fa-book"></i>
                  &nbsp;
                  {item.title}
                </ul>;
              })}
            </ul>
            // Otherwise show this
             : 
              <ul className="list">
              {searchResults.map((item, i) => {
                return <ul key={i} className="list-item">
                  <i className="fa fa-book"></i>
                  &nbsp;
                  {item.title}
                </ul>;
              })}
            </ul>
            } 
          </div>
          </Item>
          </Stack>
                  
        </>

           )
}




export default Search;