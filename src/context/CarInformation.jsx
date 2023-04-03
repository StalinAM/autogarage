import { createContext, useEffect, useMemo, useState } from 'react'
import { AuthContext } from './Auth'
import { fetchCars } from '../firebase/services'
import { useContext } from 'react'
export const CarInformationContext = createContext()

function CarInformation({ children }) {
  const { currentUser } = useContext(AuthContext)
  const [carList, setCarList] = useState([])
  const [licensePlate, setLicensePlate] = useState(null)
  const [contract, setContract] = useState(null)
  useEffect(() => {
    loadCarList()
    setLicensePlate(null)
    setContract(null)
  }, [currentUser])

  const loadCarList = async () => {
    if (currentUser) {
      const asyncCars = await fetchCars(currentUser.uid)
      setCarList([...asyncCars])
    }
  }
  const filterCarList = useMemo(() => {
    if (licensePlate) {
      return carList.filter((item) =>
        item.licensePlate.toLowerCase().includes(licensePlate.toLowerCase())
      )
    }
    if (contract === 'mensual' || contract === 'horas') {
      return carList.filter((item) =>
        item.contract.toLowerCase().includes(contract.toLowerCase())
      )
    }
    return carList.map((item) => item)
  }, [licensePlate, contract, carList])
  return (
    <CarInformationContext.Provider
      value={{
        carList: filterCarList,
        loadCarListData: loadCarList,
        setLicensePlate,
        setContract,
        contract
      }}
    >
      {children}
    </CarInformationContext.Provider>
  )
}

export default CarInformation
