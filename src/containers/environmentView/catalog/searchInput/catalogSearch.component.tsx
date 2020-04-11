import React from 'react';
import classnames from 'classnames';
import { ReactComponent as SearchIcon } from './search.svg';

import './catalogSearch.scss';

const CatalogSearch = () => (
    <div className={classnames('catalogSearch-container')}>
        <input id="search" placeholder="Search" />
        <SearchIcon className={'icon'} fill="#a5a5a5" />
    </div>
);

export default CatalogSearch;
