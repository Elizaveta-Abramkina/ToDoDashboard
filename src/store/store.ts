import {configureStore} from "@reduxjs/toolkit";
import tasksReducer, {ITask} from "./tasks/taskSlice";
import themeReducer from "./theme/themeSlice";

export interface IStore {
  tasks: ITask[],
  themes: { theme: string }
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
