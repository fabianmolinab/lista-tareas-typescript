import { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Nav } from './components/Nav'
import { DivCont } from './components/TaskCard'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Task } from './interfaces/Task.interface'

interface Props {
  title: string;
  subtitle: string;
}

export const App = ({ title, subtitle }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      title: 'Fabian es lindo',
      description: 'Lear React',
      completed: false
    }
  ])

  return (
    <div>
      <Nav title={title} />
      <Conteiner>
        <TaskForm />
        <TaskList tasks={tasks} />
      </Conteiner>
    </div>
  )
}
// TODO Se debe hacer esta tarea los mas pronto posible
const Conteiner = styled.main`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`
