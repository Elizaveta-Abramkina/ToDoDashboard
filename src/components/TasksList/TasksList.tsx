import React, {FormEvent, useState} from 'react';
import './TasksList.scss'
import Task from "../Task/Task";
import AddTaskComponent from "../addTaskComponent/addTaskComponent";
import {addTask, ITask} from "../../redux/slices/tasksSlice";
import {useAppDispatch, useAppSelector } from '../../redux/hooks';
import {DateTime} from "luxon";

const TasksList = () => {

    const [visible, setVisible] = useState(false)

    const tasks = useAppSelector(state =>state.tasks)

    return (
        <div className='tasks-list'>
            <div className='tasks-header'>
                <h3 className='tasks-title'>My tasks for today</h3>
                <button className="tasks-add" onClick={() => setVisible(!visible)}></button>
                {/*<button className="tasks-add" onClick={()=>{dispatch(addTask())}}></button>*/}
            </div>
            {visible ? <AddTaskComponent /> : null}

            <div>
                {tasks.map((task: ITask) =><Task  task={task.task} date={task.date} done={task.done} key={Math.random()}/>)}
            </div>
        </div>
    );
};

export default TasksList;
