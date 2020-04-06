import React from 'react';
import Tooltip from 'rc-tooltip';
import './user.scss';
import './tooltip.scss';
import avatar from './avatar.jpg';
export interface ColorType {
    angle: string;
    color1: string;
    percentColorOne: string;
    color2: string;
    percentColorTwo: string;
}

export interface ColorProps {
    color: ColorType;
    children?: React.ReactNode;
}

interface UserProps {
    member: {
        userName: string;
        fullName: string;
        avatarUrl: string;
    };
}

const TooltipOverlay: React.FC<UserProps> = ({ member }: UserProps) => (
    <div className={'tooltip-container'}>
        <img className={'img'} src={member.avatarUrl} alt="avatar" />
        <p className={'title'}>{member.fullName}</p>
    </div>
);

const User: React.FC<ColorProps & UserProps> = ({ color, member }: ColorProps & UserProps) => (
    <Tooltip
        mouseEnterDelay={0.1}
        mouseLeaveDelay={0}
        placement="bottom"
        trigger={['hover']}
        overlay={<TooltipOverlay member={member} />}
    >
        <div className={'user-border'}>
            <div
                className={'user'}
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),linear-gradient(${color.angle}, ${color.color1} ${color.percentColorOne}, ${color.color2} ${color.percentColorTwo})`,
                }}
            >
                <p
                    className={'user-letter'}
                    style={{
                        background: `linear-gradient(${color.angle}, ${color.color1} ${color.percentColorOne}, ${color.color2} ${color.percentColorTwo})`,
                    }}
                >
                    {member.fullName[0]}
                </p>
            </div>
        </div>
    </Tooltip>
);

export default User;
