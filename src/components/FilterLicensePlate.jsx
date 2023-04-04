import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import styled from 'styled-components'
function FilterLicensePlate({ handleChange }) {
  return (
    <ContainerShearch>
      <UilSearch />
      <InputF
        onChange={handleChange}
        type='text'
        placeholder='Search by license plate...'
      />
    </ContainerShearch>
  )
}

export default FilterLicensePlate

const ContainerShearch = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${(props) => props.theme.elements};
  border-radius: 8px;
  padding: 10px 10px 10px 20px;
  color: ${(props) => props.theme.text};
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
const InputF = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  &::placeholder {
    color: ${(props) => props.theme.input};
  }
`
