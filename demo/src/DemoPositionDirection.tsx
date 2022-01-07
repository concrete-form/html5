/* eslint-disable @typescript-eslint/no-unused-vars */
import Form from '@concrete-form/react-hook-form'

import CheckboxesGroup from '@concrete-form/html5/CheckboxesGroup'
import RadiosGroup from '@concrete-form/html5/RadiosGroup'
import ToggleSwitch from '@concrete-form/html5/ToggleSwitch'
import SingleCheckbox from '@concrete-form/html5/SingleCheckbox'
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

  const componentStyle = { background: '#000', color: '#fff' }
  const columnStyle = { width: 300, padding: '10px 30px' }
  const hrStyle = { height: 1, border: 'none', background: '#b7b7b7', margin: '25px 0' }

  return (
    <>
      <h1>Orientation</h1>
      <Form formProps={{ style: { maxWidth: 'none' } }} onSubmit={onSubmit}>

        <div style={{ display: 'flex' }}>
          <div style={columnStyle}>

            <h2 style={componentStyle}>Checkbox</h2>
            <h3>Vertical (<strong>default</strong>)</h3>
            <h4>right (<strong>default</strong>)</h4>

            <CheckboxesGroup name="checkbox1" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="right" />
            <h4>left</h4>
            <CheckboxesGroup name="checkbox2" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="left" />
            <h4>top</h4>
            <CheckboxesGroup name="checkbox3" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="top" />
            <h4>bottom</h4>
            <CheckboxesGroup name="checkbox4" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="vertical" labelPosition="bottom" />

            <hr style={hrStyle} />

            <h3>Horizontal</h3>
            <h4>right (<strong>default</strong>)</h4>
            <CheckboxesGroup name="checkbox5" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="right" />
            <h4>left</h4>
            <CheckboxesGroup name="checkbox6" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="left" />
            <h4>top</h4>
            <CheckboxesGroup name="checkbox7" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="top" />
            <h4>bottom</h4>
            <CheckboxesGroup name="checkbox8" fieldProps={{ validate: { required: validateCheckbox } }} options={options} orientation="horizontal" labelPosition="bottom" />

          </div>

          <div style={columnStyle}>

            <h2 style={componentStyle}>Radio</h2>
            <h3>Vertical (<strong>default</strong>)</h3>
            <h4>right (<strong>default</strong>)</h4>
            <RadiosGroup name="radio1" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="right" />
            <h4>left</h4>
            <RadiosGroup name="radio2" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="left" />
            <h4>top</h4>
            <RadiosGroup name="radio3" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="top" />
            <h4>bottom</h4>
            <RadiosGroup name="radio4" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="vertical" labelPosition="bottom" />

            <hr style={hrStyle} />

            <h3>Horizontal</h3>
            <h4>right (<strong>default</strong>)</h4>
            <RadiosGroup name="radio5" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="right" />
            <h4>left</h4>
            <RadiosGroup name="radio6" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="left" />
            <h4>top</h4>
            <RadiosGroup name="radio7" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="top" />
            <h4>bottom</h4>
            <RadiosGroup name="radio8" fieldProps={{ validate: { required: validateRadio } }} options={options} orientation="horizontal" labelPosition="bottom" />

          </div>

          <div style={columnStyle}>

            <h2 style={componentStyle}>Toggle Switch</h2>
            <h4>right (<strong>default</strong>)</h4>
            <ToggleSwitch name="toggle1" fieldProps={{ required: true }} label="Label" labelPosition="right" />
            <h4>left</h4>
            <ToggleSwitch name="toggle2" fieldProps={{ required: true }} label="Label" labelPosition="left" />
            <h4>top</h4>
            <ToggleSwitch name="toggle3" fieldProps={{ required: true }} label="Label" labelPosition="top" />
            <h4>bottom</h4>
            <ToggleSwitch name="toggle4" fieldProps={{ required: true }} label="Label" labelPosition="bottom" />

            <hr style={hrStyle} />

            <h2 style={componentStyle}>Single checkbox</h2>
            <h4>right (<strong>default</strong>)</h4>
            <SingleCheckbox name="toggle1" fieldProps={{ required: true }} label="Label" labelPosition="right" />
            <h4>left</h4>
            <SingleCheckbox name="toggle2" fieldProps={{ required: true }} label="Label" labelPosition="left" />
            <h4>top</h4>
            <SingleCheckbox name="toggle3" fieldProps={{ required: true }} label="Label" labelPosition="top" />
            <h4>bottom</h4>
            <SingleCheckbox name="toggle4" fieldProps={{ required: true }} label="Label" labelPosition="bottom" />

          </div>
        </div>

        <br />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default App
