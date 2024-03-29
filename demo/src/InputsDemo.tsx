/* eslint-disable react/jsx-curly-spacing */
import { useState } from 'react'

/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'

import Input from '@concrete-form/html5/Input'
import Autocomplete from '@concrete-form/html5/Autocomplete'
import FileInput from '@concrete-form/html5/FileInput'
import Textarea from '@concrete-form/html5/Textarea'
import Select from '@concrete-form/html5/Select'
import CheckboxGroup from '@concrete-form/html5/CheckboxGroup'
import RadioGroup from '@concrete-form/html5/RadioGroup'
import DateTime from '@concrete-form/html5/DateTime'
import ToggleSwitch from '@concrete-form/html5/ToggleSwitch'
import SingleCheckbox from '@concrete-form/html5/SingleCheckbox'
import Slider from '@concrete-form/html5/Slider'
import SubmitButton from '@concrete-form/html5/SubmitButton'

const wait = async (delay: number) => await new Promise(resolve => setTimeout(resolve, delay))

const values = {
  input: 'input',
  text: 'text',
  textarea: 'text\narea',
  number: 42,
  password: 'password',
  autocomplete: 'autocompleted',
  selectGroup: 'bar',
  selectMultiple: ['d', 'bar'],
  date: new Date(),
  time: new Date(),
  datetime: new Date(),
  checkbox: ['f', 'bar'],
  radio: 'bar',
  toggle: true,
  acceptTerms: false,
  slider: 75,
}

const App: React.FC = () => {
  const [language, setLanguage] = useState('fr')

  const form = useForm({
    // defaultValues: values,
    // mode: 'onTouched',
    // criteriaMode: 'all',
  })

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

  const validateCheckbox = (values: any[]) => values?.length > 0
  const validateRadio = (value: any) => value !== null

  return (
    <>
      <h1>HTML5 Demo</h1>
      { language !== 'en' && (<button onClick={() => { setLanguage('en') }}>EN</button>) }
      { language !== 'fr' && (<button onClick={() => { setLanguage('fr') }}>FR</button>) }

      <Form
        form={form}
        onSubmit={onSubmit}
        language={language}
        // translator={(...args: any[]) => { console.log(args); return 'Banana !' }}
      >
        <Input name="input" fieldProps={{ required: true, pattern: /^[a-z]+$/i, minLength: 5 }} placeholder="Input" />
        <Autocomplete name="autocomplete" fieldProps={{ required: true }} placeholder="autocomplete" />
        <FileInput name="file" />
        <Textarea name="textarea" fieldProps={{ required: true }} placeholder="textarea" />
        <Select name="selectGroup" fieldProps={{ required: true }} options={groupOptions} allowEmpty />
        <Select name="selectMultiple" fieldProps={{ required: true }} options={groupOptions} multiple allowEmpty />
        <CheckboxGroup name="checkbox" fieldProps={{ validate: { required: validateCheckbox } }} options={options} />
        <RadioGroup name="radio" fieldProps={{ validate: { required: validateRadio } }} options={options} />
        <DateTime type="date" name="date" fieldProps={{ required: true }} />
        <DateTime type="time" name="time" fieldProps={{ required: true }} />
        <DateTime type="datetime" name="datetime" fieldProps={{ required: true }} />
        <ToggleSwitch name="toggle" fieldProps={{ required: true }} label="I'm a toggle switch" />
        <Slider label="Optional slider label" name="slider" fieldProps={{ min: 25 }} />
        <SingleCheckbox name="acceptTerms" fieldProps={{ required: true }} label={<>I accept the <a href="#void">terms and conditions</a></>} />

        <CheckboxGroup name="checkbox" options={options} />
        <RadioGroup name="radio" options={options} />

        <br />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default App
