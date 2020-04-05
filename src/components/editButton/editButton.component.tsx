import React, { useState } from 'react'
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Submit } from "./submit.svg";

import './editButton.scss';
import Action from '../environmentPreview/actionDropdown/action/action.component';
import classnames from 'classnames';

export type EditButtonModes = "Edit" | "Submit";
export interface modes {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>,
    nextMode: EditButtonModes,
    action: () => Promise<void>
}

export interface EditButtonProps {
    onEdit?: () => Promise<void>,
    onSubmit?: () => Promise<void>
}

const EditButton: React.FC<EditButtonProps> = ({ onSubmit = () => { return Promise.resolve() }, onEdit = () => { return Promise.resolve() } }) => {
    const [mode, setMode] = useState<EditButtonModes>('Edit');
    const [loading, setLoading] = useState(false);
    const modes: { [mode: string]: modes } = {
        Edit: { icon: Edit, action: onEdit, nextMode: 'Submit' },
        Submit: { icon: Submit, action: onSubmit, nextMode: 'Edit' }
    }
    return (
        <div className={'editButton-container'} onClick={
            () => {
                setLoading(true);
                modes[mode].action().then(() => {
                    setLoading(false);
                    setMode(modes[mode].nextMode);
                });
            }
        }>
            <div className= {classnames('wrapper',{hover:!loading}) }>
                {React.createElement(modes[mode].icon, { className: "icon", })}
                <div className={classnames('spinner',{loading:loading})} />
            </div>
        </div>
    )
}

export default EditButton
