import '../src/styles.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      false: 'formContext',
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Controls', ['Input'], 'Controls Group', 'Form Controls', 'Layout'],
    },
  }
}
