import React from 'react';
import { MonitorsType } from '../../monitorOverview.component';

import './incomingTraffic.scss';
import { ReactComponent as Download } from './download.svg';

const IncomingTraffic: React.FC<{ monitor: MonitorsType }> = ({ monitor }: { monitor: MonitorsType }) => (
    <div className={'incomingTraffic-container'}>
        <div className={'img-container'}>
            <Download className={'img'} />
        </div>
        <div className={'text-container'}>
            <div className={'incomingTraffic-title-container'}>
                <h3 className={'incomingTraffic-title'}>Incoming Traffic</h3>
            </div>
            <div className={'incomingTraffic-value-container'}>
                <h3 className={'incomingTraffic-value'}>{monitor.value}</h3>
                <p className={'incomingTraffic-unit'}>MB/s</p>
            </div>
        </div>
    </div>
);
export default IncomingTraffic;
