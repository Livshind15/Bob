import React from 'react';

import './serviceView.scss';
import Card from '../../../../components/card/card.component';
import { ServiceType } from '../catalog.component';
import Service from '../service/service.component';

interface ServiceViewProps {
    services: ServiceType[];
}

const ServiceView: React.FC<ServiceViewProps> = ({ services }: ServiceViewProps) => {
    return (
        <div className={'services-continuer'}>
            <div className={'services-view'}>
                {services.map((service, key) => (
                    <Card className={'service-card'} height={'15vmin'} key={key} width={'15vmin'}>
                        <Service service={service}></Service>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ServiceView;
