import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      Desarrollado por{' '}
      <a href='https://github.com/StalinAM' target='_blank'>
        Stalin
      </a>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  display: flex;
  gap: 10px;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-weight: 200;
  color: ${(props) => props.theme.text};
  a {
    font-weight: 400;
    &:hover {
      text-decoration: underline;
    }
  }
`
