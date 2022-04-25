import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../store/store";
import {DateTime} from "luxon";

export interface TasksState {
    tasks: ITask[]
}

export interface ITask {
    task: string,
    done: boolean,
    date: string,
}

const initialState = [] as ITask[]

export const tasksSlice = createSlice({
        name: 'tasks',
        initialState,
        reducers: {
            addTask: (state:ITask[], action:PayloadAction<ITask>) => {
                const newTask = {
                    date: DateTime.now().toLocaleString({year:'numeric', month:'short', day:'numeric'}),
                    task: action.payload.task,
                    done: false
                }
                state.push(newTask)
            }
        }
    }
)

export const {addTask} = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks
export default tasksSlice.reducer
