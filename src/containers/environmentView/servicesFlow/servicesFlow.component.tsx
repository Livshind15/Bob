// import React from 'react';
import { FlowChartWithState } from '@mrblenny/react-flow-chart';
// import { chartSimple } from './test';
import { Node, NodeInner, NodePort, Link, CanvasInner, CanvasOuter } from './customComponents';

import React, { useState } from 'react';
import { cloneDeep, mapValues } from 'lodash';
import { chartSimple } from './test';
import { actions, FlowChart } from '@mrblenny/react-flow-chart';

import './serviceFlow.scss';

const ServicesFlow = () => {
    const [chart, setChart] = useState(chartSimple);
    const stateActions = mapValues(actions, (func: any) => (...args: any) => {
        setChart({ ...func(...args)(chart) });
    }) as typeof actions;
    return (
        <div className={'service-flow-container'}>
            <FlowChart
                chart={chart}
                Components={{
                    Node: Node,
                    NodeInner: NodeInner,
                    Port: NodePort,
                    Link: Link,
                    CanvasInner: CanvasInner,
                    CanvasOuter: CanvasOuter,
                }}
                config={{}}
                callbacks={stateActions}
            ></FlowChart>
        </div>
    );
};

export default ServicesFlow;
