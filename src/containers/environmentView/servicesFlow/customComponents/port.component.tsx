import styled from 'styled-components';
import { IPortDefaultProps } from '@mrblenny/react-flow-chart';
import React from 'react';

const PortDefaultOuter = styled.div`
    background-color: #f8b84e;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 70% 0 70% 0;
    cursor: default;
    cursor: pointer;
    box-shadow: 0 2px 8px 0 #f8b84e;
`;

const NodePort = (props: IPortDefaultProps) => <PortDefaultOuter />;
export default NodePort;
