import React from 'react'
import styled from 'styled-components'
import {
  mocUpsBlock,
  mockUpsFont,
  mocUpsButton,
} from '../../../helpers/mockUps'
const StyledTextInformation = styled.div`
  ${mocUpsBlock.flexColumn}
  width:380px;

  margin: auto;

  .titel {
    ${mockUpsFont.heading}
    color: var(--c-white);
  }
  .text {
    ${mockUpsFont.bodyFont}
    color: var(--c-white);
  }

  div button {
    ${mocUpsButton.button}
  }
`

const TeaxtInfromation = () => {
  return (
    <StyledTextInformation>
      <div>
        <p className="titel">Test assignment for front-end developer</p>
      </div>
      <div>
        <p className="text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
      </div>
      <div>
        <button>Sing Up</button>
      </div>
    </StyledTextInformation>
  )
}

export default TeaxtInfromation
