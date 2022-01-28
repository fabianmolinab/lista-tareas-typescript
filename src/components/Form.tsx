import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { colors } from '../const/colors'
import { Task } from '../interfaces/Task.interface'
import { Button } from './TaskCard'
import { Tareas } from './TaskForm'

interface Props {
  task: Tareas;
  useTask: (task: Tareas) => void;
  aNewTask: (task: Task) => void;
}

// Tipo de dato de los eventos del input y text area
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// Tipo de dato del evento submit
type HandleSubmitChange = ChangeEvent<HTMLFormElement>;

export const Form = ({ task, useTask, aNewTask }: Props) => {
  const handleSubmit = (e: HandleSubmitChange) => {
    e.preventDefault()

    if (task.title && task.description !== '') {
      aNewTask({
        id: uuidv4(),
        title: task.title,
        description: task.description,
        completed: false
      })
      useTask({
        title: '',
        description: ''
      })
    }
  }
  const handleChange = ({ target }: HandleInputChange) => {
    useTask({
      ...task,
      [target.name]: target.value
    })
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <InputTitle
        type="text"
        placeholder="Title"
        name="title"
        autoComplete="off"
        value={task.title}
        onChange={handleChange}
      />
      <TextArea
        placeholder="Add note"
        autoComplete="off"
        name="description"
        value={task.description}
        onChange={handleChange}
      />
      <Button send>Save</Button>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`

const InputTitle = styled.input`
  background: transparent;
  border: transparent;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white0};
  margin-bottom: 8px;
  outline: none;
`
const TextArea = styled.textarea`
  appearance: none;
  background: transparent;
  border: transparent;
  color: ${colors.white0};
  cursor: text;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  height: 90px;
  overflow: auto;
  outline: none;
  resize: none;
`
