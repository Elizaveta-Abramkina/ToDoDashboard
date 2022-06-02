import React, {FC, ReactNode, RefObject, useRef} from 'react';
import icon from './../../assets/arrows/rotated-right-arrow.png'
import './HelpModal.scss'


const HelpModal: FC<ReactNode> = ({children}) => {


    const ref = useRef() as RefObject<HTMLDivElement>
    console.log(ref.current?.clientHeight)
    console.log(ref.current?.clientWidth)
    const study = localStorage.getItem('studyComplete')


    return (
        <div ref={ref} className='helper-wrapper'>
            <div className='helper'>
                <p className='helper-text'>kdfjgldgv</p>
                <img src={icon} alt="" className='helper-arrow'/>
            </div>

            {children}
        </div>
    );
};

export default HelpModal;
