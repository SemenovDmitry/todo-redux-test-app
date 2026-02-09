import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ITodo } from '../types/models'
import { generateUUID } from '../utils/uuid'

import type { IFilterType } from '../types/models'

type TodosState = {
  filter: IFilterType
  todos: ITodo[]
}

const initialState: TodosState = {
  filter: 'all',
  todos: [
    { id: generateUUID(), text: 'Example task', completed: false },
    { id: generateUUID(), text: 'Another task', completed: true },
  ],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: generateUUID(),
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.todos.find((t) => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload)
    },
    editTodo(state, action: PayloadAction<{ id: string; text: string }>) {
      const todo = state.todos.find((t) => t.id === action.payload.id)
      if (todo) todo.text = action.payload.text
    },
    reorderTodos(state, action: PayloadAction<ITodo[]>) {
      state.todos = action.payload
    },
    setTodos(state, action: PayloadAction<ITodo[]>) {
      state.todos = action.payload
    },
    setFilter(state, action: PayloadAction<IFilterType>) {
      state.filter = action.payload
    },
  },
})

export const selectFilteredTodos = (state: { todos: TodosState }) => {
  const { todos, filter } = state.todos
  if (filter === 'active') return todos.filter((todo) => !todo.completed)
  if (filter === 'completed') return todos.filter((todo) => todo.completed)
  return todos
}

export const { addTodo, toggleTodo, deleteTodo, editTodo, reorderTodos, setTodos, setFilter } =
  todosSlice.actions

export default todosSlice.reducer
