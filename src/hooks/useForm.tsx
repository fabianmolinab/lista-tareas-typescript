import { ChangeEvent, useState } from 'react'

export const useForm = <T extends Object>(initialState: T) => {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues(initialState)
  }

  type HandleInputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const handleInputChange = ({ target }: HandleInputEvent) => {
    const { name, value } = target

    setValues({
      ...values,
      [name]: value
    })
  }

  return { values, handleInputChange, reset, ...values }
}
