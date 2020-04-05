import React from 'react';

import { ReactComponent as Pulse } from './pulse.svg';
import './uptime.scss';

const UpTime: React.FC = () => (
    <div className={'uptime-container'}>
        <div className={'img-container'}>
            <Pulse className="img" />
        </div>
        <div className={'text-container'}>
            <div className={'uptime-title-container'}>
                <p className={'uptime-title'}>Uptime</p>
            </div>
            <div className={'uptime-value-container'}>
                <p className={'uptime-value'}>99.98%</p>
            </div>
        </div>
    </div>
);
export default UpTime;
