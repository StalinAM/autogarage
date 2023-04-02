import React from 'react'
import styled from 'styled-components'
import { DotWave } from '@uiball/loaders'

function Loader() {
  return (
    <Container>
      <DotWave size={70} speed={1} color='black' />
    </Container>
  )
}

export default Loader

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
