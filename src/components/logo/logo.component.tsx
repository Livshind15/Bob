import React from 'react';
import classnames from 'classnames';

import logoSvg from '../../assets/img/logo.svg';

import './logo.scss';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }: LogoProps) => (
    <div className={classnames('logo-container', className || '')}>
        <img src={logoSvg} alt={'logo'} className={'logo'}></img>
    </div>
);

export default Logo;
