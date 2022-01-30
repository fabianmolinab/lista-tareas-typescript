import Mansory from 'react-masonry-css'
import { Task } from '../interfaces/Task.interface'
import { TaskCard } from './TaskCard'

interface Props {
  tasks: Task[];
  setTasks: (tasks: Task) => void;
  deleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, setTasks, deleteTask }: Props) => {
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
        <TaskCard
          tasks={task}
          key={task.id}
          setTasks={setTasks}
          deleteTask={deleteTask}
        />
      ))}
    </Mansory>
  )
}
