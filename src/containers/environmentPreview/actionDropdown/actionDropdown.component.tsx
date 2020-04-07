import React, { useRef, useState, useCallback } from 'react';
import classnames from 'classnames';
import { useOnClickOutside } from '../../../helpers/clickOutside';
import Action from './action/action.component';

import { ReactComponent as edit } from './action/edit.svg';
import './actionDropdown.scss';
import { useEffect } from 'react';

interface ActionDropdownProps {
    toggleEvent?: (toggle) => void;
    ignoreElementRefs?: React.RefObject<HTMLDivElement>[];
}

const ActionDropdown: React.FC<ActionDropdownProps> = ({ ignoreElementRefs, toggleEvent }: ActionDropdownProps) => {
    const [actionDropDownClass, setActionDropDownClass] = useState<string>('mount');
    const toggle = useCallback(() => setActionDropDownClass(actionDropDownClass !== 'open' ? 'open' : 'close'), [
        actionDropDownClass,
    ]);
    useEffect(() => {
        if (toggleEvent) {
            toggleEvent(toggle);
        }
    }, [actionDropDownClass]);

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside([ref, ...(ignoreElementRefs || [])], () => {
        if (actionDropDownClass === 'open') {
            setActionDropDownClass('close');
        }
    });
    return (
        <div ref={ref} className={classnames('action-dropdown', actionDropDownClass)}>
            <div className={'actionDropdown-container'}>
                <Action title="Open" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
                <Action title="Edit" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
                <Action title="Delete" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
                <Action title="Leave" SvgLogo={edit} onClickCallback={(): void => console.log('')} />
            </div>
        </div>
    );
};

export default ActionDropdown;
