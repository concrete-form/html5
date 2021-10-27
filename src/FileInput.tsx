import React from 'react'
import { FileInputProps } from '@concrete-form/core'

import Input from './Input'

const FileInput: React.FC<FileInputProps> = ({
  ...inputProps
}) => <Input {...inputProps} type="file" />

export default FileInput
