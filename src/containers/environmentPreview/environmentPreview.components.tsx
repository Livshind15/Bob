import classnames from 'classnames';
import React, { useState } from 'react';

import EditButton from '../../components/editButton/editButton.component';
import IncomingTraffic from '../../components/monitorOverview/monitor/incomingTraffic/incomingTraffic.monitor.component';
import UpTime from '../../components/monitorOverview/monitor/uptime/uptime.monitor.component';
import MonitorOverview from '../../components/monitorOverview/monitorOverview.component';
import UsersView from '../../components/usersView/usersView.component';
import ActionDropdown from './actionDropdown/actionDropdown.component';

import { ReactComponent as Clock } from './assets/clock.svg';
import { ReactComponent as ThreeDots } from './assets/threeDots.svg';

import './environmentPreview.scss';

const EnvironmentPreview: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    return (
        <div className={'environmentPreview-container'}>
            <div className={'header-container'}>
                <div className={'titles-container'}>
                    {!edit ? (
                        <p className={'title'}>Pre-Prod</p>
                    ) : (
                        <input placeholder={'Pre-Prod'} className={'title input'} />
                    )}
                    <div className={'metadata-container'}>
                        <Clock className={'metadataIcon'} />
                        <p className={'metadata'}>5 minutes ago</p>
                    </div>
                </div>
                <div className={'action-container'}>
                    <ThreeDots className={'threeDots'} onClick={(): void => setOpen(!open)} />
                    <div className={classnames('action-dropdown', { disappear: !open })}>
                        <ActionDropdown />
                    </div>
                </div>
            </div>
            <div className={'content-container'}>
                <MonitorOverview>
                    <IncomingTraffic />
                    <UpTime />
                </MonitorOverview>
                <div className={'description-container'}>
                    {!edit ? (
                        <p className={'description'}>סביבת בדיקות</p>
                    ) : (
                        <input placeholder={'סביבת בדיקות'} className={'description input'} />
                    )}
                </div>
                <div className={'info-container'} />
            </div>
            <div className={'footer-container'}>
                <UsersView />
                <EditButton
                    onSubmit={async (): Promise<void> => {
                        await new Promise(function (resolve) {
                            setTimeout(resolve, 2000);
                        });
                        return setEdit(false);
                    }}
                    onEdit={(): Promise<void> => {
                        setEdit(true);
                        return Promise.resolve();
                    }}
                />
            </div>
        </div>
    );
};

export default EnvironmentPreview;
