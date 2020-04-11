import styled from 'styled-components';
import React from 'react';
import { INodeDefaultProps } from '@mrblenny/react-flow-chart';

const CircleNode = styled.div`
    position: absolute;
    max-width: 8vmin;
    max-height: 8vmin;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 50%;
    transition: 0.3s ease box-shadow, 0.3s ease margin-top;
    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
`;

// eslint-disable-next-line react/display-name
const Node = React.forwardRef(({ children, ...otherProps }: INodeDefaultProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <CircleNode ref={ref} {...otherProps}>
            {children}
        </CircleNode>
    );
});

export default Node;
