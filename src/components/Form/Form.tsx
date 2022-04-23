import { ChangeEvent, useState } from 'react'
import { Task } from '../../interfaces/Task.interface'
import { initialStateForm, Tareas } from '../TaskForm'
import { HandleEnterPress, HandleInputChange, HandleSubmitChange } from './Form.interfaces'
import { ButtonStyle, FormStyle, InputTitle, TextArea } from './Form.styles'

interface Props {
  task: Tareas;
  useTask: (task: Tareas) => void;
  aNewTask: (task: Task) => void;
}
const getCureentTimestamp = (): number => new Date().getTime()

export const Form = ({ task, useTask, aNewTask }: Props) => {
  const handleSubmit = (e: HandleSubmitChange) => {
    e.preventDefault()

    if (task.description !== '') {
      aNewTask({
        id: getCureentTimestamp(),
        title: task.title,
        description: task.description,
        completed: false
      })
      useTask(initialStateForm)
    }
  }

  const handleChange = ({ target }: HandleInputChange) => {
    useTask({
      ...task,
      [target.name]: target.value
    })
  }

  const handleEnterPress = (event: HandleEnterPress):void => {
    if (task.description !== '') {
      if (event.key === 'Enter') {
        event.preventDefault()
        event.stopPropagation()
        handleSubmit(event)
        console.log(event)
      }
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit}>

      <InputTitle
        type="text"
        placeholder="Title"
        name="title"
        autoComplete="off"
        value={task.title}
        onChange={handleChange}
      />

      <TextArea
        placeholder="Add note"
        autoComplete="off"
        name="description"
        value={task.description}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
      />

      <ButtonStyle >Save</ButtonStyle>
    </FormStyle>
  )
}
