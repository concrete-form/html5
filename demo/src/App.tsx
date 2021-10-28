import React from 'react'
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'

import Input from '@concrete-form/html5/Input'
import Autocomplete from '@concrete-form/html5/Autocomplete'
import FileInput from '@concrete-form/html5/FileInput'
import Textarea from '@concrete-form/html5/Textarea'
import Select from '@concrete-form/html5/Select'
import Checkbox from '@concrete-form/html5/Checkbox'
import Radio from '@concrete-form/html5/Radio'
import Date from '@concrete-form/html5/Date'
import Time from '@concrete-form/html5/Time'
import ToggleSwitch from '@concrete-form/html5/ToggleSwitch'
import Slider from '@concrete-form/html5/Slider'
import SubmitButton from '@concrete-form/html5/SubmitButton'

import './styles.css'

const wait = async (delay: number) => await new Promise(resolve => setTimeout(resolve, delay))

// // custom errors example

// const CustomErrors: React.FC<{ errors: string[] }> = ({ errors }) => {
//   return (
//     <>
//       { errors.map(error => (
//         <div key={error} style={{ background: 'yellow' }}>{ error }</div>
//       )) }
//     </>
//   )
// }

// // custom control container

// const CustomControl: React.FC = ({ children }) => {
//   return (
//     <div style={{ padding: 5, background: '#ececec', margin: 5 }}>{ children }</div>
//   )
// }

const App: React.FC = () => {
  const values = {
    input: 'input',
    text: 'text',
    textarea: 'text\narea',
    number: 42,
    password: 'password',
    autocomplete: 'autocompleted',
    select: 'abc',
    selectMultiple: ['d', 'bar'],
    date: '2021-01-20',
    time: '14:59',
    checkbox: ['f', 'bar'],
    radio: 'bar',
    toggle: true,
    slider: 75,
  }

  const form = useForm({ defaultValues: values, mode: 'onTouched', criteriaMode: 'all' })
  const onSubmit = async (data: any) => {
    await wait(1000)
    console.log('Form submitted')
    console.log(data)
  }

  const groupOptions = [
    {
      group: 'Group Foo',
      options: [{ label: 'A', value: 'a' }, 'b', 'c'],
      props: { disabled: true },
    },
    'bar',
    { label: 'Baz', value: 'baz' },
    {
      group: 'Group Biz',
      options: [{ label: 'D', value: 'd' }, 'e'],
    },
  ]

  const options = [
    { label: 'Foo', value: 'f', props: { style: { background: 'deeppink' } } },
    'bar',
    { label: 'Baz', value: 'baz', props: { disabled: true } },
  ]

  // to customize layout :
  /* layout={{ errors: CustomErrors, control: CustomControl }} */

  const validateCheckbox = (values: any[]) => values?.length > 0
  const validateRadio = (value: any) => value !== null

  return (
    <>
      <h1>HTML5 Demo</h1>
      <Form form={form} onSubmit={onSubmit}>
        <Input name="input" fieldProps={{ required: 'this is required', pattern: /^[a-z]+$/i, minLength: 5 }} placeholder="Input" />
        <Autocomplete name="autocomplete" fieldProps={{ required: true }} placeholder="autocomplete" />
        <FileInput name="file" />
        <Textarea name="textarea" fieldProps={{ required: true }} placeholder="textarea" />
        <Select name="select" fieldProps={{ required: true }} options={options} allowEmpty />
        <Select name="selectGroup" fieldProps={{ required: true }} options={groupOptions} />
        <Select name="selectMultiple" fieldProps={{ required: true }} options={groupOptions} multiple allowEmpty />
        <Checkbox name="checkbox" fieldProps={{ validate: { required: validateCheckbox } }} options={options} />
        <br />
        <Radio name="radio" fieldProps={{ validate: { required: validateRadio } }} options={options} />
        <br />
        <Date name="date" fieldProps={{ required: true }} />
        <Time name="time" fieldProps={{ required: true }} />
        <br />
        <ToggleSwitch name="toggle" fieldProps={{ required: true }} label="I'm a toggle switch" />
        <Slider name="slider" fieldProps={{ min: 25 }} />

        <br />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default App
