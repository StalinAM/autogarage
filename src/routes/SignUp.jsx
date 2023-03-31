import React, { useState } from 'react'
import { registerUser } from '../firebase/services'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Input, Label } from '../styles/StyleComponents'
import { UilExclamationTriangle } from '@iconscout/react-unicons'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const signUp = async (e) => {
    e.preventDefault()
    registerUser(name, email, password, navigate, setError)
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>Crear una cuenta</h1>
        </Header>
        <FormC onSubmit={signUp}>
          <BoxData>
            <div>
              <Label>Nombre</Label>
              <Input
                type='text'
                placeholder='nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label>Correo electrónico</Label>
              <Input
                type='email'
                placeholder='ejemplo@dominio.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label>Contraseña</Label>
              <Input
                type='password'
                placeholder='contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <ErrorMessage>
                <UilExclamationTriangle size='14' color='#f44334' />
                {error}
              </ErrorMessage>
            )}
          </BoxData>
          <SubmitBtn type='submit'>Registrarse</SubmitBtn>
          <Login>
            ¿Ya tienes una cuenta?<Link to='/'>Iniciar sesión</Link>
          </Login>
        </FormC>
      </Content>
    </Container>
  )
}

export default SignUp

const Container = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`
const Content = styled.div`
  background-color: ${(props) => props.theme.elements};
  position: relative;
  border-radius: 9px;
  width: 425px;
  padding: 5.5rem 0 3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 480px) {
    width: 340px;
    padding: 4.5rem 0 3rem;
  }
`
const Header = styled.header`
  position: absolute;
  width: 75%;
  background-color: ${(props) => props.theme.background};
  margin: auto;
  padding: 1rem 0;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  text-align: center;
  h1 {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    font-weight: 600;
  }
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 1rem;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    max-width: 280px;
  }
`
const BoxData = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
`
const SubmitBtn = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 9px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  background-color: ${(props) => props.theme.background};
  font-size: ${(props) => props.theme.mFont};
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    box-shadow: none;
  }
`
const Login = styled.p`
  display: flex;
  gap: 1.125rem;
  color: ${(props) => props.theme.text};
  font-weight: 200;
  font-size: 0.875rem;
  a {
    font-weight: 200;
    color: ${(props) => props.theme.text};
    position: relative;
    &:hover {
      font-weight: 400;
    }
  }
`
const ErrorMessage = styled.span`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: #f44334;
  bottom: -2.4rem;
  left: 0;
  @media screen and (max-width: 480px) {
    font-size: 0.875rem;
  }
`
