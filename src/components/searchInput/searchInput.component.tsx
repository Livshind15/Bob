import React from 'react';
import './searchInput.scss';
import { ReactComponent as SearchIcon }  from './search.svg'

const SearchInput = () =>
    <div className={"SearchInput-container"}>
        <SearchIcon className={"icon"} fill="#a5a5a5"/>
        <input id="search" placeholder="Search..."/>
    </div>

export default SearchInput;
