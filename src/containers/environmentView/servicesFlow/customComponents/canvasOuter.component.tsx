import styled from 'styled-components';
import { ICanvasOuterDefaultProps } from '@mrblenny/react-flow-chart';

const CanvasOuter = styled.div<ICanvasOuterDefaultProps>`
    position: relative;
    background-size: 10px 10px;
    background-color: #f7f7f7;
    background-image: linear-gradient(90deg, hsla(0, 0%, 70%, 0.2) 1px, transparent 0),
        linear-gradient(180deg, hsla(0, 0%, 70%, 0.2) 1px, transparent 0);
    background-size: 2rem 2rem;

    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export default CanvasOuter;
