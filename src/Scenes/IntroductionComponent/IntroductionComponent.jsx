import React from 'react'
import styled from 'styled-components'
import AboutProject from './Components/AboutProject'
import Header from './Components/Header'

const StyledIntroductionComponent = styled.div`
  main {
    max-width: 1170px;
    margin: auto;
    text-aling: center;
    height: 100%;
  }
`

const IntroductionComponent = () => {
  return (
    <StyledIntroductionComponent>
      <Header />
      <main>
        <AboutProject />
      </main>
    </StyledIntroductionComponent>
  )
}

export default IntroductionComponent
