import React, {useState} from 'react';
import './TasksList.scss'
import Task from "../Task/Task";
import AddTaskComponent from "../AddTaskComponent/AddTaskComponent";
import {ITask} from "../../redux/slices/tasksSlice";
import {useAppSelector } from '../../redux/hooks';

const TasksList= () => {

    const [visible, setVisible] = useState(false)
    const [date, setDate] = useState('today')

    const tasks = useAppSelector(state =>state.tasks)

    return (
        <div className='tasks-list'>
            <div className='tasks-header'>
                <h3 className='tasks-title'>My tasks for {date}</h3>
                <button className="tasks-add" onClick={() => setVisible(!visible)}></button>
                {/*<button className="tasks-add" onClick={()=>{dispatch(addTask())}}></button>*/}
            </div>
            {visible ? <AddTaskComponent /> : null}
            {tasks.map((task: ITask) =><Task  task={task} key={Math.random()}/>)}
        </div>
    );
};

export default TasksList;
