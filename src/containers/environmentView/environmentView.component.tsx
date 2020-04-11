import React from 'react';

import './environmentView.scss';
import Menu from './menu/menu.component';

import { ReactComponent as Service } from './menu/assets/services.svg';
import { ReactComponent as Account } from './menu/assets/account.svg';
import { ReactComponent as Settings } from './menu/assets/settings.svg';
import Catalog from './catalog/catalog.component';
import ServicesFlow from './servicesFlow/servicesFlow.component';
import ServiceInfo from './serviceInfo/serviceinfo.component';
import serviceMock from '../../mocks/services.mocks.json';

const EnvironmentView = () => (
    <div className={'environment-view'}>
        <div className={'menu'}>
            <Menu options={[{ icon: Service }, { icon: Account }, { icon: Settings }]} />
        </div>
        <div className={'catalog'}>
            <Catalog services={serviceMock} />
        </div>
        <div className={'services'}>
            <ServicesFlow />
        </div>
        <div className={'service-info'}>
            <ServiceInfo />
        </div>
    </div>
);

export default EnvironmentView;
