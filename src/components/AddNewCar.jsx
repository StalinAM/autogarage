import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import FormCar from './FormCar'
import { AuthContext } from '../context/Auth'
import { insertNewCar } from '../firebase/services'
import { CarInformationContext } from '../context/CarInformation'

function AddNewCar() {
  const { currentUser } = useContext(AuthContext)
  const { loadCarListData } = useContext(CarInformationContext)
  const [active, setActive] = useState(false)
  const [infoCar, setInfoCar] = useState({
    licensePlate: '',
    name: '',
    idPerson: '',
    contract: '',
    nick: ''
  })
  const addCar = async () => {
    if (
      infoCar.licensePlate &&
      infoCar.name &&
      infoCar.idPerson &&
      infoCar.contract
    ) {
      const newCar = {
        uid: currentUser.uid,
        ...infoCar
      }
      await insertNewCar({ ...newCar })
    }
    loadCarListData()
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    addCar()
    setActive(false)
    setInfoCar({
      licensePlate: '',
      name: '',
      idPerson: '',
      contract: '',
      nick: ''
    })
  }

  return (
    <>
      <NewCar onClick={() => setActive(true)}>Nuevo auto</NewCar>
      <FormCar
        handleSubmit={handleSubmit}
        infoCar={infoCar}
        setInfoCar={setInfoCar}
        active={active}
        setActive={setActive}
      />
    </>
  )
}

export default AddNewCar

const NewCar = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px 10px 20px;
  border-radius: 9px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  background-color: ${(props) => props.theme.elements};
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    box-shadow: none;
  }
`
