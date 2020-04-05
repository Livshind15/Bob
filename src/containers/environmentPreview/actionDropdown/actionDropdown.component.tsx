import React, { useRef } from 'react';
import { useOnClickOutside } from '../../../helpers/clickOutside';
import Action from './action/action.component';

import { ReactComponent as edit } from './action/edit.svg';
import './actionDropdown.scss';

interface ActionDropdownProps {
    onClose: () => void;
}

const ActionDropdown: React.FC<ActionDropdownProps> = ({ onClose }: ActionDropdownProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, onClose);
    return (
        <div ref={ref} className={'actionDropdown-container'}>
            <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
            <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
            <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
            <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
        </div>
    );
};

export default ActionDropdown;
