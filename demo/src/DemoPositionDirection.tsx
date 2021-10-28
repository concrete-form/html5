/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Form from '@concrete-form/react-hook-form'

import Checkbox from '@concrete-form/html5/Checkbox'
import Radio from '@concrete-form/html5/Radio'
import ToggleSwitch from '@concrete-form/html5/ToggleSwitch'
import SubmitButton from '@concrete-form/html5/SubmitButton'

import './styles.css'

const App: React.FC = () => {
  const onSubmit = (...args: any[]) => {
    console.log('Form submitted')
    console.log(args)
  }

  const options = [
    { label: 'Foo', value: 'f' },
    'Bar',
    {
      label: <span style={{ color: '#999', cursor: 'not-allowed' }}>Baz</span>, value: 'baz', props: { disabled: true },
    },
  ]

  const validateCheckbox = (values: any[]) => values?.length > 0
  const validateRadio = (value: any) => value !== null

  const columnStyle = { width: 300, padding: '10px 30px' }
  const hrStyle = { height: 1, border: 'none', background: '#b7b7b7', margin: '25px 0' }

  return (
    <>
      <h1>Orientation</h1>
      <Form formProps={{ style: { maxWidth: 'none' } }} onSubmit={onSubmit}>

        <div style={{ display: 'flex' }}>
          <div style={columnStyle}>

            <h2>Checkbox</h2>
            <h3>Vertical (<strong>default</strong>)</h3>
            <h4>right (<strong>default</strong>)</h4>

            <Checkbox name="checkbox1" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="right" />
            <h4>left</h4>
            <Checkbox name="checkbox2" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="left" />
            <h4>top</h4>
            <Checkbox name="checkbox3" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="top" />
            <h4>bottom</h4>
            <Checkbox name="checkbox4" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="bottom" />

            <hr style={hrStyle} />

            <h3>Horizontal</h3>
            <h4>right (<strong>default</strong>)</h4>
            <Checkbox name="checkbox5" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="right" />
            <h4>left</h4>
            <Checkbox name="checkbox6" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="left" />
            <h4>top</h4>
            <Checkbox name="checkbox7" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="top" />
            <h4>bottom</h4>
            <Checkbox name="checkbox8" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="bottom" />

          </div>

          <div style={columnStyle}>

            <h2>Radio</h2>
            <h3>Vertical (<strong>default</strong>)</h3>
            <h4>right (<strong>default</strong>)</h4>
            <Radio name="radio1" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="right" />
            <h4>left</h4>
            <Radio name="radio2" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="left" />
            <h4>top</h4>
            <Radio name="radio3" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="top" />
            <h4>bottom</h4>
            <Radio name="radio4" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="bottom" />

            <hr style={hrStyle} />

            <h3>Horizontal</h3>
            <h4>right (<strong>default</strong>)</h4>
            <Radio name="radio5" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="right" />
            <h4>left</h4>
            <Radio name="radio6" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="left" />
            <h4>top</h4>
            <Radio name="radio7" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="top" />
            <h4>bottom</h4>
            <Radio name="radio8" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="bottom" />

          </div>

          <div style={columnStyle}>

            <h2>Toggle Switch</h2>
            <h4>right (<strong>default</strong>)</h4>
            <ToggleSwitch name="toggle1" fieldProps={{ required: true }} label="Label" labelPosition="right" />
            <h4>left</h4>
            <ToggleSwitch name="toggle2" fieldProps={{ required: true }} label="Label" labelPosition="left" />
            <h4>top</h4>
            <ToggleSwitch name="toggle3" fieldProps={{ required: true }} label="Label" labelPosition="top" />
            <h4>bottom</h4>
            <ToggleSwitch name="toggle4" fieldProps={{ required: true }} label="Label" labelPosition="bottom" />

          </div>
        </div>

        <br />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default App