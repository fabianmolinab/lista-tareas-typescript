import styled from 'styled-components'
import { colors } from '../const/colors'
import { Form } from './Form'

export const TaskForm = () => {
  return (
    <DivContenedor>
      <Form />
    </DivContenedor>
  )
}

const DivContenedor = styled.div`
  width: 35%;
  background-color: ${colors.background1};
  border-radius: 6px;
  box-shadow: rgb(15 17 21 / 25%) 0px 4px 6px, rgb(15 17 21 / 10%) 0px 5px 7px;

  margin-right: 20px;
  padding: 15px;
`
