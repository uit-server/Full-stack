import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import RoleReducer from './RoleSlice';
import apiDataReducer from './apiDataSlice';
import newsDataReducer from './newsDataSlice';
import postsDataReducer from './postsDataSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    role: RoleReducer,
    data: apiDataReducer,
    blog: newsDataReducer,
    post: postsDataReducer
  },
})