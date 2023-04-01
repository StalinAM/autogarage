import styled from 'styled-components'
import { Input, Label, SubmitBtn } from '../styles/StyleComponents'
import { UilTimes } from '@iconscout/react-unicons'

function FormCar({
  handleSubmit,
  active,
  setActive,
  transaction,
  setTransaction
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <>
      {active && (
        <Container>
          <ModalC>
            <UilTimes size={36} onClick={() => setActive(false)} />
            <FormC onSubmit={handleSubmit}>
              <div>
                <Label htmlFor='Número de placa'>Número de placa</Label>
                <Input
                  name='licensePlate'
                  type='text'
                  placeholder='ABC-1234'
                  //   value={transaction.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor='Nombre'>Nombre</Label>
                <Input
                  name='name'
                  type='text'
                  placeholder='Nombre'
                  //   value={transaction.income}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor='C.I.'>Número de cédula</Label>
                <Input
                  name='idPerson'
                  type='text'
                  placeholder='123456789-0'
                  //   value={transaction.expense}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <h3>Tipo de contrato</h3>
                <ContainerRadioBtn>
                  <RadioBtn>
                    <input type='radio' name='radio' />
                    <span>Horas</span>
                  </RadioBtn>
                  <RadioBtn>
                    <input type='radio' name='radio' />
                    <span>Mensual</span>
                  </RadioBtn>
                </ContainerRadioBtn>
              </div>
              <SubmitBtn type='submit'>Añadir</SubmitBtn>
            </FormC>
          </ModalC>
        </Container>
      )}
    </>
  )
}

export default FormCar

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: brightness(0.7);
  z-index: 100;
`
const ModalC = styled.div`
  background-color: ${(props) => props.theme.elements};
  position: relative;
  border-radius: 9px;
  width: 400px;
  padding: 2.5rem 2rem;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  svg {
    position: absolute;
    top: 10px;
    right: 1rem;
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  margin: 0 auto;
  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.text};
    font-weight: 400;
  }
`
const ContainerRadioBtn = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 5px;
`
const RadioBtn = styled.label`
  display: flex;
  cursor: pointer;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
  input {
    position: absolute;
    left: -9999px;
    &:checked + span {
      background-color: ${(props) => props.theme.background};
      &:before {
        background-color: ${(props) => props.theme.text};
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 9px;
    color: ${(props) => props.theme.text};
    font-weight: 200;
    &:hover {
      background-color: ${(props) => props.theme.background};
    }
    &:before {
      display: flex;
      flex-shrink: 0;
      content: '';
      background-color: ${(props) => props.theme.elements};
      width: 1.125rem;
      height: 1.125rem;
      border-radius: 50%;
      margin-right: 0.375em;
      transition: 0.25s ease;
      border: 2px solid ${(props) => props.theme.text};
    }
  }
`
