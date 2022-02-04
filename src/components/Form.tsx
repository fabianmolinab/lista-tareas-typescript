import { ChangeEvent, useState } from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../const/colors'
import { device } from '../const/device'
import { Task } from '../interfaces/Task.interface'
import { Button } from './TaskCard'
import { initialStateForm, Tareas } from './TaskForm'

interface Props {
  task: Tareas;
  useTask: (task: Tareas) => void;
  aNewTask: (task: Task) => void;
}

// Tipo de dato de los eventos del input y text area
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// Tipo de dato del evento submit
type HandleSubmitChange = ChangeEvent<HTMLFormElement>;

type HandleFormClick = ChangeEvent<HTMLFormElement>;

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

  const [formStyle, setFormStyle] = useState({
    validation: 'false'
  })

  const handleClickForm = () => {
    setFormStyle({
      ...formStyle,
      validation: 'true'
    })
  }
  console.log(formStyle)

  return (
    <FormStyle
      onSubmit={handleSubmit}
      onClick={handleClickForm}
      formStyle={formStyle.validation}
    >
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

  @media ${device.desktopL} {
    ${(props) =>
      props.formStyle === 'true' &&
      css`
        input {
          display: block;
        }
      `}
  }
`

const InputTitle = styled.input`
  background: transparent;
  border: transparent;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white0};
  margin-bottom: 8px;
  outline: none;

  @media ${device.desktopL} {
    display: none;
  }
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

  @media ${device.desktopL} {
    height: auto;
    outline: normal;
    overflow: normal;
  }
`
