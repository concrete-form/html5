import { useForm, SubmitHandler } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'

export type FormOptions = {
  formValues?: any
  showAllErrors?: boolean
  onSubmit?: SubmitHandler<any>
}

type FormContextProps = {
  options?: FormOptions
}

const FormContext: React.FC<FormContextProps> = ({
  options = {},
  children,
}) => {
  const form = useForm({
    defaultValues: options.formValues,
  })
  return (
    <Form form={form} onSubmit={options.onSubmit}>
      { children }
    </Form>
  )
}

export default FormContext
