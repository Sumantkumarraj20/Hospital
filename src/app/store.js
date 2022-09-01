import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '.'

export const store = configureStore({
  reducer: {rootReducer},
})

export default store;