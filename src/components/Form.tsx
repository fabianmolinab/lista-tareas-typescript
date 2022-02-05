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
    }
  }

  return (
    <FormStyle
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={() => setFormStyle({ validation: 'false' })}
    >
      <InputTitle
        type="text"
        placeholder="Title"
        name="title"
        autoComplete="off"
        value={task.title}
        onChange={handleChange}
        formStyle={formStyle.validation}
      />
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

  @media ${device.mobileL} {
    display: none;

    ${(props) =>
      props.formStyle === 'true' &&
      css`
        display: block;
      `}
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

  @media ${device.mobileL} {
    height: auto;
    min-height: 20px;
  }
`

const ButtonStyle = styled.button`
  background-color: ${colors.frost0};
  border: 1.5px solid ${colors.frost0};
  border-radius: 6px;
  color: ${colors.background1};
  cursor: pointer;
  font-size: 1em;
  padding: 5px 15px;
  margin-top: 10px;

  &:hover {
    font-weight: 700;
  }

  @media ${device.mobileL} {
    display: none;

    ${(props) =>
      props.formStyle === 'true' &&
      css`
        display: block;
      `}
  }
`
