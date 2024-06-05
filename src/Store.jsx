import { configureStore } from '@reduxjs/toolkit'
import favour from './favSlice'

export const store = configureStore({
  reducer: {
    favstore: favour
  },
})