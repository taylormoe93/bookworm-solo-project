import React, {useState} from "react";
import TextField from '@mui/material/TextField';



function SearchInput({term, searchKeyword}) {

    function handleSearch(e){
            searchKeyword(e.target.value);
    }

    return(
        <>
        <h1>Search</h1>
        
            <TextField
            type="text" 
            value={term}
            placeholder="Enter a book name"
            onChange={handleSearch}
            ></TextField>
        </>
    )
}

export default SearchInput;