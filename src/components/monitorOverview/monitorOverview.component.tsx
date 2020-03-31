import React, { useState, useEffect } from 'react';
import { ReactComponent as Arrow } from './arrow.svg';
import './monitorOverview.scss';
import SwipeableViews, { AxisType } from 'react-swipeable-views';
import classnames from 'classnames';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

interface MonitorOverviewProps {
    children?: React.ReactNode,
}



const MonitorOverview: React.FC<MonitorOverviewProps> = ({ children }) => {
    const tabs = React.Children.toArray(children);
    const tabsLength = React.Children.toArray(children).length;
    const [tab, setTab] = useState(0);
    const slideRenderer = ({ index, key }) => {
        return (<div className={'context-container'} key={key}>
            {tabs[mod(index, tabsLength)]}
        </div>)
    }

    return (
        <div className={"monitorOverview-container"}>
            <div className={'back-container'}>
                <Arrow onClick={() =>  setTab(tab - 1)} className={classnames("back-button")} />
            </div>
            <VirtualizeSwipeableViews slideRenderer={slideRenderer} className="swipeableViews-container" index={tab} onChangeIndex={ setTab} enableMouseEvents/>
         


            <div className={'next-container'}>
                <Arrow onClick={() =>  setTab(tab + 1)} className={classnames("next-button")} />
            </div>
        </div>)
}

export default MonitorOverview;
