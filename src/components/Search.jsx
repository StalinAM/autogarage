import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import AddNewCar from './AddNewCar'
import { CarInformationContext } from '../context/CarInformation'
import FilterLicensePlate from './FilterLicensePlate'
import FilterByContract from './FilterByContract'

function Search() {
  const { setContract, setLicensePlate, contract, loadCarListData } =
    useContext(CarInformationContext)
  const [active, setActive] = useState(false)
  const handleContract = (contract) => {
    setContract(contract)
    loadCarListData()
    setActive(false)
  }
  const handleChange = (event) => {
    setLicensePlate(event.target.value)
  }
  return (
    <Container>
      <FilterLicensePlate handleChange={handleChange} />
      <AddNewCar />
      <FilterByContract
        handleContract={handleContract}
        active={active}
        contract={contract}
        setActive={setActive}
      />
    </Container>
  )
}

export default Search

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 1rem;
  @media screen and (min-width: 480px) {
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    padding: 1.5rem 5rem;
  }
`
