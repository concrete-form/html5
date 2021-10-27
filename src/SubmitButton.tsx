import React from 'react'
import {
  SubmitButtonProps as SubmitButtonBaseProps,
  useFormState,
} from '@concrete-form/core'

type SubmitButtonProps = {
  loadingComponent?: React.ReactNode
} & SubmitButtonBaseProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const SubmitButton: React.FC<SubmitButtonProps> = ({
  displayLoading = true,
  loadingComponent = '...',
  children,
  ...buttonProps
}) => {
  const { isSubmitting, hasErrors } = useFormState()

  return (
    <button
      type="submit"
      disabled={isSubmitting || hasErrors}
      {...buttonProps}
    >
      { children }
      { isSubmitting && displayLoading && loadingComponent }
    </button>
  )
}

export default SubmitButton
