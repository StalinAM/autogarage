import React from 'react'
import { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { CarInformationContext } from '../context/CarInformation'
import Card from './Card'
import { Waveform } from '@uiball/loaders'

function MultipleCarInfoCards({ theme }) {
  const { carList } = useContext(CarInformationContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (carList) {
      setLoading(false)
    }
  }, [carList])
  return (
    <Container>
      <Content>
        {loading ? (
          <Waveform
            size={50}
            lineWeight={3.5}
            speed={1.5}
            color={theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%,0%)'}
          />
        ) : (
          carList.map((item) => (
            <li key={item.idPerson}>
              <Card
                name={item.name}
                licensePlate={item.licensePlate}
                idPerson={item.idPerson}
                contract={item.contract}
                docId={item.docId}
              />
            </li>
          ))
        )}
      </Content>
    </Container>
  )
}

export default MultipleCarInfoCards

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  min-height: 50vh;
  @media screen and (min-width: 768px) {
    padding: 1rem 5rem;
  }
`
const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
