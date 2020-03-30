import React from 'react';
import { ReactComponent as Back } from './back.svg';
import { ReactComponent as Next } from './next.svg';
import './monitorOverview.scss';
import UpTime from './monitor/uptime/uptime.monitor.component';


const MonitorOverview: React.FC = () =>
    <div className={"monitorOverview-container"}>
        <div className={'back-container'}>
            <Back className={"back-button"}/>
        </div>
        <div className={'context-container'}>
            <UpTime></UpTime>
        </div>
        <div className={'next-container'}><Next className={"next-button"}/></div>
    </div>
export default MonitorOverview;
