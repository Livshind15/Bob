import React from 'react';
import './serviceInfo.scss';
import ServiceDescription from './serviceDescription/serviceDescription.component';

const ServiceInfo = () => {
    return (
        <div className={'serviceInfo-container'}>
            <div className={'information-container'}>
                <ServiceDescription />
            </div>
            <div className={'settings-container'}></div>
        </div>
    );
};

export default ServiceInfo;
