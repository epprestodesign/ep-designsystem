import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3'
import vuetify from '../src/plugins/vuetify'
import '../src/styles/main.css'

const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap'
document.head.appendChild(link)

setup((app) => {
  app.use(vuetify)
})

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Foundations',
          'Containment',
          'Navigation',
          'Form Inputs & Controls',
          'Data Display',
          'Layout',
          'Selection',
          'Feedback',
          'Pickers',
        ],
        locales: 'en-US',
      },
    },
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
