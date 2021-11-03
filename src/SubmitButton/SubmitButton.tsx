import {
  SubmitButtonProps,
  useFormState,
} from '@concrete-form/core'

const SubmitButton: React.FC<SubmitButtonProps> = ({
  displayLoading = true,
  loadingComponent = '...',
  alternateLoadingContent,
  children,
  ...buttonProps
}) => {
  const { isSubmitting, hasErrors } = useFormState()

  const render = () => {
    if (isSubmitting && alternateLoadingContent) {
      return alternateLoadingContent
    }

    return (
      <>
        { children }
        { isSubmitting && displayLoading && loadingComponent }
      </>
    )
  }

  return (
    <button
      type="submit"
      disabled={isSubmitting || hasErrors}
      {...buttonProps}
    >
      { render() }
    </button>
  )
}

export default SubmitButton
