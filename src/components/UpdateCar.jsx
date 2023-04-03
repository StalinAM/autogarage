import { useContext, useState } from 'react'
import styled from 'styled-components'
import FormCar from './FormCar'
import { UilEdit } from '@iconscout/react-unicons'
import { AuthContext } from '../context/Auth'
import { CarInformationContext } from '../context/CarInformation'
import { updateCar } from '../firebase/services'

function UpdateCar({ licensePlate, name, idPerson, contract, docId }) {
  const { currentUser } = useContext(AuthContext)
  const { loadCarListData } = useContext(CarInformationContext)
  const [active, setActive] = useState(false)
  const [infoCar, setInfoCar] = useState({
    licensePlate,
    name,
    idPerson,
    contract
  })
  const editCar = async () => {
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
      await updateCar(docId, { ...newCar })
    }
    loadCarListData()
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    editCar()
    setActive(false)
  }
  return (
    <>
      <UpdateBtn onClick={() => setActive(true)}>
        <UilEdit />
      </UpdateBtn>
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

export default UpdateCar

const UpdateBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 10px auto 0px;
  padding: 5px;
  border-radius: 9px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  background-color: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    box-shadow: none;
  }
`
