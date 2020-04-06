import React, { useEffect, useState } from 'react';
import User, { ColorType } from './user/user.component';
import { userBordersColors } from './user/user.const';

import './usersView.scss';

interface UsersViewProps {
    members?: {
        userName: string;
        fullName: string;
        avatarUrl: string;
    }[];
}

const getColor = (colors: ColorType[]): ColorType => {
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
    colors.splice(index, 1);
    return color;
};

const UsersView: React.FC<UsersViewProps> = ({ members }: UsersViewProps) => {
    const [users, setUsers] = useState<JSX.Element[]>();

    useEffect(() => {
        console.log(members);
        const colors: ColorType[] = userBordersColors.slice();
        const avatar = (members || []).map((member, i) => <User color={getColor(colors)} key={i} member={member} />);
        setUsers(avatar);
    }, [members]);
    return <div className={'usersView-container'}>{users}</div>;
};

export default UsersView;
