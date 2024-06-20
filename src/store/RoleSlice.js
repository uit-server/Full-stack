import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const RoleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    

      changeRole: (state,action) => {
        state.value = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { changeRole } = RoleSlice.actions

export default RoleSlice.reducer