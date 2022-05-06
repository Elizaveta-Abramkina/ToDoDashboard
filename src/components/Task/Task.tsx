import React from 'react';
import './Task.scss'
import {ITask} from "../../redux/slices/tasksSlice";


interface IProps {
    task: ITask,
    key: number
}

const Task = ({task}:IProps) => {

    return (
        <div className='task'>
            <label htmlFor={task.id?.toString()}>
            <p className='task-text'>{task.task}</p>
            </label>
            <input className='task-input' type="checkbox" name="task" id={task.id?.toString()}/>
        </div>
    );
};

export default Task;
