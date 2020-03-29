import React, { useState } from 'react';
import './usersView.scss';
import User from './user/user.component';
import { userBordersColors } from './user/user.const';

const UsersView = () => {
    let colors = userBordersColors.slice();

    const getColor = () => {
        const index = Math.floor(Math.random() * colors.length); 
        const color = colors[index];
        colors.splice(index, 1);
        return color;
    }

    return (
        <div className={"usersView-container"}>
            {[0,1,2,3,4].map(()=> {
                
               return <User color ={getColor()} />
            })}
            
        </div>
    )
}


export default UsersView;
