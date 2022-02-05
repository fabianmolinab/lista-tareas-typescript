import styled, { css } from 'styled-components'
import { colors } from '../const/colors'
import { Task } from '../interfaces/Task.interface'

interface Props {
  tasks: Task;
  setTasks: (tasks: Task) => void;
  deleteTask: (id: number) => void;
}

export const TaskCard = ({ tasks, setTasks, deleteTask }: Props) => {
  return (
    <DivCard>
      <h2>{tasks.title}</h2>
      <div> {tasks.description}</div>
      <Button onClick={() => deleteTask(tasks.id)}>Delete</Button>
    </DivCard>
  )
}

// Styles---------------------
export const DivCard = styled.div`
  background-color: ${colors.background1};
  border-radius: 6px;
  padding: 15px;
  max-height: 420px;
  box-shadow: rgb(15 17 21 / 25%) 0px 4px 6px, rgb(15 17 21 / 10%) 0px 5px 7px;

  h2 {
    margin-bottom: 5px;
  }

  div {
    overflow: auto;
    text-overflow: ellipsis;
    max-height: 300px;
  }
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
`
