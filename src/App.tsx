import { useState } from 'react'
import styled from 'styled-components'
import { Nav } from './components/Nav'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Task } from './interfaces/Task.interface'

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  // Funcion para añadir una nueva tarea
  const aNewTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  // Funcion para eliminar una tarea
  const deleteTask = (id: number) => {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== id) {
          return task
        }
      })
    )
  }
  return (
    <>
      <Nav />
      <Container>
        <TaskForm aNewTask={aNewTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </Container>
    </>
  )
}

const Container = styled.main`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
    margin: 0 10px;
  }
`
