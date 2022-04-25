import React from 'react';
import './Task.scss'
import {ITask} from "../../redux/slices/tasksSlice";





const Task = ({task, done, date}:ITask) => {

    return (
        <div className='task'>
            <p className='task-text'>{task}</p>
            <input className='task-input' type="checkbox"/>
        </div>
    );
};

export default Task;
