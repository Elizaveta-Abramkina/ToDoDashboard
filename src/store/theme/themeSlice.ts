import {createSlice, PayloadAction} from "@reduxjs/toolkit"


const initialState = {theme: 'light'}

export const tasksSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      changeTheme: (themes, action: PayloadAction<string>) => {
        themes.theme = action.payload
      }
    }
  }
)

export const {changeTheme} = tasksSlice.actions
export default tasksSlice.reducer
