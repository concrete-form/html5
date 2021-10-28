import Form from '@concrete-form/react-hook-form'
import { Input, SubmitButton } from '@concrete-form/html5'

const App = () => (
  <Form onSubmit={data => console.log(data)}>
    <Input name="login" placeholder="Login" />
    <Input name="password" type="password" placeholder="Password" />
    <SubmitButton>Login</SubmitButton>
  </Form>
)

export default App
