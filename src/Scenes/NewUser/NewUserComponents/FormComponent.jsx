import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import InputComponent, {
  FileUploadInput,
  MaskInput,
} from '../../../Components/InputComponent'
import { initialData, validationFunction } from '../../../helpers/formdata'
import OptionSelect from './OptionSelect'
import { mocUpsButton, mockUpsFont } from '../../../helpers/mockUps'
import { formDataValue, postData } from '../../../helpers/formdata'
import SuccessfullyRegistered from '../../../Components/SuccessfullyRegistered'
const StyledFormComponent = styled.div`
  width: 100%;
  margin: auto;

  form {
    text-align: center;
    margin-bottom: 50px;
    .block {
      margin-bottom: 50px;
    }
    p {
      margin: 0;
    }
    .active {
      ${mocUpsButton.button}
    }
    .disable {
      ${mocUpsButton.disableButton}
    }
  }
  .dsiable {
    color: red;
  }
  .block_phone > input {
    padding: 0;
  }
  .block_phone > div {
    width: 26em;
    margin: auto;
    p {
      float: left;
      ${mockUpsFont.bodyFont}
    }
  }
`

const FormComponent = (props) => {
  const [message, setMessage] = useState({
    success: false,
    message: 'hi',
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let timer1 = setTimeout(() => setOpen(false), 5000)
    return () => {
      clearTimeout(timer1)
    }
  }, [open])

  return (
    <StyledFormComponent>
      {message.success ? (
        <SuccessfullyRegistered />
      ) : (
        <>
          <header>Working with POST request</header>
          <Formik
            initialValues={initialData}
            validate={(formValues) => {
              return validationFunction(formValues)
            }}
            onSubmit={(formValues, { resetForm }) => {
              let formData = formDataValue(formValues)

              postData(formData).then((response) => {
                setOpen(true)
                setMessage(response)
                if (response.success) {
                  props.handleRestaratNewList(true)
                  resetForm()
                }
              })
            }}
          >
            {({ setFieldValue, isValid, dirty }) => (
              <Form encType="multipart/form-data" action="">
                <div className="block">
                  <InputComponent
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="block">
                  <InputComponent
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className=" block block_phone">
                  <MaskInput name="phone" />
                  <div>
                    <p>+38(XXX)XXX-XX-XX</p>
                  </div>
                </div>
                <OptionSelect />
                <FileUploadInput setFieldValue={setFieldValue} />
                <div>
                  <button
                    type="submit"
                    disabled={!(isValid && dirty)}
                    className={!(isValid && dirty) ? 'disable' : 'active'}
                  >
                    Sing up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </StyledFormComponent>
  )
}

export default FormComponent
