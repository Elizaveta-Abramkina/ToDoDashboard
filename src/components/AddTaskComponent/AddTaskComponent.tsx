import React, {FormEvent, useState} from 'react';
import './AddTaskComponent.scss'
import {addTask} from '../../store/tasks/taskSlice';
import {useAppDispatch} from "../../store/hooks";


const AddTaskComponent = () => {

  const [text, setValue] = useState("New task...")

  const dispatch = useAppDispatch()

  const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(() => `${event.target.value}`)
  }

  const setTask = (e: FormEvent) => {
    e.preventDefault()
    const newTask = {
      id: Math.random(),
      task: text,
      done: false,
      date: null
    }

    dispatch(addTask(newTask))
    setValue('')
  }

  const handleFocus = () => {
    setValue('')
  }

  const handleBlur = () => {
    setValue('New task...')
  }

  const classText = () => (text === 'New task...' ? "add-task-input placeholder" : "add-task-input")

  return (
    <div>
      <form onSubmit={setTask}>
        <input type="text" className={classText()} id="title" value={text} name="task"
               onChange={changeInputHandler} onFocus={handleFocus} onBlur={handleBlur} autoComplete='off'/>
      </form>
    </div>
  );
};

export default AddTaskComponent;

