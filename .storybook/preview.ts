import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import vuetify from '../src/plugins/vuetify'

setup((app) => {
  app.use(vuetify)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'surface', value: '#F7F8FC' },
        { name: 'dark', value: '#0D0D1A' },
      ],
    },

    layout: 'centered',

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
}

export default preview
