import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import InputComponent from '../../../Components/InputComponent'
import { initialData, validateEmail } from '../../../helpers/formdata'
const StyledFormComponent = styled.div`
  width: 100%;
  margin: auto;

  form {
    text-align: center;
  }
`

const FormComponent = () => {
  return (
    <StyledFormComponent>
      <Formik
        initialValues={initialData}
        validate={(formValues) => {
          console.log(formValues)
          const errorObj = {}
          let isValid = true
          if (!formValues.userName) {
            isValid = false
            errorObj.userName = 'fill the fields'
          } else if (!validateEmail(formValues.email)) {
            isValid = false
            errorObj.password = 'write correct email'
          } else if (!formValues.email) {
            isValid = false
            errorObj.password = 'fill the fields'
          }
          return errorObj
        }}
        onSubmit={(formValues) => {
          console.log(formValues)
        }}
      >
        <Form>
          <div>
            <InputComponent
              name="userName"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div>
            <InputComponent name="userEmail" type="email" placeholder="Email" />
          </div>
          <div>
            <InputComponent
              name="userPhone"
              type="number"
              placeholder="Phone"
            />
          </div>
          <div>
            <button type="submit">Sing up</button>
          </div>
        </Form>
      </Formik>
    </StyledFormComponent>
  )
}

export default FormComponent
