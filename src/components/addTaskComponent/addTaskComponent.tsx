import React, {FormEvent, useState} from 'react';
import './AddTaskComponent.scss'
import {DateTime} from "luxon";
import {addTask} from "../../redux/slices/tasksSlice";
import {useAppDispatch} from "../../redux/hooks";


const AddTaskComponent = () => {

    const [text, setValue] =useState("")


    const dispatch = useAppDispatch()

    const changeInputHandler: React.ChangeEventHandler < HTMLInputElement > = (event) => {
        setValue((prev)=> `${event.target.value}` )
    }


    const setTask = (e: FormEvent)=>{
        e.preventDefault()
        const newTask = {
            task: text,
            done:false,
            date:DateTime.now().toLocaleString({year:'numeric', month:'short', day:'numeric'})
        }
        dispatch(addTask(newTask))
        setValue('')
    }


    return (
        <div>
            <form onSubmit={setTask} >
                <input type="text" className="add-task-input" id="title" value={text} name="task"
                       onChange={changeInputHandler} />
            </form>
        </div>
    );
};

export default AddTaskComponent;

