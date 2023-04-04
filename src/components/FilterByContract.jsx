import React, { useState } from 'react'
import styled from 'styled-components'
import { UilAngleDown } from '@iconscout/react-unicons'
function FilterByContract({ contract, handleContract, active, setActive }) {
  const contracts = ['Todos', 'Horas', 'Mensual']
  return (
    <Container>
      <Content>
        <span>{contract ? contract : 'Filter by contract...'}</span>
        <UilAngleDown onClick={() => setActive(!active)} />
      </Content>
      <Menu show={active}>
        {contracts.map((item, index) => (
          <li key={index} onClick={() => handleContract(item.toLowerCase())}>
            {item}
          </li>
        ))}
      </Menu>
    </Container>
  )
}

export default FilterByContract

const Container = styled.div`
  width: 210px;
  position: relative;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 10px 10px 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  span {
    text-transform: capitalize;
    font-weight: 400;
  }
  svg {
    cursor: pointer;
  }
`
const Menu = styled.ul`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 10px;
  border-radius: 8px;
  width: 210px;
  top: 55px;
  background-color: ${(props) => props.theme.elements};
  li {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 8px;
    font-weight: 200;
    color: ${(props) => props.theme.text};
    &:hover {
      background-color: ${(props) => props.theme.background};
    }
  }
`
