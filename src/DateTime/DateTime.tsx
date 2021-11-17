import { DateTimeProps as CoreDateTimeProps } from '@concrete-form/core'

import Input from '../Input'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type DateTimeProps = CoreDateTimeProps & Omit<ReactInputProps, 'type'>

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
