import { configureStore } from '@reduxjs/toolkit'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'

import todoReducer from './todosSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
