import { useState } from 'react'
import { Task } from '../../interfaces/Task.interface'
import { initialStateForm, Tareas } from '../TaskForm'
import { HandleInputChange, HandleSubmitChange } from './Form.interfaces'
import { ButtonStyle, FormStyle, InputTitle, TextArea } from './Form.styles'

interface Props {
  task: Tareas;
  useTask: (task: Tareas) => void;
  aNewTask: (task: Task) => void;
}
const getCureentTimestamp = (): number => new Date().getTime()

export const Form = ({ task, useTask, aNewTask }: Props) => {
  const handleSubmit = (e: HandleSubmitChange) => {
    e.preventDefault()

    if (task.title && task.description !== '') {
      aNewTask({
        id: getCureentTimestamp(),
        title: task.title,
        description: task.description,
        completed: false
      })
      useTask(initialStateForm)
    }
  }

  const handleChange = ({ target }: HandleInputChange) => {
    useTask({
      ...task,
      [target.name]: target.value
    })
  }

  // Estado para cambiar el estilo del formulario
  interface FormState {
    validation: String;
  }

  const [formStyle, setFormStyle] = useState<FormState>({
    validation: 'false'
  })
  // ------------------------------------------------------

  const handleFocus = (): void => {
    if (formStyle.validation === 'false') {
      setFormStyle({
        ...formStyle,
        validation: 'true'
      })
    } else if (formStyle.validation === 'true') {
      setFormStyle({
        ...formStyle,
        validation: 'false'
      })
    }
  }

  console.log(formStyle.validation)
  return (
    <FormStyle onSubmit={handleSubmit} onFocus={handleFocus}>
      <InputTitle
        type="text"
        placeholder="Title"
        name="title"
        autoComplete="off"
        value={task.title}
        onChange={handleChange}
        formStyle={formStyle.validation}
      />

      <button onClick={handleFocus}>-</button>

      <TextArea
        placeholder="Add note"
        autoComplete="off"
        name="description"
        value={task.description}
        onChange={handleChange}
      />

      <ButtonStyle formStyle={formStyle.validation}>Save</ButtonStyle>
    </FormStyle>
  )
}
