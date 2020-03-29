import React from 'react';
import './action.scss';

interface ActionProps {
    SvgLogo?: any,
    title: string,
    onClickCallback?: () => {}
}

const Action: React.FC<ActionProps> = ({ SvgLogo, title, onClickCallback }) =>
    <div className={'dropdown-action-container'}>
        <SvgLogo className={'img'}/>
        <p className={'title'}>{title}</p>
    </div>
export default Action;
