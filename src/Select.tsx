import { useMemo } from 'react'
import {
  SelectProps,
  useControlProps,
  parseSelectOptions,
} from '@concrete-form/core'

import ControlWithErrors from './util/ControlWithErrors'

const Select: React.FC<SelectProps> = ({
  name,
  children,
  options,
  allowEmpty = false,
  ...inputProps
}) => {
  const props = useControlProps(name, inputProps)
  const parsedOptions = useMemo(() => parseSelectOptions(options, children), [options, children])

  const renderOptions = (options: ReturnType<typeof parseSelectOptions>) => {
    return options.map(item => {
      switch (item.type) {
        case 'group': {
          const { label, options, props } = item
          return <optgroup key={`label:${label ?? ''}`} label={label} {...props}>{ renderOptions(options) }</optgroup>
        }
        case 'option': {
          const { label, value, props } = item
          return <option key={value} value={value} {...props}>{ label }</option>
        }
        default:
          return null
      }
    })
  }

  return (
    <ControlWithErrors name={name}>
      <select
        {...props}
      >
        { allowEmpty && !inputProps.multiple && <option value="" /> }
        { renderOptions(parsedOptions) }
        { children }
      </select>
    </ControlWithErrors>
  )
}

export default Select
