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
import Checkbox from '@concrete-form/html5/Checkbox'
import Radio from '@concrete-form/html5/Radio'
import DateTime from '@concrete-form/html5/DateTime'
import ToggleSwitch from '@concrete-form/html5/ToggleSwitch'
import SingleCheckbox from '@concrete-form/html5/SingleCheckbox'
import Slider from '@concrete-form/html5/Slider'
import SubmitButton from '@concrete-form/html5/SubmitButton'

import './styles.css'

import DemoPositionDirection from './DemoPositionDirection'
import CustomControlDemo from './CustomControlDemo'
import LabelledDemo from './LabelledDemo'

const wait = async (delay: number) => await new Promise(resolve => setTimeout(resolve, delay))

/******************************************************************/
// custom layouts

type Position = 'top' | 'bottom' | 'left' | 'right'
type Orientation = 'horizontal' | 'vertical'

type ControlLayoutProps = {
  name: string
  control: React.ReactNode
  errors: React.ReactNode
}

type ErrorsLayoutProps = {
  name: string
  errors: string[]
}

type ItemLabelLayoutProps = {
  name: string
  control: React.ReactNode
  label: React.ReactNode
  labelPosition?: Position
}

type ItemsGroupLayoutProps = {
  name: string
  items: React.ReactNode
  orientation?: Orientation
}

type LabelLayoutProps = {
  label: React.ReactNode
  htmlFor?: string
}

type LabelledControlLayoutProps = {
  control: React.ReactNode
  label: React.ReactNode
  labelPosition?: Position
}

const CustomLabelledControl: React.FC<LabelledControlLayoutProps> = ({ control, label }) => {
  return (
    <div className="demo-labelled-control">
      <div>{ label }</div>
      <div>{ control }</div>
    </div>
  )
}

const CustomControl: React.FC<ControlLayoutProps> = ({ control, errors }) => {
  return (
    <div className="demo-control">
      { control }
      { errors }
    </div>
  )
}

const CustomErrors: React.FC<ErrorsLayoutProps> = ({ errors }) => {
  return (
    <div className="demo-errors">
      { errors.join(',') }
    </div>
  )
}

const CustomItemLabel: React.FC<ItemLabelLayoutProps> = ({ label, control, labelPosition = 'left' }) => {
  return (
    <label className={`demo-item-label concreteform-${labelPosition as string}`}>
      <div>{ label }</div>
      <div>{ control }</div>
    </label>
  )
}

const CustomItemsGroup: React.FC<ItemsGroupLayoutProps> = ({ items }) => {
  return (
    <div className="demo-items-group">
      { items }
    </div>
  )
}

const CustomLabel: React.FC<LabelLayoutProps> = ({ label, htmlFor }) => {
  return (
    <label className="demo-label" htmlFor={htmlFor}>
      { label }
    </label>
  )
}

/******************************************************************/

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

  const validateCheckbox = (values: any[]) => values?.length > 0
  const validateRadio = (value: any) => value !== null

  // return <DemoPositionDirection />
  // return <CustomControlDemo />
  // return <LabelledDemo />

  return (
    <>
      <h1>HTML5 Demo</h1>
      { language !== 'en' && (<button onClick={() => { setLanguage('en') }}>EN</button>) }
      { language !== 'fr' && (<button onClick={() => { setLanguage('fr') }}>FR</button>) }

      <Form
        form={form}
        onSubmit={onSubmit}
        // layout={{
        //   control: CustomControl,
        //   errors: CustomErrors,
        //   itemLabel: CustomItemLabel,
        //   itemsGroup: CustomItemsGroup,
        //   label: CustomLabel,
        //   labelledControl: CustomLabelledControl,
        // }}
        language={language}
        // translator={(...args: any[]) => { console.log(args); return 'Banana !' }}
      >
        <Input name="input" fieldProps={{ required: true, pattern: /^[a-z]+$/i, minLength: 5 }} placeholder="Input" />
        <Autocomplete name="autocomplete" fieldProps={{ required: true }} placeholder="autocomplete" />
        <FileInput name="file" />
        <Textarea name="textarea" fieldProps={{ required: true }} placeholder="textarea" />
        <Select name="selectGroup" fieldProps={{ required: true }} options={groupOptions} allowEmpty />
        <Select name="selectMultiple" fieldProps={{ required: true }} options={groupOptions} multiple allowEmpty />
        <Checkbox name="checkbox" fieldProps={{ validate: { required: validateCheckbox } }} options={options} />
        <Radio name="radio" fieldProps={{ validate: { required: validateRadio } }} options={options} />
        <DateTime type="date" name="date" fieldProps={{ required: true }} />
        <DateTime type="time" name="time" fieldProps={{ required: true }} />
        <DateTime type="datetime" name="datetime" fieldProps={{ required: true }} />
        <ToggleSwitch name="toggle" fieldProps={{ required: true }} label="I'm a toggle switch" />
        <Slider label="Optional slider label" name="slider" fieldProps={{ min: 25 }} />
        <SingleCheckbox name="acceptTerms" fieldProps={{ required: true }} label={<>I accept the <a href="#void">terms and conditions</a></>} />

        <br />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default App
