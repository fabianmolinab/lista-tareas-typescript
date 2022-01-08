import { DivContenedor } from './styles/DivContenedor'

export const TaskForm = () => {
  const handleOnChange = () => {}
  const handleSubmit = () => {}
  return (
    <DivContenedor>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to task"
          name="title"
          onChange={handleOnChange}
        />
      </form>
    </DivContenedor>
  )
}
