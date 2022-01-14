import styled from 'styled-components'
import { Task } from '../interfaces/Task.interface'
import { TaskCard } from './TaskCard'

interface Props {
  tasks: Task;
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <ContenedorTask>
      <TaskCard tasks={tasks} description={'Vamos a ver como va todo'} />
      <TaskCard
        tasks={tasks}
        description={
          'Queremos todo lo que debemos tener para obtener las cosas que queremos'
        }
      />
      <TaskCard
        tasks={tasks}
        description={
          'Somos los mejores del mundo y debemos corresponder nuestras cosas'
        }
      />
      <TaskCard
        tasks={tasks}
        description={
          'No se por que cada uno me da error, sabemos lo que queremos pero debemos hacerlo'
        }
      />
      <TaskCard tasks={tasks} description={'Y que estas haciendo ahora?'} />
      <TaskCard tasks={tasks} />
    </ContenedorTask>
  )
}

const ContenedorTask = styled.div`
  width: 65%;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
