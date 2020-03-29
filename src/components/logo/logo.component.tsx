import React from 'react';
import logoSvg from '../../assets/img/logo.svg';
import './logo.scss';

const Logo = () =>
  <div className={"logo-container"}>
    <img src={logoSvg} alt={"logo"} className={'logo'}></img>
  </div>


export default Logo;
