import styled from 'styled-components'

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
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1b9cfc;
  height: 60px;
`
const Title = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
`
