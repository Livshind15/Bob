import * as React from 'react';
import {
    generateSmartPath,
    generateRightAnglePath,
    generateCurvePath,
    ILinkDefaultProps,
} from '@mrblenny/react-flow-chart';

const Link: React.FC<ILinkDefaultProps> = ({
    config,
    link,
    startPos,
    endPos,
    fromPort,
    toPort,
    onLinkMouseEnter,
    onLinkMouseLeave,
    onLinkClick,
    isHovered,
    isSelected,
    matrix,
}: ILinkDefaultProps) => {
    const points = config.smartRouting
        ? !!toPort && !!matrix
            ? generateSmartPath(matrix, startPos, endPos, fromPort, toPort)
            : generateRightAnglePath(startPos, endPos)
        : generateCurvePath(startPos, endPos);

    return (
        <svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
            <circle r="4" cx={startPos.x} cy={startPos.y} fill="#f8b84e" />
            {/* Main line */}
            <path d={points} stroke="#D9D7DF" strokeWidth="3" fill="none" />
            {/* Thick line to make selection easier */}
            <path
                d={points}
                stroke="#D9D7DF"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
                strokeOpacity={isHovered || isSelected ? 0.1 : 0}
                onMouseEnter={() => onLinkMouseEnter({ config, linkId: link.id })}
                onMouseLeave={() => onLinkMouseLeave({ config, linkId: link.id })}
                onClick={(e) => {
                    onLinkClick({ config, linkId: link.id });
                    e.stopPropagation();
                }}
            />
            <circle r="4" cx={endPos.x} cy={endPos.y} fill="#f8b84e" />
        </svg>
    );
};

export default Link;
