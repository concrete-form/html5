import React from 'react'
import {
  InputProps as BaseInputProps,
  useControlProps,
  useControlState,
  useFormState,
} from '@concrete-form/core'

type InputProps = BaseInputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = ({
  name,
  fieldProps,
  ...inputProps
}) => {
  const { isSubmitting } = useFormState()
  const controlledFieldProps = useControlProps(name, fieldProps)
  const { errors } = useControlState(name)
  const disabled = inputProps.disabled ?? controlledFieldProps.disabled ?? isSubmitting

  return (
    <>
      <input
        {...inputProps}
        {...controlledFieldProps}
        disabled={disabled}
      />
      { errors.map((error: string) => (
        <div key={error} style={{ color: '#f00' }}>{ error }</div>
      )) }
    </>
  )
}

export default Input
