import { ErrorsLayoutProps, CustomizableLayout } from '@concrete-form/core'

const Errors: React.FC<ErrorsLayoutProps> = (props) => {
  const { errors } = props
  return (
    <CustomizableLayout type="errors" props={props}>
      <div>
        <ul className="concreteform-control-errors">
          { errors.map(error => (
            <li key={error}>{ error }</li>
          )) }
        </ul>
      </div>
    </CustomizableLayout>
  )
}

export default Errors
