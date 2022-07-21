import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'
import { mockUpsFont } from '../helpers/mockUps'
const StyledInputComponent = styled.div`
  input {
    width: 366px;
    height: 54px;
    margin-bottom: 50px;
    // color: var(--c-input);
    border: 1px solid var(--c-input);
    padding-left: 14px;
    P {
      ${mockUpsFont.bodyFont}
    }
  }
`

const InputComponent = (props) => {
  const [field, meta, helpers] = useField(props.name)
  return (
    <StyledInputComponent error={meta.error && meta.touched}>
      <input
        className={props.className}
        onChange={field.onChange}
        onBlur={field.onBlur}
        name={props.name}
        type={props.type}
        value={field.value}
        inputcolor="blue"
        placeholder={props.placeholder}
      />
      {meta.error && meta.touched && (
        <div className="errorMessagerHolder">{meta.error}</div>
      )}
    </StyledInputComponent>
  )
}

export default InputComponent
