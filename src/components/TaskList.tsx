import styled from 'styled-components'
import { Task } from '../interfaces/Task.interface'
import { TaskCard } from './TaskCard'
import Mansory from 'react-masonry-css'

interface Props {
  tasks: Task;
}

export const TaskList = ({ tasks }: Props) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }
  return (
    <Mansory
      breakpointCols={breakpointColumnsObj}
      className="contenedor-grid"
      columnClassName="contenedor-grid-columns"
    >
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
    </Mansory>
  )
}
