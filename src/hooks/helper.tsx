import React from 'react';
import HelpModal from "../components/HelpModal/HelpModal";




interface IProps {
    component: JSX.Element,
    description: string,
    componentName: string
}


const helper = () => {

        // const {component, description, componentName} = props
        // const ref = useRef() as RefObject<HTMLDivElement>
        // console.log(ref.current?.clientHeight)
        // console.log(ref.current?.clientWidth)

        // const study = localStorage.getItem(componentName)

        // if (study) {
        //     return <>{component}</>
        // }
    const helpCards = document.createElement('div')
    helpCards.innerHTML = "<HelpModal description='dfd' componentName='sdsd'/>"
    const collection =  document.querySelectorAll('.calendar-mini')
    console.log(collection)
    console.log(helpCards)

    }
;

export default helper;
