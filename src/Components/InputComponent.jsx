import React, { useState } from 'react'
import styled from 'styled-components'
import { useField, ErrorMessage } from 'formik'
import { mockUpsFont } from '../helpers/mockUps'
import InputMask from 'react-input-mask'
import TooltipComponent from './TooltipComponent'
import { mocUpMedia } from '../helpers/mockUps'
const StyledInputComponent = styled.div`
  input {
    width: 30em;
    height: 54px;
    border: 1px solid var(--c-input);
    border-color: ${(props) => (props.error ? 'red' : 'var(--c-input)')};
    padding-left: 14px;

    P {
      ${mockUpsFont.bodyFont}
    }
  }
  .file_block {
    position: relative;
    width: 26em;
    margin: auto;
  }
  input[type='file'] {
    opacity: 0;
    margin-bottom: 50px;
  }
  .file_upload {
    display: flex;
    position: absolute;
    width: 100%;
    height: 54px;
    position: absolute;
    justify-content: start;
    align-items: center;
    border: 1px solid var(--c-input);
    span {
      ${mockUpsFont.bodyFont}
    }
  }
  .block_upload {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
  .block_name {
    margin-left: 10px;
  }
  #file-upload-button {
    visibility: hidden;
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

  ${mocUpMedia.media360}
`

export const FileUploadInput = (props) => {
  const [fileName, setFileName] = useState('Upload your photo')
  return (
    <StyledInputComponent>
      <div className="file_block">
        <label className="file_upload">
          <span className="block_upload">Upload</span>
          <span className="block_name">{fileName}</span>
        </label>
        <input
          id="file"
          name="photo"
          type="file"
          onChange={(event) => {
            const v = event.target.files[0]
            setFileName(v.name)

            props.setFieldValue('photo', v)
          }}
        />
        <ErrorMessage name="photo" />
      </div>
    </StyledInputComponent>
  )
}

export const RadioInput = (props) => {
  const [field] = useField(props.name)

  return (
    <StyledInputComponent>
      <label>
        <input
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
  const [field, meta] = useField(props.name)

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
  const [field, meta] = useField(props.name)
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
