import { Task } from '../interfaces/Task.interface'
import { TaskCard } from './TaskCard'

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </>
  )
}
