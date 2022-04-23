import { ChangeEvent, KeyboardEvent } from 'react'
// Tipo de dato de los eventos del input y text area
export type HandleInputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

// Tipo de dato del evento submit
export type HandleSubmitChange = ChangeEvent<HTMLFormElement>;

export type HandleEnterPress = KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>;
