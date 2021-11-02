import { useControlState } from '@concrete-form/core'
import Control from '../layout/Control'
import Errors from '../layout/Errors'

type ControlWithErrorsProps = {
  name: string
}

const ControlWithErrors: React.FC<ControlWithErrorsProps> = ({ name, children }) => {
  const { errors } = useControlState(name)
  const renderErrors = () => {
    if (!errors || errors?.length === 0) {
      return
    }
    return (
      <Errors
        name={name}
        errors={errors}
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
