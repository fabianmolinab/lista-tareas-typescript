import styled from 'styled-components'
import { colors } from '../const/colors'

export const Nav = () => {
  return (
    <NavStyle>
      <Title>App List </Title>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  margin: 0 auto;
  background-color: ${colors.backgroud0};
  height: 60px;
`
const Title = styled.h1`
  color: ${colors.white0};
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
`
