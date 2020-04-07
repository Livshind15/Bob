import React, { useState, useCallback, useRef } from 'react';

import EditButton from '../../components/editButton/editButton.component';
import IncomingTraffic from '../../components/monitorOverview/monitor/incomingTraffic/incomingTraffic.monitor.component';
import UpTime from '../../components/monitorOverview/monitor/uptime/uptime.monitor.component';
import MonitorOverview from '../../components/monitorOverview/monitorOverview.component';
import UsersView from '../../components/usersView/usersView.component';
import ActionDropdown from './actionDropdown/actionDropdown.component';
import { Environment } from './environment.interface';

import { ReactComponent as ThreeDots } from './assets/threeDots.svg';

import './environmentPreview.scss';
import Metadata from './metadata/metadata.components';

interface EnvironmentPreviewProps {
    environmentFetch?: (environmentName: string) => Promise<Environment>;
    environmentName?: string;
    environment?: Environment;
    loading?: boolean;
}

const defaultEnvironmentFetch = (environmentsName: string): Promise<Environment> => {
    throw new Error('not implemented yet');
};

const environmentFetch = ({
    environment,
    environmentName,
    environmentFetch,
}: EnvironmentPreviewProps): Promise<Environment> => {
    if (environment) return Promise.resolve(environment);
    if (!environmentName) throw new Error('Required environment name for fetch environment info');
    if (environmentFetch) return environmentFetch(environmentName);
    else return defaultEnvironmentFetch(environmentName);
};

const EnvironmentPreview: React.FC<EnvironmentPreviewProps> = ({ environment, loading }: EnvironmentPreviewProps) => {
    const [edit, setEdit] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(() => (): null => null);
    const threeDotsRef = useRef<HTMLDivElement>(null);

    return (
        <div className={'environmentPreview-container'}>
            <div className={'header-container'}>
                <div className={'titles-container'}>
                    {!edit ? (
                        <p className={'title'}>{environment?.environmentName}</p>
                    ) : (
                        <input placeholder={environment?.environmentName} className={'title input'} />
                    )}
                    <div className={'metadata-container'}>
                        <Metadata creationTime={environment?.creationTime || ''} />
                    </div>
                </div>
                <div ref={threeDotsRef} className={'action-container'}>
                    <div className={'dot-wrapper'} ref={threeDotsRef} onClick={toggleDropdown}>
                        <ThreeDots className={'threeDots'} />
                    </div>
                    <ActionDropdown
                        ignoreElementRefs={[threeDotsRef]}
                        toggleEvent={(toggle): void => setToggleDropdown(() => toggle)}
                    />
                </div>
            </div>
            <div className={'content-container'}>
                <MonitorOverview
                    monitors={environment?.monitors || []}
                    components={[
                        { type: 'IncomingTraffic', component: IncomingTraffic },
                        { type: 'Uptime', component: UpTime },
                    ]}
                />
                <div className={'description-container'}>
                    {!edit ? (
                        <p className={'description'}>{environment?.environmentDescription}</p>
                    ) : (
                        <input placeholder={environment?.environmentDescription} className={'description input'} />
                    )}
                </div>
                <div className={'info-container'} />
            </div>
            <div className={'footer-container'}>
                <UsersView members={environment?.members} />
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

export default (props: EnvironmentPreviewProps): JSX.Element => {
    const [environment, setEnvironment] = useState({});
    const [loading, setLoading] = useState(true);
    useCallback(async () => {
        setEnvironment(await environmentFetch(props));
        setLoading(false);
    }, [])();
    return <EnvironmentPreview loading={loading} environment={environment} />;
};
