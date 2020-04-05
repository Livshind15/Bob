import React from 'react';
import Action from './action/action.component';

import { ReactComponent as edit } from './action/edit.svg';
import './actionDropdown.scss';

const ActionDropdown: React.FC<{}> = () => (
    <div className={'actionDropdown-container'}>
        <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
        <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
        <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
        <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
    </div>
);

export default ActionDropdown;
