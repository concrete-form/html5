import { AutocompleteProps as CoreAutocompleteProps } from '@concrete-form/core'

import Input from '../Input/Input'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type AutocompleteProps = CoreAutocompleteProps & ReactInputProps

const Autocomplete: React.FC<AutocompleteProps> = ({
  ...inputProps
}) => <Input autoComplete="on" {...inputProps} />

export default Autocomplete
