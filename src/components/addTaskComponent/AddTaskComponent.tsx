import React, {FormEvent, useState} from 'react';
import './AddTaskComponent.scss'
import {addTask} from "../../redux/slices/tasksSlice";
import {useAppDispatch} from "../../redux/hooks";
import { collection, addDoc } from "firebase/firestore";

const AddTaskComponent = () => {

    const [text, setValue] =useState("")


    const dispatch = useAppDispatch()

    const changeInputHandler: React.ChangeEventHandler < HTMLInputElement > = (event) => {
        setValue((prev)=> `${event.target.value}` )
    }

    const setTask = (e: FormEvent)=>{
        e.preventDefault()
        const newTask = {
            id: null,
            task: text,
            done: null,
            date:null
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

