import { useState } from 'react'

import { Input, Button } from 'library'

const App = () => {
  const [value, setValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  const onChange = (event: any) => {
    setValue(event.target.value)
  }

  const onClick = () => {
    setDisplayValue(value)
    setValue('')
  }

  return (
    <>
      <h1>Demo</h1>

      <Input onChange={onChange} value={value} />
      <Button onClick={onClick}>GO !</Button><br />

      { displayValue && (
        <>
          You typed : <strong>{ displayValue }</strong>
        </>
      ) }
    </>
  )
}

export default App
