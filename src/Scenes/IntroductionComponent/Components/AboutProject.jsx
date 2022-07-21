import React from 'react'
import styled from 'styled-components'
import background from '../../../assest/imgases/background.jpeg'
import TeaxtInfromation from './TextInformation'
import { mocUpsBlock } from '../../../helpers/mockUps'
const StyledAboutProject = styled.div`
  ${mocUpsBlock.flexBlockCenter}
  width: 100%;
  height: 650px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-size: 100% 100%;
`

const AboutProject = () => {
  return (
    <StyledAboutProject>
      <div>
        <TeaxtInfromation />
      </div>
    </StyledAboutProject>
  )
}

export default AboutProject
