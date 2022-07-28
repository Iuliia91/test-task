import React, { useState } from 'react'
import styled from 'styled-components'
import { useField, Field, ErrorMessage, FieldArray } from 'formik'
import { mockUpsFont } from '../helpers/mockUps'
import InputMask from 'react-input-mask'
import TooltipComponent from './TooltipComponent'
import cursor from '../assest/imgases/cursor.png'
const StyledInputComponent = styled.div`
  input {
    width: 366px;
    height: 54px;
    border: 1px solid var(--c-input);
    border-color: ${(props) => (props.error ? 'red' : 'var(--c-input)')};
    padding-left: 14px;

    P {
      ${mockUpsFont.bodyFont}
    }
  }

  input[type='file'] {
    display: none;
  }

  input:-internal-autofill-selected {
  }
  .errorMessagerHolder {
    color: #d93025;
    font-size: 20px;
    right: 0;
    width: 100%;
  }
  input:hover {
    cursor: pointer;
  }

  input[type='radio'] {
    width: 20px;
    height: 20px;
  }
  input[type='radio']:checked {
    width: 50px;
    height: 50px;
    background: red;
  }

  input[type='radio']:hover {
    cursor: pointer;
    background: red;
  }
  input[type='radio']:after {
    content: '';
    width: 100%;
    background: red;
    color: red;
  }
`

export const FileUploadInput = (props) => {
  const [name, setName] = useState('')
  return (
    <StyledInputComponent>
      <label for="file">Upload</label>
      <input
        id="file"
        name="photo"
        type="file"
        //placeholder="Uploader"
        onChange={(event) => {
          const v = event.target.files[0]

          props.setFieldValue('photo', v)
        }}
      />
      <ErrorMessage name="photo" />
    </StyledInputComponent>
  )
}

export const RadioInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledInputComponent>
      <label class="form-control">
        <Field
          type="radio"
          name={props.name}
          value={props.id}
          id={props.id}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
        <ErrorMessage name="radio" />
      </label>
    </StyledInputComponent>
  )
}

export const MaskInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledInputComponent>
      <TooltipComponent content={field.value} direction="bottom">
        <InputMask
          mask="+38(099) 999 - 99 - 99"
          name={props.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder="phone"
        />

        {meta.error && meta.touched && (
          <div className="errorMessagerHolder">{meta.error}</div>
        )}
      </TooltipComponent>
    </StyledInputComponent>
  )
}

const InputComponent = (props) => {
  const [field, meta, helpers] = useField(props.name)
  return (
    <StyledInputComponent error={meta.error && meta.touched}>
      <TooltipComponent content={field.value} direction="bottom">
        <input
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={props.name}
          type={props.type}
          value={field.value}
          placeholder={props.placeholder}
        />

        {meta.error && meta.touched && (
          <div className="errorMessagerHolder">{meta.error}</div>
        )}
      </TooltipComponent>
    </StyledInputComponent>
  )
}

export default InputComponent
