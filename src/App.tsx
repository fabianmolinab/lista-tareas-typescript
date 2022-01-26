import { useState } from 'react'
import styled from 'styled-components'
import { Nav } from './components/Nav'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Task } from './interfaces/Task.interface'

interface Props {
  title?: string;
  subtitle?: string;
}

export const App = ({ title }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([])

  // Funcion para añadir una nueva tarea
  const aNewTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  return (
    <>
      <Nav title={title} />
      <Container>
        <TaskForm aNewTask={aNewTask} />
        <TaskList tasks={tasks} />
      </Container>
    </>
  )
}
const Container = styled.main`
  display: flex;
`
