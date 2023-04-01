import React from 'react'
import styled from 'styled-components'
import { UilBrightness, UilMoon } from '@iconscout/react-unicons'

function Header({ theme, toggleTheme }) {
  return (
    <Container>
      <h1>AutoGarage</h1>
      <Theme onClick={toggleTheme}>
        {theme === 'dark' ? (
          <>
            <UilBrightness size={20} />
            <span>Ligh Mode</span>
          </>
        ) : (
          <>
            <UilMoon size={18} />
            <span>Dark Mode</span>
          </>
        )}
      </Theme>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  box-shadow: ${(props) => props.theme.boxShadow};
  h1 {
    font-size: 1rem;
    font-weight: 800;
  }
  @media screen and (min-width: 768px) {
    padding: 2rem 5rem;
  }
`
const Theme = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  color: ${(props) => props.theme.text};
  span {
    font-weight: 600;
    font-size: 0.875rem;
  }
`
