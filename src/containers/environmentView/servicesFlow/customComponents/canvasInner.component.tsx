import styled from 'styled-components';
import { ICanvasInnerDefaultProps, REACT_FLOW_CHART } from '@mrblenny/react-flow-chart';
import React from 'react';

const CanvasInner = styled.div<ICanvasInnerDefaultProps>`
    position: relative;
    outline: 0px dashed rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
` as any;

// eslint-disable-next-line react/display-name
export default (props: ICanvasInnerDefaultProps) => <CanvasInner {...props}></CanvasInner>;
