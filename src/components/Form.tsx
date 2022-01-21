import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { colors } from '../const/colors'
import { Button } from './TaskCard'

interface Props {
  task: [];
  useTask: {};
}

// Tipo de dato de los eventos
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const Form = ({ task, useTask }: Props) => {
  const handleChange = ({ target: { name, value } }: HandleInputChange) => {
    useTask({
      ...task,
      [name]: value
    })
  }
  console.log(task)
  return (
    <FormStyle>
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
