import React from 'react';

import './catalog.scss';
import CatalogSearch from './searchInput/catalogSearch.component';
import ServiceView from './servicesView/serviceView.component';

export interface ServiceType {
    serviceName: string;
    serviceImage: string;
    gitUrl: string;
    docker: {
        imageUrl: string;
        tag: string;
        repository: string;
    };
    routes: {
        subUrl: string;
        port: string;
        origin: string;
    };
}

interface CatalogProps {
    services: ServiceType[];
}

const Catalog: React.FC<CatalogProps> = ({ services }: CatalogProps) => {
    return (
        <div className={'catalog-container'}>
            <div className={'search-container'}>
                <CatalogSearch />
            </div>
            <div className={'service-catalog'}>{<ServiceView services={services}></ServiceView>}</div>
        </div>
    );
};

export default Catalog;
