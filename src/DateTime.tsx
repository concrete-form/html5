import { DateTimeProps } from '@concrete-form/core'

import Input from './Input'

const DateTime: React.FC<DateTimeProps> = ({
  type,
  ...inputProps
}) => {
  const getInputType = () => {
    switch (type) {
      case 'time':
        return 'time'
      case 'datetime':
        return 'datetime-local'
      case 'date':
      default:
        return 'date'
    }
  }

  return <Input {...inputProps} type={getInputType()} />
}

export default DateTime
