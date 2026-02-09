import { useState } from 'react'

type CreateTodoProps = {
  onCreate: (text: string) => void
}

const CreateTodo = ({ onCreate }: CreateTodoProps) => {
  const [value, setValue] = useState('')

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form className="flex w-full mb-4" onSubmit={onSubmit}>
      <input
        className="flex-grow border-2 border-blue-500 rounded-l px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
        autoComplete="off"
        type="text"
        value={value}
        placeholder="Add a task..."
        name="task"
        onChange={onInputChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 cursor-pointer"
        type="submit"
      >
        Create
      </button>
    </form>
  )
}

export default CreateTodo
