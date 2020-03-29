import React from 'react';
import './header.scss';
import Logo from '../logo/logo.component';
import SearchInput from '../searchInput/searchInput.component';

const Header = () =>
  <div className="header">
    <Logo/>
    <div className={"separator"}/>
    <SearchInput/>
  </div>

export default Header;
