import { useControlState, useTranslator } from '@concrete-form/core'
import Control from '../layout/Control'
import Errors from '../layout/Errors'

type ControlWithErrorsProps = {
  name: string
}

const ControlWithErrors: React.FC<ControlWithErrorsProps> = ({ name, children }) => {
  const { errors } = useControlState(name)
  const translate = useTranslator()

  const renderErrors = () => {
    if (!errors || errors?.length === 0) {
      return
    }
    return (
      <Errors
        name={name}
        errors={errors.map(translate)}
      />
    )
  }

  return (
    <Control
      name={name}
      control={children}
      errors={renderErrors()}
    />
  )
}

export default ControlWithErrors
