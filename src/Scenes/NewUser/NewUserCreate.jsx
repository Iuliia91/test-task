import React from 'react'
import styled from 'styled-components'
import FormComponent from './NewUserComponents/FormComponent'

const StyledNewUserCreate = styled.div`
  max-width: 1170px;
  margin: auto;
`

const NewUserCreate = () => {
  return (
    <StyledNewUserCreate>
      <main className="block_user_create">
        <FormComponent />
      </main>
    </StyledNewUserCreate>
  )
}

export default NewUserCreate
