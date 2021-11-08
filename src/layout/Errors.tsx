import { ErrorsLayoutProps, CustomizableLayout, Translation, useTranslator } from '@concrete-form/core'

const Errors: React.FC<ErrorsLayoutProps> = (props) => {
  const { errors } = props
  const translate = useTranslator()
  return (
    <CustomizableLayout type="errors" props={props}>
      <div>
        <ul className="concreteform-control-errors">
          { errors.map((error: Translation) => {
            const translatedError = translate(error)
            return <li key={translatedError}>{ translatedError }</li>
          }) }
        </ul>
      </div>
    </CustomizableLayout>
  )
}

export default Errors
