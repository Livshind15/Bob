import classnames from 'classnames';
import React, { useState } from 'react';

import { ReactComponent as Edit } from './assets/edit.svg';
import { ReactComponent as Submit } from './assets/submit.svg';

import './editButton.scss';

export type EditButtonModes = 'Edit' | 'Submit';

export interface Modes {
    icon: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    nextMode: EditButtonModes;
    action: () => Promise<void>;
}

export interface EditButtonProps {
    onEdit?: () => Promise<void>;
    onSubmit?: () => Promise<void>;
}

const EditButton: React.FC<EditButtonProps> = ({
    onSubmit = (): Promise<void> => {
        return Promise.resolve();
    },
    onEdit = (): Promise<void> => {
        return Promise.resolve();
    },
}: EditButtonProps) => {
    const [mode, setMode] = useState<EditButtonModes>('Edit');
    const [loading, setLoading] = useState(false);
    const modes: { [mode: string]: Modes } = {
        Edit: { icon: Edit, action: onEdit, nextMode: 'Submit' },
        Submit: { icon: Submit, action: onSubmit, nextMode: 'Edit' },
    };
    return (
        <div
            className={'editButton-container'}
            onClick={(): void => {
                setLoading(true);
                modes[mode].action().then(() => {
                    setLoading(false);
                    setMode(modes[mode].nextMode);
                });
            }}
        >
            <div className={classnames('wrapper', { hover: !loading })}>
                {React.createElement(modes[mode].icon, { className: 'icon' })}
                <div className={classnames('spinner', { loading: loading })} />
            </div>
        </div>
    );
};

export default EditButton;
