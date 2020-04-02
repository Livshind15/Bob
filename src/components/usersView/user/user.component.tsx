import React, { FC } from 'react';
import Tooltip from 'rc-tooltip';
import './user.scss';
import './tooltip.scss';
import avatar from './avatar.jpg';
export interface ColorType {
    angle: string,
    color1: string,
    percentColorOne: string,
    color2: string,
    percentColorTwo: string,
}

export interface ColorProps {
    color: ColorType,
    children?: React.ReactNode,

}

const tooltip = () =>
    <div className={'tooltip-container'}>
        <img className={'img'} src={avatar} alt='avatar'/>
        <p className={'title'}>Tony Stark</p>
    </div>


const User: FC<ColorProps> = ({ color, children }) =>

    <Tooltip mouseEnterDelay={0.1} mouseLeaveDelay={0} placement="bottom" trigger={['hover']} overlay={tooltip}>
        <div className={"user-border"}>
            <div className={"user"} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),linear-gradient(${color.angle}, ${color.color1} ${color.percentColorOne}, ${color.color2} ${color.percentColorTwo})` }}>
                <p className={"user-letter"} style={{ background: `linear-gradient(${color.angle}, ${color.color1} ${color.percentColorOne}, ${color.color2} ${color.percentColorTwo})` }}>{children}</p>
            </div>
        </div>

    </Tooltip>



export default User;
