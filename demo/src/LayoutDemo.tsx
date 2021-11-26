/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Form from '@concrete-form/react-hook-form'
import LabelledControl from '@concrete-form/html5/LabelledControl'
import Input from '@concrete-form/html5/Input'
import Checkbox from '@concrete-form/html5/Checkbox'

import { useForm } from 'react-hook-form'

import layout from './customLayout'

const LayoutDemo: React.FC = () => {
  const form = useForm({ mode: 'onTouched' })

  return (
    <Form
      form={form}
      layout={layout}
    >
      <LabelledControl label="Label">
        <Input name="test" fieldProps={{ required: 'Error message' }} />
      </LabelledControl>

      <LabelledControl label="Label">
        <Checkbox name="test2" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} fieldProps={{ required: 'Error message' }} />
      </LabelledControl>

    </Form>
  )
}

export default LayoutDemo
