import Form from '@concrete-form/react-hook-form'

import ToggleSwitch from '@concrete-form/html5/ToggleSwitch'
import SubmitButton from '@concrete-form/html5/SubmitButton'

const wait = async (delay: number) => await new Promise(resolve => setTimeout(resolve, delay))

const CustomToggleSwitch: React.FC = () => {
  const onSubmit = async (data: any) => {
    await wait(1000)
    console.log('Form submitted')
    console.log(data)
  }

  return (
    <>
      <h1>Custom ToggleSwitch</h1>

      <Form
        onSubmit={onSubmit}
      >
        <ToggleSwitch name="toggle" fieldProps={{ required: true }} label="I'm a toggle switch" />

        <br />

        <ToggleSwitch
          name="toggle-custom"
          label="I'm a custom toggle switch"
          containerProps={{ className: 'custom-ts-container' }}
          toggleSwitchContainerProps={{ className: 'custom-ts' }}
          toggleSwitchSliderProps={{ className: 'custom-ts-slider' }}
        />

        <br />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default CustomToggleSwitch
