import React from 'react';
import './card.scss';

interface CardProps {
    children?: React.ReactNode,
}

const Card: React.FC<CardProps> = ({ children }) =>
    <div className={'card'}>
        {children}
    </div>
export default Card;
