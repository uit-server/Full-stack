import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const apiDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    

      insertApiData: (state, action) => {
        state.value = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { insertApiData } = apiDataSlice.actions

export default apiDataSlice.reducer