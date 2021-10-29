import React from 'react'
import { useConcreteFormConfig } from '@concrete-form/core'

import Errors from './Errors'

type ControlProps = {
  name: string
}

const Control: React.FC<ControlProps> = ({ name, children }) => {
  const { layout: { control: CustomControl } = {} } = useConcreteFormConfig()

  if (CustomControl) {
    return <CustomControl errors={<Errors name={name} />}>{ children }</CustomControl>
  }

  return <div className="concreteform-control">{ children } <Errors name={name} /></div>
}

export default Control
