import styled from 'styled-components'
import { colors } from '../const/colors'

interface Props {
  title: string;
}

export const Nav = ({ title }: Props) => {
  return (
    <NavStyle>
      <div>
        <Title href="/">{title}</Title>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  margin: 0 auto;
  background-color: ${colors.backgroud0};
  height: 60px;
`
const Title = styled.a`
  color: ${colors.white0};
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
`
