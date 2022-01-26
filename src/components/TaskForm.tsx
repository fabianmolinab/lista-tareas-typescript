import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../const/colors'
import { Task } from '../interfaces/Task.interface'
import { Form } from './Form'

interface Props {
  aNewTask: (task: Task) => void;
}

export interface Tareas {
  title: string;
  description: string;
}

export const TaskForm = ({ aNewTask }: Props) => {
  // Hook que actualiza el state del input y textarea
  const [task, useTask] = useState<Tareas>({
    title: '',
    description: ''
  })

  return (
    <DivContenedor>
      <Form task={task} useTask={useTask} aNewTask={aNewTask} />
    </DivContenedor>
  )
}

const DivContenedor = styled.div`
  display: block;
  width: 35%;
  max-height: 200px;
  background-color: ${colors.background1};
  border-radius: 6px;
  box-shadow: rgb(15 17 21 / 25%) 0px 4px 6px, rgb(15 17 21 / 10%) 0px 5px 7px;
  margin-right: 20px;
  padding: 15px;
`
