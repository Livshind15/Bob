import React from 'react';
import './environmentsView.scss';
import Card from '../card/card.component';
import AddEnvironment from '../addEnvironment/addEnvironment.component';
import EnvironmentPreview from '../environmentPreview/environmentPreview.components';

const EnvironmentsView = () =>
    <div className={'environmentsView-container'}>
        <div className={'content'}>
            <div className={"title-container"}>
                <p className={'title'}>Environments Dashboard</p>
            </div>
            <div className={"view-container"}>
              <Card><AddEnvironment/></Card>
              <Card><EnvironmentPreview/></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
        </div>
    </div>
export default EnvironmentsView;
