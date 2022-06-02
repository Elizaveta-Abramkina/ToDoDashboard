import React, {useState} from 'react';
import './Dashbourd.scss'
import {useDrop} from "react-dnd";
import DraggableBox from "../../components/ DraggableBox/DraggableBox";
import CalendarMini from '../../components/calendarMini/CalendarMini';
import {ItemTypes} from "./dragAndDrop/dragAndDrop";
import TasksList from '../../components/TasksList/TasksList';
import useHelper from "../../hooks/helper";

interface IBox {
    [key: string]: { top: number; left: number }
}

interface DragItem {
    left: number,
    top: number,
    id: string
}

const Dashboard = () => {

    const [boxes, setBoxes] = useState<IBox>({
        calendar: {top: 0, left: 0},
        tasksList: {top: 300, left: 500}
    })

    const moveBox = (id: string, left: number, top: number) => {
        setBoxes({...boxes, [id]: {top: top, left: left}})
    }

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as {
                    x: number
                    y: number
                }
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)

                moveBox(item.id, left, top)
                return undefined
            },
        }), [moveBox]
    )

    useHelper()

    return (
        <div ref={drop} className="layout">
            <DraggableBox id='tasksList' left={boxes.tasksList.left} top={boxes.tasksList.top}>
                <TasksList/>
            </DraggableBox>
            <DraggableBox id='calendar' left={boxes.calendar.left} top={boxes.calendar.top}>
                <CalendarMini/>
            </DraggableBox>
        </div>
    );
};

export default Dashboard;
