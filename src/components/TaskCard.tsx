import styled from 'styled-components'
import { Task } from '../interfaces/Task.interface'
import { DivContenedor } from './styles/DivContenedor'

interface Props {
  task: Task;
}

export const TaskCard = ({ task }: Props) => {
  return (
    <DivContenedor>
      <h2>{task.title}</h2>
      <p> {task.description}</p>
      <Button>Delete</Button>
    </DivContenedor>
  )
}

export const Button = styled.button`
  background-color: #ff4757;
  border: 1.5px solid #ff4757;
  border-radius: 6px;
  color: #ffffff;
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
