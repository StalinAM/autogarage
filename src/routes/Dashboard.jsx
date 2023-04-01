import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import AddCar from '../components/FormCar'
import Search from '../components/Search'
import Card from '../components/Card'

function Dashboard({ theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Contaier>
        <Search />
      </Contaier>
    </>
  )
}

export default Dashboard

const Contaier = styled.main`
  background-color: ${(props) => props.theme.background};
  min-height: calc(100vh - 88px);
`
