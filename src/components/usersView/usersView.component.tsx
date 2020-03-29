import React, { useState, useEffect } from 'react';
import './usersView.scss';
import User from './user/user.component';
import { userBordersColors } from './user/user.const';

const UsersView = () => {
    let colors = userBordersColors.slice();
    const [users , setUsers] = useState< JSX.Element[]>();

    useEffect(()=>{
        const t = [0,1,2,3,4].map((i)=> {            
            return (<User color ={getColor()} key={i} />) 
         })
         setUsers(t);
    },[]);
    console.log(users);
    
    const getColor = () => {
        const index = Math.floor(Math.random() * colors.length); 
        const color = colors[index];
        colors.splice(index, 1);
        return color;
    }

    return (
        <div className={"usersView-container"}>
            {users}
            
        </div>
    )
}


export default UsersView;
