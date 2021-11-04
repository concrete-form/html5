import { render as testingLibraryRender } from '@testing-library/react'
import FormContext, { FormOptions } from './FormContext'

const render = (content: React.ReactNode, options?: FormOptions) => testingLibraryRender(
  <FormContext options={options}>
    { content }
  </FormContext>,
)

export default render
