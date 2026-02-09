import { useId, useRef, useState } from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

import DeleteIcon from '../icons/DeleteIcon'
import EditIcon from '../icons/EditIcon'
import MoveIcon from '../icons/MoveIcon'
import type { ITodo } from '../types/models'
import IconButton from './IconButton'

export type ITodoItemProps = {
  todo: ITodo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, text: string) => void
}

function TodoItem({ todo, onToggle, onDelete, onEdit }: ITodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(todo.text)

  const inputRef = useRef<HTMLInputElement>(null)
  const id = useId()

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: todo.id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 10 : 'auto',
  }

  const onEditHandler = () => {
    setIsEditing(true)
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }

  const onSave = () => {
    onEdit(todo.id, input)
    setIsEditing(false)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center justify-between gap-2 p-2 border border-gray-300 rounded-lg bg-white shadow-sm w-full min-w-0 focus:outline-none [&+div]:mt-2"
    >
      <IconButton
        className="cursor-move p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        type="button"
        aria-label="Move task"
        {...listeners}
      >
        <MoveIcon />
      </IconButton>

      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          className="flex-grow min-w-0 border border-gray-300 rounded px-2 mr-auto focus:outline-none focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          name={id}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSave()
            }
          }}
          onBlur={onSave}
        />
      ) : (
        <p
          className={`cursor-pointer mr-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${todo.completed ? 'line-through text-gray-400' : ''}`}
          tabIndex={0}
          onClick={() => onToggle(todo.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onToggle(todo.id)
            }
          }}
        >
          {todo.text}
        </p>
      )}

      <IconButton
        className="text-blue-500 hover:text-blue-700"
        aria-label="Edit task"
        onClick={onEditHandler}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        className="text-red-500 hover:text-red-700"
        aria-label="Delete task"
        onClick={() => onDelete(todo.id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default TodoItem
