import { useState } from 'react'
import styled from 'styled-components'
import { Nav } from './components/Nav'
import { TaskList } from './components/TaskList'
import { Task } from './interfaces/Task.interface'

interface Props {
  title: string;
  subtitle: string;
}

export const App = ({ title, subtitle }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Fabian es lindo',
      description: 'Lear React',
      completed: false
    }
  ])

  return (
    <div>
      <Nav title={title} />
      <Conteiner>
        <TaskList tasks={tasks} />
      </Conteiner>
    </div>
  )
}

const Conteiner = styled.main``
