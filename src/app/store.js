import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './index'

const initialState = {};


export const store = configureStore(
  {reducer: {rootReducer}},
  initialState,
)

export default store;