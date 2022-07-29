import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { mockUpsFont, mocUpMedia } from '../../../helpers/mockUps'

const StyledCard = styled.div`
  // width: 90%;
  .block_card {
    background: var(--c-white);
    border-radius: 20px;
    width: 100%;
    padding: 10px 0;
  }

  .card {
    width: 90%;
    height: 234px;
    display: flex;
    flex-direction: column;
    margin: auto;
    overflow-y: auto;

    p {
      ${mockUpsFont.bodyFont}
      margin: 0;
      word-break: break-all;
    }
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 15px auto;
    gap: 20px;
  }

  .block_text {
    padding-top: 20px;
  }

  ${mocUpMedia.media768}
`

const Card = (props) => {
  return (
    <StyledCard>
      <div className="block_card">
        <div key={props.item.id} className="card">
          <img src={props.item.photo} alt="phote" type="normal" />

          <p>{props.item.name}</p>
          <div className="block_text">
            <p>{props.item.position}</p>
            <p>{props.item.email}</p>
            <p>{props.item.phone}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

export default Card
