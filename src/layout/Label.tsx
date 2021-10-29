import React from 'react'
import { useConcreteFormConfig } from '@concrete-form/core'

const Label: React.FC = ({
  children,
}) => {
  const { layout: { label: CustomLabel } = {} } = useConcreteFormConfig()

  if (CustomLabel) {
    return <CustomLabel>{ children }</CustomLabel>
  }

  return <div className="concreteform-label">{ children }</div>
}

export default Label
