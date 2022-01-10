import styled from 'styled-components'
import { Task } from '../interfaces/Task.interface'
import { TaskCard } from './TaskCard'

interface Props {
  tasks: Task;
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <ContenedorTask>
      <TaskCard tasks={tasks} />
      <TaskCard tasks={tasks} />
      <TaskCard tasks={tasks} />
      <TaskCard tasks={tasks} />
    </ContenedorTask>
  )
}

const ContenedorTask = styled.div`
  width: 65%;
`
