import React, { useState } from 'react'
import styled from 'styled-components'
import FormCar from './FormCar'

function AddNewCar() {
  const [active, setActive] = useState(false)
  return (
    <>
      <NewCar onClick={() => setActive(true)}>Nuevo auto</NewCar>
      <FormCar active={active} setActive={setActive} />
    </>
  )
}

export default AddNewCar

const NewCar = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 9px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  background-color: ${(props) => props.theme.elements};
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    box-shadow: none;
  }
`
