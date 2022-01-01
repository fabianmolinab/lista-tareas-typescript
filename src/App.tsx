import { useState } from 'react'

interface Props {
  title: string;
  subtitle: string;
}
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'Lear React',
      completed: false
    }
  ])

  return (
    <div>
      <nav></nav>
      {tasks.map((task) => (
        <div>
          <h2>{task.title}</h2>
        </div>
      ))}
    </div>
  )
}
