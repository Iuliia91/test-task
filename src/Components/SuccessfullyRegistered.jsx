import React from 'react'
import styled from 'styled-components'
import img from '../assest/imgases/success.svg'
import { mockUpsFont } from '../helpers/mockUps'
const StyledSuccessfullyRegistered = styled.div`
  width: 100%;

  text-align: center;
  margin-bottom: 100px;
  p {
    ${mockUpsFont.heading}
    margin:0;
    margin-bottom: 50px;
  }
  img {
    height: 100%;
  }
`

const SuccessfullyRegistered = () => {
  return (
    <StyledSuccessfullyRegistered>
      <p>User successfully registered</p>
      <img src={img} alt="success" />
    </StyledSuccessfullyRegistered>
  )
}

export default SuccessfullyRegistered
