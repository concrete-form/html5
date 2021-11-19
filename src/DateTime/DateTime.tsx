import { DateTimeProps as CoreDateTimeProps } from '@concrete-form/core'

import CustomControl from '../CustomControl'
import * as date from '../util/date'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type DateTimeProps = CoreDateTimeProps & Omit<ReactInputProps, 'type'>

const DateTime: React.FC<DateTimeProps> = ({
  name,
  type,
  ...inputProps
}) => {
  switch (type) {
    case 'time':
      return (
        <CustomControl
          name={name}
          incomingDataFormatter={date.parseTime}
          outgoingDataFormatter={date.formatTime}
          type="time"
          {...inputProps}
        />
      )
    case 'datetime':
      return (
        <CustomControl
          name={name}
          incomingDataFormatter={date.parseDateTime}
          outgoingDataFormatter={date.formatDateTime}
          type="datetime-local"
          {...inputProps}
        />
      )
    case 'date':
    default:
      return (
        <CustomControl
          name={name}
          incomingDataFormatter={date.parseDate}
          outgoingDataFormatter={date.formatDate}
          type="date"
          {...inputProps}
        />
      )
  }
}

export default DateTime
