import React from 'react';
import AddEnvironment from '../addEnvironment/addEnvironment.component';
import Card from '../../components/card/card.component';
import EnvironmentPreview from '../environmentPreview/environmentPreview.components';

import './environmentsView.scss';

const EnvironmentsView: React.FC = () => (
    <div className={'environmentsView-container'}>
        <div className={'content'}>
            <div className={'title-container'}>
                <p className={'title'}>Environments Dashboard</p>
            </div>
            <div className={'view-container'}>
                <Card height={'15em'} width={'13em'}>
                    <AddEnvironment />
                </Card>
                <Card height={'15em'} width={'13em'}>
                    <EnvironmentPreview />
                </Card>
                <Card height={'15em'} width={'13em'}>
                    <EnvironmentPreview />
                </Card>
            </div>
        </div>
    </div>
);
export default EnvironmentsView;
