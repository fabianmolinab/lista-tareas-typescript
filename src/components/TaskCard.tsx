import styled, { css } from 'styled-components'
import { colors } from '../const/colors'
import { Task } from '../interfaces/Task.interface'

interface Props {
  tasks: Task;
}

export const TaskCard = ({ tasks }: Props) => {
  return (
    <DivCard>
      <h2>{tasks.title}</h2>
      <p> {tasks.description}</p>
      <Button>Delete</Button>
    </DivCard>
  )
}

// Styles---------------------
export const DivCard = styled.div`
  background-color: ${colors.background1};
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: rgb(15 17 21 / 25%) 0px 4px 6px, rgb(15 17 21 / 10%) 0px 5px 7px;
`

export const Button = styled.button`
  background-color: ${colors.orange};
  border: 1.5px solid ${colors.orange};
  border-radius: 6px;
  color: ${colors.background1};
  cursor: pointer;
  font-size: 1em;
  padding: 5px 15px;
  margin-top: 10px;

  &:hover {
    font-weight: 700;
  }

  ${(props) =>
    props.send &&
    css`
      background-color: ${colors.frost0};
      border: 1.5px solid ${colors.frost0};
    `}
`
