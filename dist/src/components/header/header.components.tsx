import React from 'react';
import classnames from 'classnames';

import Logo from '../logo/logo.component';
import SearchInput from '../searchInput/searchInput.component';

import './header.scss';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }: HeaderProps) => (
    <div className={classnames('header', className || '')}>
        <Logo />
        <div className={'separator'} />
        <SearchInput />
    </div>
);

export default Header;
