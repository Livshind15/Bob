import React, {  FC } from 'react';
import './user.scss';

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
const User: FC<ColorProps> = ({ color ,children}) =>
    <div className={"user-border"}>
        <div className={"user"} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),linear-gradient(${color.angle}, ${color.color1} ${color.percentColorOne}, ${color.color2} ${color.percentColorTwo})` }}>
            <p className={"user-letter"} style={{ background: `linear-gradient(${color.angle}, ${color.color1} ${color.percentColorOne}, ${color.color2} ${color.percentColorTwo})` }}>{children}</p>
        </div>
    </div>




export default User;
