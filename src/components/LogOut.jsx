import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logoutUser } from '../firebase/services'

function LogOut() {
  const handleClick = () => {
    logoutUser()
  }
  return (
    <Btn onClick={handleClick} to='/'>
      Salir
    </Btn>
  )
}

export default LogOut

const Btn = styled(Link)`
  padding: 10px 20px;
  border-radius: 9px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  background-color: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    box-shadow: none;
  }
`
