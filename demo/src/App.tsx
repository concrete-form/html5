import React from 'react'
import { useForm } from 'react-hook-form'
import Form from '@concrete-form/react-hook-form'
import Input from '@concrete-form/html5/Input'
import SubmitButton from '@concrete-form/html5/SubmitButton'

const wait = async (delay: number) => await new Promise(resolve => setTimeout(resolve, delay))

const App: React.FC = () => {
  const form = useForm({ mode: 'onTouched', criteriaMode: 'all' })
  const onSubmit = async (...args: any[]) => {
    await wait(1000)
    console.log('Form submitted')
    console.log(args)
  }

  return (
    <>
      <h1>HTML5 Demo</h1>
      <Form form={form} onSubmit={onSubmit}>
        <Input name="foo" fieldProps={{ required: 'this is required' }} /><br />

        <br />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default App
