import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../store/store";
import {DateTime} from "luxon";

export interface TasksState {
    tasks: ITask[]
}

export interface ITask {
    id: number | null,
    task: string | null,
    done: boolean | null,
    date: string | null,
}

const initialState = [] as ITask[]

export const tasksSlice = createSlice({
        name: 'tasks',
        initialState,
        reducers: {
            addTask: (state:ITask[], action:PayloadAction<ITask>) => {
                const newTask = {
                    id: Math.random(),
                    date:DateTime.now().toLocaleString({year:'numeric', month:'short', day:'numeric'}),
                    task: action.payload.task,
                    done: false,
                }
                state.push(newTask)
            }
        }
    }
)

export const {addTask} = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks
export default tasksSlice.reducer
