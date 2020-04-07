import classnames from 'classnames';
import React, { useState, FunctionComponent } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { mod } from 'react-swipeable-views-core';
import { SlideRendererCallback, virtualize } from 'react-swipeable-views-utils';

import { ReactComponent as Arrow } from './assets/arrow.svg';
import './monitorOverview.scss';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

interface MonitorOverviewProps {
    children?: React.ReactNode;
    monitors: MonitorsType[];
    components: ComponentsType[];
}

export interface MonitorsType {
    type: string;
    value: string;
    unit: string;
}

interface ComponentsType {
    component: FunctionComponent<{ monitor: MonitorsType }>;
    type: string;
}

const RenderChildComponents = (
    components: ComponentsType[],
    monitors: MonitorsType[],
): React.FunctionComponentElement<{ monitor: MonitorsType }>[] => {
    return components.reduce((componentsArray, component: ComponentsType) => {
        const monitor = monitors.find((monitor) => monitor.type === component.type);
        if (monitor) {
            componentsArray.push(
                React.createElement<{ monitor: MonitorsType }>(component.component, { monitor: monitor }),
            );
        }
        return componentsArray;
    }, [] as React.FunctionComponentElement<{ monitor: MonitorsType }>[]);
};

const MonitorOverview: React.FC<MonitorOverviewProps> = ({ components, monitors }: MonitorOverviewProps) => {
    const tabs = RenderChildComponents(components, monitors);
    const tabsLength = tabs.length;
    const [tab, setTab] = useState(0);
    const slideRenderer: SlideRendererCallback = ({ index, key }: { index: number; key: number }) => {
        return (
            <div className={'context-container'} key={key}>
                {tabs[mod(index, tabsLength)]}
            </div>
        );
    };
    return (
        <div className={'monitorOverview-container'}>
            <div className={'back-container'}>
                <Arrow onClick={(): void => setTab(tab - 1)} className={classnames('back-button')} />
            </div>
            <VirtualizeSwipeableViews
                slideRenderer={slideRenderer}
                className="swipeableViews-container"
                index={tab}
                onChangeIndex={setTab}
                enableMouseEvents
            />
            <div className={'next-container'}>
                <Arrow onClick={(): void => setTab(tab + 1)} className={classnames('next-button')} />
            </div>
        </div>
    );
};

export default MonitorOverview;
