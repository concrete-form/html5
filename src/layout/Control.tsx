import React from 'react'
import { useConcreteFormConfig } from '@concrete-form/core'

import Errors from './Errors'

type ControlProps = {
  name: string
}

const Control: React.FC<ControlProps> = ({ name, children }) => {
  const { layout: { control: CustomControl } = {} } = useConcreteFormConfig()

  const renderControl = () => <div className="concreteform-control"> { children } <Errors name={name} /> </div>
  return CustomControl ? <CustomControl> { renderControl() } </CustomControl> : <div>{ renderControl() }</div>
}

export default Control
