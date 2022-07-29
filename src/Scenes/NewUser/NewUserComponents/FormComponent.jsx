import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import InputComponent, {
  FileUploadInput,
  MaskInput,
  RadioInput,
} from '../../../Components/InputComponent'
import { initialData, validationFunction } from '../../../helpers/formdata'
import OptionSelect from './OptionSelect'
import { mocUpsButton, mockUpsFont } from '../../../helpers/mockUps'
import { formDataValue, postData, getToken } from '../../../helpers/formdata'

const StyledFormComponent = styled.div`
  width: 100%;
  margin: auto;

  form {
    text-align: center;
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
    width: 385px;
    margin: auto;
    p {
      float: left;
      ${mockUpsFont.bodyFont}
    }
  }
`

const FormComponent = () => {
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [valueAdd, setValueAdd] = useState(false)
  useEffect(() => {
    let timer1 = setTimeout(() => setOpen(false), 5000)
    return () => {
      clearTimeout(timer1)
    }
  }, [open])

  return (
    <StyledFormComponent>
      {open && <div>{message}</div>}
      <Formik
        initialValues={initialData}
        validate={(formValues) => {
          return validationFunction(formValues)
        }}
        onSubmit={(formValues) => {
          let formData = formDataValue(formValues)

          postData(formData).then((response) => {
            setOpen(true)
            setMessage(response)
          })
        }}
      >
        {({ setFieldValue, isValid, dirty }) => (
          <Form encType="multipart/form-data" action="">
            <div className="block">
              <InputComponent name="name" type="text" placeholder="Your name" />
            </div>
            <div className="block">
              <InputComponent name="email" type="email" placeholder="Email" />
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
    </StyledFormComponent>
  )
}

export default FormComponent
