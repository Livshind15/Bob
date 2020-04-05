import React from 'react';
import classnames from 'classnames';

import './card.scss';

interface CardProps {
    children?: React.ReactNode;
    className?: string;
    width: string;
    height: string;
}

const Card: React.FC<CardProps> = ({ children, width, height, className }: CardProps) => (
    <div style={{ width, height }} className={classnames('card', className || '')}>
        {children}
    </div>
);

export default Card;
