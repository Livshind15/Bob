import React from 'react';
import './service.scss';
import { ServiceType } from '../catalog.component';
import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart';

interface ServiceProps {
    service: ServiceType;
}

const Service: React.FC<ServiceProps> = ({ service }: ServiceProps) => {
    return (
        <div
            draggable={'true'}
            onDragStart={(event) => {
                event.dataTransfer.setData(
                    REACT_FLOW_CHART,
                    JSON.stringify({
                        type: 'service-top',
                        ports: {
                            port1: {
                                id: 'port1',
                                type: 'bottom',
                                properties: {},
                            },
                        },
                        properties: {
                            service: service,
                        },
                    }),
                );
            }}
            className={'service-container'}
        >
            <div className={'img-container'}>
                <img draggable="false" src={service.serviceImage} className={'img'} alt="service-img"></img>
            </div>
            <div className={'label-container'}>
                <p className={'label'}>{service.serviceName}</p>
            </div>
        </div>
    );
};

export default Service;
