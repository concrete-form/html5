/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'
import { SubmitButton, CustomControl } from '@concrete-form/html5'

type CustomDemoProps = {
  name: string
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

/*
  - the value of this input is stored as UPPER CASE in the form
  - "applyLocally" means that we want to apply the same rule to the input
      * "outgoingDataFormatter" returned format need to be supported by the input
      * when "applyLocally" is true, the field become controlled (might affect performances)
  - "formatInitialValue" will update inital lower case values on form (even if no form change)
  - if "formatInitialValue" + "applyLocally" are enabled, the initial value of the field will be updated
  - "incomingDataFormatter" is not needed in that example since we have "formatInitialValue" + "applyLocally"
      * we would need it if the format wasn't supported by the input
*/
const CapitalizeInput: React.FC<CustomDemoProps & any> = ({ name, applyLocally }) => {
  const formatter = (value?: string) => value?.toLocaleUpperCase()
  return (
    <CustomControl
      name={name}
      // incomingDataFormatter={formatter}
      outgoingDataFormatter={formatter}
      applyLocally={applyLocally}
      formatInitialValue
    />
  )
}

/*
  - string value is sonverted into an array when pushed to form
  - array is converted back to string when pulled from form
  - "applyLocally" would make no sense since the input cannot display an array
*/
const SplitterInput: React.FC<CustomDemoProps> = ({ name }) => {
  return (
    <CustomControl
      name={name}
      incomingDataFormatter={(value?: string[]) => value?.join('')}
      outgoingDataFormatter={(value: string) => value.split('')}
    />
  )
}

/*
 - same as previous example with an input date and a date object instead of array
*/
const DateInput: React.FC<CustomDemoProps> = ({ name }) => {
  const isValidDate = (date?: Date) => date instanceof Date && !isNaN(date.getTime())
  return (
    <CustomControl
      name={name}
      incomingDataFormatter={(value?: Date) => isValidDate(value) && value?.toISOString().substr(0, 10)}
      outgoingDataFormatter={(value: string) => isValidDate(new Date(value)) ? new Date(value) : undefined}
      type="date"
    />
  )
}

/*
 - example with a checkbox input that return a boolean
 - formatInitialValue will set false by default (or fix invalid (non boolean) initial value)
*/
const BooleanCheckbox: React.FC<CustomDemoProps> = ({ name }) => {
  return (
    <CustomControl
      name={name}
      incomingDataFormatter={(value?: boolean) => !!value}
      outgoingDataFormatter={(value: string) => !!value}
      formatInitialValue
      type="checkbox"
    />
  )
}

const App = () => {
  const form = useForm({
    defaultValues: {
      capitalize: 'FoO',
      capitalizeControlled: 'FoO',
      splitter: ['f', 'o', 'o'],
      date: new Date(),
      booleanCheckbox: false,
    },
  })
  return (
    <Form form={form} onSubmit={(data: any) => console.log(data)}>
      <CapitalizeInput name="capitalize" placeholder="capitalized (not controlled)" /><br />
      <CapitalizeInput name="capitalizeControlled" placeholder="capitalized (controlled)" applyLocally /><br />
      <SplitterInput name="splitter" placeholder="splitter" /><br />
      <DateInput name="date" placeholder="date" /><br />
      <BooleanCheckbox name="booleanCheckbox" /><br />

      <SubmitButton>Send</SubmitButton>
    </Form>
  )
}

export default App
