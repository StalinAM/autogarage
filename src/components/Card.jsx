import React from 'react'
import styled from 'styled-components'
import UpdateCar from './UpdateCar'

function Card({ name, licensePlate, idPerson, contract, docId }) {
  return (
    <Container>
      <h2>{licensePlate}</h2>
      <Content>
        <Description>
          Nombre:
          <span>{name}</span>
        </Description>
        <Description>
          Cédula:
          <span>{idPerson}</span>
        </Description>
        <Description>
          Tipo de Contrato:
          <span>{contract}</span>
        </Description>
        <UpdateCar
          licensePlate={licensePlate}
          name={name}
          idPerson={idPerson}
          contract={contract}
          docId={docId}
        />
      </Content>
    </Container>
  )
}

export default Card

const Container = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.elements};
  border-radius: 9px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 1rem;
  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.text};
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`
const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  span {
    font-size: 1rem;
    margin-left: 8px;
    font-weight: 400;
  }
`
