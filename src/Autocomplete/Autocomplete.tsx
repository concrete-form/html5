import { AutocompleteProps } from '@concrete-form/core'

import Input from '../Input'

const Autocomplete: React.FC<AutocompleteProps> = ({
  ...inputProps
}) => <Input autoComplete="on" {...inputProps} type="text" />

export default Autocomplete
