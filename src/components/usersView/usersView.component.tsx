import React, { useEffect, useState } from 'react';
import User, { ColorType } from './user/user.component';
import { userBordersColors } from './user/user.const';

import './usersView.scss';

const temp = ['a', 'b', 'x', 'v', 'd', 'm'];

const getColor = (colors: ColorType[]) => {
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
    colors.splice(index, 1);
    return color;
};

const UsersView = () => {
    const [users, setUsers] = useState<JSX.Element[]>();
    useEffect(() => {
        const colors: ColorType[] = userBordersColors.slice();
        const avatar = [0, 1, 2, 3].map((i) => {
            return (
                <User color={getColor(colors)} key={i}>
                    {temp[Math.floor(Math.random() * temp.length)]}
                </User>
            );
        });
        setUsers(avatar);
    }, []);
    return <div className={'usersView-container'}>{users}</div>;
};

export default UsersView;
