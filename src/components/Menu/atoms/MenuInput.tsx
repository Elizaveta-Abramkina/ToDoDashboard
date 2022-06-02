import React, {ReactNode} from 'react';
import { Link } from 'react-router-dom';


interface IProps {
    icon: ReactNode,
    name:string,

}

const MenuInput = ({icon, name}:IProps) => {
    return (
            <div className='menu-input'>
                {icon}
                <p className='menu-text'>{name}</p>
            </div>
    );
};

export default MenuInput;
