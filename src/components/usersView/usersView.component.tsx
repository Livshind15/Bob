import React, { useState, useEffect } from 'react';
import './usersView.scss';
import User, { ColorType } from './user/user.component';
import { userBordersColors } from './user/user.const';


const getColor = (colors: ColorType[]) => {
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
    colors.splice(index, 1);
    return color;
}

const UsersView = () => {
    const [users, setUsers] = useState<JSX.Element[]>();
    useEffect(() => {
        let colors: ColorType[] = userBordersColors.slice(); 
        const avatar = [0, 1, 2, 3, 4].map((i) => {
            return (<User color={getColor(colors)} key={i} />)
        })
        setUsers(avatar);
    }, []);
    return (
        <div className={"usersView-container"}>{users}</div>
    )
}


export default UsersView;
