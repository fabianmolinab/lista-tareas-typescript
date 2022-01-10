import { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Nav } from './components/Nav'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Task } from './interfaces/Task.interface'

interface Props {
  title: string;
  subtitle: string;
}

export const App = ({ title }: Props) => {
  const [tasks, setTasks] = useState<Task>({
    id: uuidv4(),
    title: 'Fabian es lindo',
    description: 'Lear React',
    completed: false
  })

  return (
    <>
      <Nav title={title} />
      <Container>
        <TaskForm />
        <TaskList tasks={tasks} />
      </Container>
    </>
  )
}
const Container = styled.main`
  display: flex;
  margin: 0 auto;
`
