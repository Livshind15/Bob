import React from 'react';
import './actionDropdown.scss';
import Action from './action/action.component';
import { ReactComponent as edit } from './action/edit.svg';

interface ActionDropdownProps {
 
}

const ActionDropdown: React.FC<ActionDropdownProps> = ( ) =>
    <div className={'actionDropdown-container'}>
        <Action title="Edit" SvgLogo={edit}></Action>
        <Action title="Edit" SvgLogo={edit}></Action>
        <Action title="Edit" SvgLogo={edit}></Action>
        <Action title="Edit" SvgLogo={edit}></Action>
    </div>
export default ActionDropdown;
