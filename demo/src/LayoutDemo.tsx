/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Form from '@concrete-form/react-hook-form'
import LabelledControl from '@concrete-form/html5/LabelledControl'
import Input from '@concrete-form/html5/Input'
import CheckboxGroup from '@concrete-form/html5/CheckboxGroup'

import { useForm } from 'react-hook-form'

import layout from './customLayout'

const LayoutDemo: React.FC = () => {
  const form = useForm({ mode: 'onTouched' })

  return (
    <Form
      form={form}
      layout={layout}
    >
      <LabelledControl
        label="Label"
        labelPosition="left"
        // mainContainerProps={{ style: { background: 'yellow' } }}
        // labelContainerProps={{ className: 'lc-label' }}
        // controlContainerProps={{ className: 'lc-control' }}
      >
        <Input name="test" fieldProps={{ required: 'Error message' }} />
      </LabelledControl>

      <LabelledControl label="Label" labelPosition="left">
        <CheckboxGroup name="test2" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} fieldProps={{ required: 'Error message' }} />
      </LabelledControl>

    </Form>
  )
}

export default LayoutDemo
