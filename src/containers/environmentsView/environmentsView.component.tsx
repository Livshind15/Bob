import React from 'react';
import AddEnvironment from '../../components/addEnvironment/addEnvironment.component';
import Card from '../../components/card/card.component';
import EnvironmentPreview from '../environmentPreview/environmentPreview.components';

import './environmentsView.scss';

import EnvironmentsMocks from '../../mocks/environments.mocks.json';
import { Environment } from '../environmentPreview/environment.interface';

const RenderEnvironmentsPreviews = (environments: Environment[]): JSX.Element[] => {
    return environments.map((environment: Environment, key: number) => {
        return (
            <Card key={key} height={'16em'} width={'13em'}>
                <EnvironmentPreview environment={environment} />
            </Card>
        );
    });
};

const EnvironmentsView: React.FC = () => {
    return (
        <div className={'environmentsView-container'}>
            <div className={'content'}>
                <div className={'title-container'}>
                    <p className={'title'}>Environments Dashboard</p>
                </div>
                <div className={'view-container'}>
                    <Card height={'16em'} width={'13em'}>
                        <AddEnvironment />
                    </Card>
                    {RenderEnvironmentsPreviews(EnvironmentsMocks as Environment[])}
                </div>
            </div>
        </div>
    );
};

export default EnvironmentsView;
