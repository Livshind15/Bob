import React from 'react';
import { MonitorsType } from '../../monitorOverview.component';

import { ReactComponent as Pulse } from './pulse.svg';
import './uptime.scss';

const UpTime: React.FC<{ monitor: MonitorsType }> = ({ monitor }: { monitor: MonitorsType }) => (
    <div className={'uptime-container'}>
        <div className={'img-container'}>
            <Pulse className="img" />
        </div>
        <div className={'text-container'}>
            <div className={'uptime-title-container'}>
                <p className={'uptime-title'}>Uptime</p>
            </div>
            <div className={'uptime-value-container'}>
                <p className={'uptime-value'}>{`${monitor.value}%`}</p>
            </div>
        </div>
    </div>
);
export default UpTime;
