import { INodeInnerDefaultProps } from '@mrblenny/react-flow-chart';
import React from 'react';
import styled from 'styled-components';

import test from '../../catalog/service/kong_logo.png';
import { ServiceType } from '../../catalog/catalog.component';

const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ServiceImg = styled.img`
    width: 80%;
    height: auto;
`;

const ServiceLabel = styled.p`
    text-align: center;
    font: 8pt 'Heebo';
    font-weight: 500;
    color: #c1c0c7;
`;

const NodeInner = ({ node, config }: INodeInnerDefaultProps) => {
    const service = node.properties.service as ServiceType;

    return (
        <Inner>
            <ServiceImg draggable={false} src={service.serviceImage} />
        </Inner>
    );
};

export default NodeInner;
