import {createSlice, PayloadAction} from "@reduxjs/toolkit"


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
      addTask: (tasks: ITask[], action: PayloadAction<ITask>) => {
        tasks.push(action.payload)
      }
    }
  }
)

export const {addTask} = tasksSlice.actions
export default tasksSlice.reducer
