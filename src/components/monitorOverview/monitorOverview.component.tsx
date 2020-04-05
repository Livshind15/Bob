import classnames from 'classnames';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { mod } from 'react-swipeable-views-core';
import { SlideRendererCallback, virtualize } from 'react-swipeable-views-utils';

import { ReactComponent as Arrow } from './assets/arrow.svg';
import './monitorOverview.scss';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

interface MonitorOverviewProps {
    children?: React.ReactNode;
}

const MonitorOverview: React.FC<MonitorOverviewProps> = ({ children }: MonitorOverviewProps) => {
    const tabs = React.Children.toArray(children);
    const tabsLength = React.Children.toArray(children).length;
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
