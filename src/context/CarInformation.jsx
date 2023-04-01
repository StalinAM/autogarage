import { createContext, useEffect, useState } from 'react'
import { AuthContext } from './Auth'
import { fetchCars } from '../firebase/services'
export const CarInformationContext = createContext()

function CarInformation({ children }) {
  const { currentUser } = useContext(AuthContext)
  const [carList, setCarList] = useState([])

  useEffect(() => {
    loadCarList()
  }, [currentUser])

  const loadCarList = async () => {
    if (currentUser) {
      const asyncCars = await fetchCars(currentUser.uid)
      setCarList([...asyncCars])
    }
  }

  return (
    <CarInformationContext.Provider
      value={{ carList, loadCarListData: loadCarList }}
    >
      {children}
    </CarInformationContext.Provider>
  )
}

export default CarInformation
