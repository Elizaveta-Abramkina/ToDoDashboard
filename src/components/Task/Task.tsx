import React from 'react';
import './Task.scss'
import {ITask} from "../../store/tasks/taskSlice";
import CheckMark from "../../assets/icons/CheckMark";

interface IProps {
  task: ITask,
  key: number
}

const Task = ({task}: IProps) => {

  return (
    <div className='task'>
      <label className='label' htmlFor={task.id?.toString()}>
        <input className='task-input' type="checkbox" name="task" id={task.id?.toString()}/>
        <p className='task-text'>{task.task}</p>
        <CheckMark/>
      </label>
    </div>
  );

};

export default Task;
