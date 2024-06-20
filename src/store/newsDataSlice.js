import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

export const newsDataSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    

      insertNewsData: (state, action) => {
        state.value = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { insertNewsData } = newsDataSlice.actions

export default newsDataSlice.reducer