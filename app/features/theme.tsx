import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  value: number,
  theme:boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  theme:false,
}

export const changeThemeSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeThemeFunc : (state, action: PayloadAction<any>) =>{
        state.theme = action.payload
    }
  },
})

export const { changeThemeFunc } = changeThemeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state

export default changeThemeSlice.reducer