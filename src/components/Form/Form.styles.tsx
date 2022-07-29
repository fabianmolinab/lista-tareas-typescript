import styled from 'styled-components'
import { colors } from '../../const/colors'
import { device } from '../../const/device'

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputTitle = styled.input`
  background: transparent;
  border: transparent;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white0};
  margin-bottom: 8px;
  outline: none;
`
export const TextArea = styled.textarea`
  appearance: none;
  background: transparent;
  border: transparent;
  color: ${colors.white0};
  cursor: text;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  height: 90px;
  overflow: auto;
  outline: none;
  resize: none;

  @media ${device.mobileL} {
    height: auto;
  }
`

export const ButtonStyle = styled.button`
  background-color: ${colors.frost0};
  border: 1.5px solid ${colors.frost0};
  border-radius: 6px;
  color: ${colors.background1};
  cursor: pointer;
  font-size: 1em;
  padding: 5px 15px;
  margin-top: 10px;

  &:hover {
    font-weight: 700;
  }

  @media ${device.mobileL} {
    display: none;
  }
`
