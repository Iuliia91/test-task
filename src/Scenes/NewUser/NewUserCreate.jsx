import React from 'react'
import styled from 'styled-components'
import FormComponent from './NewUserComponents/FormComponent'
import { mockUpsFont } from '../../helpers/mockUps'
const StyledNewUserCreate = styled.div`
  max-width: 1170px;
  margin: auto;
  header {
    ${mockUpsFont.heading}
    margin-bottom:50px;
  }
`

const NewUserCreate = (props) => {
  return (
    <StyledNewUserCreate id="user_create">
      <main className="block_user_create">
        <FormComponent handleRestaratNewList={props.handleRestaratNewList} />
      </main>
    </StyledNewUserCreate>
  )
}

export default NewUserCreate
