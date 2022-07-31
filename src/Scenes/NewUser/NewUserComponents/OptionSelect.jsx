import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PreloaderComponent from '../../../Components/PreloaderComponent'
import { RadioInput } from '../../../Components/InputComponent'
import { mockUpsFont } from '../../../helpers/mockUps'

const StyledOptionSelect = styled.div`
  max-width: 366px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 47px;
  .header {
    ${mockUpsFont.bodyFont}
    padding-bottom:11px;
    margin-left: 2em;
  }
  .selection_block {
    width: 366px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .selection_item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    p {
      padding-bottom: 7px;
      padding-left: 12px;
    }
  }

  input[type='radio'] {
    background: red;
  }
`

const getDataPosition = (url) => {
  if (url === null) {
    return console.log('finished')
  } else {
    return axios
      .get(url)
      .then(({ data }) => {
        return data
      })
      .catch((e) => alert('smt went wrong'))
  }
}

const OptionSelect = (props) => {
  const [positionData, setPositionData] = useState([])
  const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions'

  useEffect(() => {
    getDataPosition(url).then((response) => {
      setPositionData(response.positions)
    })
  }, [])

  return (
    <StyledOptionSelect>
      <p className="header">Select your position</p>

      {positionData.length > 0 ? (
        <div className="selection_block">
          {positionData.map((position) => {
            return (
              <div className="selection_item" key={position.id}>
                <RadioInput
                  value={position.id}
                  id={position.id}
                  name="position_id"
                />
                <p>{position.name}</p>
              </div>
            )
          })}
        </div>
      ) : (
        <PreloaderComponent />
      )}
    </StyledOptionSelect>
  )
}

export default OptionSelect
