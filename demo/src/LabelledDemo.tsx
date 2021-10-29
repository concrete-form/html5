/* eslint-disable @typescript-eslint/no-unused-vars */
import Form from '@concrete-form/react-hook-form'
import { SubmitButton, Input, Select, LabelledControl } from '@concrete-form/html5'

const App = () => {
  return (
    <Form>
      <h2>Left (default)</h2>
      <LabelledControl label="What's your name ?" labelPosition="left">
        <Input name="name" />
      </LabelledControl>

      <h2>Right</h2>
      <LabelledControl label="What's your name ?" labelPosition="right">
        <Input name="name" />
      </LabelledControl>

      <h2>Top</h2>
      <LabelledControl label="What's your name ?" labelPosition="top">
        <Input name="name" />
      </LabelledControl>

      <h2>Bottom</h2>
      <LabelledControl label="What's your name ?" labelPosition="bottom">
        <Input name="name" />
      </LabelledControl>

      <hr />

      <LabelledControl label="What's your name ?">
        <Input name="name" />
      </LabelledControl>
      <LabelledControl label="What's your name ?">
        <Select name="name" options={['foo', 'bar', 'baz']} />
      </LabelledControl>
      <LabelledControl label="What's your name ?">
        <Input name="name" />
      </LabelledControl>

      <hr />

      <LabelledControl label="What's your name ?" labelPosition="right">
        <Input name="name" />
      </LabelledControl>
      <LabelledControl label="What's your name ?" labelPosition="right">
        <Input name="name" />
      </LabelledControl>
      <LabelledControl label="What's your name ?" labelPosition="right">
        <Input name="name" />
      </LabelledControl>

      <SubmitButton>Send</SubmitButton>
    </Form>
  )
}

export default App
