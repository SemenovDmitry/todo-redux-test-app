import { useDispatch } from 'react-redux'

import type { IFilterType, ITodo } from '../types/models'
import TodoItem from '../components/TodoItem'
import Filters from '../components/Filters'
import DragAndDropList from '../components/DragAndDropList'
import CreateTodo from '../components/CreateTodo'
import { addTodo, toggleTodo, deleteTodo, editTodo, reorderTodos, setFilter } from '../store/todosSlice'
import { selectFilteredTodos } from '../store/todosSlice'
import { useAppSelector } from '../store'

const Home = () => {
  const filter = useAppSelector((state) => state.todos.filter)
  const filteredTodos = useAppSelector(selectFilteredTodos)
  const todos = useAppSelector((state) => state.todos.todos)

  const dispatch = useDispatch()

  const handleCreate = (text: string) => {
    dispatch(addTodo(text))
  }

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id))
  }

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (id: string, text: string) => {
    dispatch(editTodo({ id, text }))
  }

  const onFilterChange = (filter: IFilterType) => {
    dispatch(setFilter(filter))
  }

  const onListChange = (newOrder: ITodo[]) => {
    dispatch(reorderTodos(newOrder))
  }

  return (
    <div className="app-container min-h-screen flex flex-col items-center pt-3 bg-gray-100">
      <div className="content-wrapper w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">Todo List</h1>
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow p-6 mb-4">
            <CreateTodo onCreate={handleCreate} />

            {todos.length ? (
              <>
                <Filters value={filter} onChange={onFilterChange} />
                <DragAndDropList items={filteredTodos} onChange={onListChange}>
                  {filteredTodos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={handleToggle}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                    />
                  ))}
                </DragAndDropList>
              </>
            ) : (
              <p className="text-gray-500 text-center mt-4">No tasks. Add a new task!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
