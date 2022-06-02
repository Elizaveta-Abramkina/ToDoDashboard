import React, {  RefObject, useRef} from 'react';
import icon from './../../assets/arrows/rotated-right-arrow.png'
import './HelpModal.scss'


interface IProps {
    description: string,
    componentName: string
}
const HelpModal = ({description, componentName}:IProps) => {
    localStorage.setItem(componentName, 'true')
    return (
        <div className='helper-wrapper'>
            <div className='helper'>
                <p className='helper-text'>{description}</p>
                <img src={icon} alt="" className='helper-arrow'/>
            </div>
        </div>
    );
};

export default HelpModal;
