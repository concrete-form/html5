import { FileInputProps as CoreFileInputProps } from '@concrete-form/core'

import Input from '../Input'

type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type FileInputProps = CoreFileInputProps & ReactInputProps

const FileInput: React.FC<FileInputProps> = ({
  ...inputProps
}) => <Input {...inputProps} type="file" />

export default FileInput
