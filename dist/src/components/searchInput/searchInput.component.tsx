import classnames from 'classnames';
import React from 'react';

import { ReactComponent as SearchIcon } from './search.svg';
import './searchInput.scss';

interface SearchInputProps {
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className }: SearchInputProps) => (
    <div className={classnames('SearchInput-container', className || '')}>
        <SearchIcon className={'icon'} fill="#a5a5a5" />
        <input id="search" placeholder="Search..." />
    </div>
);

export default SearchInput;
