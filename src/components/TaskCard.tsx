import styled from 'styled-components'
import { colors } from '../const/colors'
import { Task } from '../interfaces/Task.interface'
import { DivContenedor } from './styles/DivContenedor'

interface Props {
  task: Task;
}

export const TaskCard = ({ task }: Props) => {
  return (
    <DivCard>
      <h2>{task.title}</h2>
      <p> {task.description}</p>
      <Button>Delete</Button>
    </DivCard>
  )
}

// Styles----------------------------

export const Button = styled.button`
  background-color: ${colors.red};
  border: 1.5px solid ${colors.red};
  border-radius: 6px;
  color: ${colors.white1};
  cursor: pointer;
  font-size: 1em;
  padding: 5px 15px;
  margin-top: 10px;

  &:hover {
    font-weight: 700;
    //border-width: medium;
    //transform: scale(1, 1.1);
  }
`
export const DivCard = styled.div`
  background-color: ${colors.background1};
  border-radius: 6px;
  padding: 15px;
  box-shadow: rgb(15 17 21 / 25%) 0px 4px 6px, rgb(15 17 21 / 10%) 0px 5px 7px;
`
