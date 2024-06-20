import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(sessionStorage.getItem('news')) || [],
}

export const postsDataSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    

      insertPostsData: (state, action) => {
        state.value = action.payload;
      }
  },
})

// Action creators are generated for each case reducer function
export const { insertPostsData } = postsDataSlice.actions

export default postsDataSlice.reducer