import { Task } from '../interfaces/Task.interface'

interface Props {
  task: Task;
}

export const TaskCard = ({ task }: Props) => {
  return (
    <>
      <h2>{task.title}</h2>
    </>
  )
}
