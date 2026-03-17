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
        order: [
          'Foundations', ['ColorPalette', 'Typography', 'TypeScale'],
          'Layout', ['Grid', 'Dividers', 'Cards', 'ExpansionPanels', 'Windows', 'Footer', 'SystemBar', 'AppBar'],
          'Navigation', ['Breadcrumbs', 'Tabs', 'Pagination', 'Stepper', 'BottomNavigation'],
          'Inputs', ['Switches', 'Radios', 'Sliders', 'NumberInputs', 'FileInputs', 'OTPInput', 'ColorPickers', 'DatePickers', 'TimePickers', 'ButtonToggles', 'ChipGroups', 'FullFormExample'],
          'Data Display', ['Lists', 'Tables', 'Timeline', 'Ratings', 'Sparklines', 'DataIterators', 'VirtualScrollers'],
          'Feedback', ['ProgressBars', 'CircularProgress', 'Skeletons'],
          'Actions', ['FloatingActionButton', 'SpeedDial', 'Carousels', 'SlideGroups'],
          'Images & Icons', ['Icons'],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'background',
      values: [
        { name: 'background', value: '#F9F9FA' },
        { name: 'white', value: '#FFFFFF' },
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
