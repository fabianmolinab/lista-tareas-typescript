import styled from 'styled-components'
import { colors } from '../const/colors'
import { Button } from './TaskCard'

export const Form = () => {
  const handleSubmit: (e: any) => any = function (e) {
    e.preventDefault()
  }
  return (
    <FormStyle onSubmit={handleSubmit}>
      <InputTitle
        type="text"
        placeholder="Title"
        name="title"
        autoComplete="off"
      />
      <TextArea placeholder="Add note" autoComplete="off" />
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
