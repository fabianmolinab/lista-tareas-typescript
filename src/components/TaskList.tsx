import { Task } from '../interfaces/Task.interface'
import { TaskCard } from './TaskCard'
import Mansory from 'react-masonry-css'

interface Props {
  tasks: Task[];
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
      {tasks.map((task) => (
        <TaskCard tasks={task} key={task.id} />
      ))}
    </Mansory>
  )
}
