import React from "react";
import '../index.css';
//import { Link } from 'react-router-dom';

const SearchBar=()=>{
    return(
        <div>
            <input type="text" placeholder="Search entire store here..." name="search"/>
            <button type="submit">Search</button>
        </div>
    )
}


export default SearchBar; 