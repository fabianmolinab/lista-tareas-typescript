import styled from 'styled-components'
import { colors } from '../const/colors'
import { Button } from './TaskCard'

export const Form = () => {
  const handleSubmit: (e: any) => any = function (e) {
    e.preventDefault()
  }
  return (
    <FormStyle onSubmit={handleSubmit}>
      <InputTitle type="text" placeholder="Title" name="title" />
      <TextArea placeholder="Add note" />
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
  background: transparent;
  border: transparent;
  color: ${colors.white0};
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  outline: none;
`
