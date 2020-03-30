import React, { useState } from 'react';
import classnames from 'classnames';
import './environmentPreview.scss';
import { ReactComponent as ThreeDots } from './threeDots.svg';
import { ReactComponent as Clock } from './clock.svg';
import UsersView from '../usersView/usersView.component';
import ActionDropdown from './actionDropdown/actionDropdown.component';
import MonitorOverview from '../monitorOverview/monitorOverview.component';

const EnvironmentPreview: React.FC = () =>
{
    const [open ,setOpen] = useState(false);
    return (
        <div className={'environmentPreview-container'}>
        <div className={'header-container'}>
            <div className={'titles-container'}>
                <p className={'title'}>Pre-Prod</p>
                <div className={'metadata-container'}>
                    <Clock className={'metadataIcon'}/>
                    <p className={'metadata'}>2 hours ago</p>
                </div>
              
            </div>
            <div className={'action-container'}>
                <ThreeDots className={'threeDots'} onClick={()=>{setOpen(!open)}}/>
                 <div className={classnames("action-dropdown",{disappear:!open})}>
                    <ActionDropdown/>
                    </div>
            </div>
        </div>
        <div className={'content-container'}>
            <MonitorOverview/>
        </div>
        <div className={'footer-container'}>
            <UsersView/>
        </div>
     </div>
    )
}
   
export default EnvironmentPreview;
