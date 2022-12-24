import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../features/dataSlice/dataSlice'

export const store = configureStore({
  reducer: {
    mydata:dataSlice
  },
})