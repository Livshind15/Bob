import React, { useState } from 'react';
import { ReactComponent as Back } from './back.svg';
import { ReactComponent as Next } from './next.svg';
import './monitorOverview.scss';
import UpTime from './monitor/uptime/uptime.monitor.component';
import IncomingTraffic from './monitor/incomingTraffic/incomingTraffic.monitor.component';

interface MonitorOverviewProps {
    children?: React.ReactNode,
}

const MonitorOverview: React.FC<MonitorOverviewProps> = ({ children }) => {
    console.log(React.Children.toArray(children));
    const [tab, setTab] = useState(0);
    return (
        <div className={"monitorOverview-container"}>
            <div className={'back-container'}>
                <Back onClick={() => {
                    setTab(((tab - 1) * -1) % React.Children.toArray(children).length);
                }} className={"back-button"} />
            </div>
            <div className={'context-container'}>
                {React.Children.toArray(children)[tab]}
            </div>
            <div className={'next-container'}><Next onClick={() => {
                setTab((tab + 1) % React.Children.toArray(children).length);
            }} className={"next-button"} /></div>
        </div>)
}

export default MonitorOverview;
