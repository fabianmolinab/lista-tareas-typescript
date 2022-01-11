import styled from 'styled-components'
import { Task } from '../interfaces/Task.interface'
import { TaskCard } from './TaskCard'

interface Props {
  tasks: Task;
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <ContenedorTask>
      <TaskCard tasks={tasks} description={'Fabian es lindo'} />
      <TaskCard
        tasks={tasks}
        description={
          'Fabian sabe lo quiere, para donde va y con quien no se deja intimdar por cualquier marrano y ni ante cualquier circuntancia vamos con todo bebes'
        }
      />
      <TaskCard tasks={tasks} />
      <TaskCard tasks={tasks} />
      <TaskCard tasks={tasks} />
    </ContenedorTask>
  )
}

const ContenedorTask = styled.div`
  width: 65%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
