import React from 'react'
import { useControlState, useConcreteFormConfig } from '@concrete-form/core'

type ErrorsProps = {
  name: string
}

const Errors: React.FC<ErrorsProps> = ({ name }) => {
  const { errors } = useControlState(name)
  const { layout: { errors: CustomError } = {} } = useConcreteFormConfig()

  if (!errors || errors?.length === 0) {
    return null
  }

  if (CustomError) {
    return <CustomError errors={errors} />
  }

  return (
    <div>
      <ul className="concreteform-control-errors">
        { errors.map((error: string) => (
          <li key={error}>{ error }</li>
        )) }
      </ul>
    </div>
  )
}

export default Errors
