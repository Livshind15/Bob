import React from 'react';

import './addEnvironment.scss';
import { ReactComponent as Plus } from './plus.svg';

const AddEnvironment: React.FC = () => (
    <div className={'addEnvironment-container'}>
        <div className={'content'}>
            <div className={'symbol-container'}>
                <Plus className={'plus-symbol'} />
            </div>
            <div className={'addEnvironment-title-container'}>
                <p className="addEnvironment-title">Add Environment</p>
            </div>
        </div>
    </div>
);

export default AddEnvironment;
