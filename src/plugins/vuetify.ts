import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'epLight',
    themes: {
      epLight: {
        dark: false,
        colors: {
          primary: '#3660F1',
          'primary-darken-1': '#2448C9',
          'primary-lighten-1': '#6080F4',
          'primary-lighten-2': '#EEF1FE',
          secondary: '#1A1A2E',
          'secondary-darken-1': '#0D0D1A',
          'secondary-lighten-1': '#3D3D5C',
          accent: '#00C2A8',
          background: '#FFFFFF',
          surface: '#F7F8FC',
          'surface-variant': '#ECEEF8',
          error: '#D32F2F',
          info: '#1565C0',
          success: '#2E7D32',
          warning: '#E65100',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-background': '#1A1A2E',
          'on-surface': '#1A1A2E',
        },
      },
      epDark: {
        dark: true,
        colors: {
          primary: '#6080F4',
          'primary-darken-1': '#3660F1',
          'primary-lighten-1': '#8FA5F7',
          'primary-lighten-2': '#1A244A',
          secondary: '#A0A8D0',
          accent: '#00E5C8',
          background: '#0D0D1A',
          surface: '#1A1A2E',
          'surface-variant': '#252540',
          error: '#EF5350',
          info: '#42A5F5',
          success: '#66BB6A',
          warning: '#FFA726',
          'on-primary': '#FFFFFF',
          'on-secondary': '#0D0D1A',
          'on-background': '#E8EAFF',
          'on-surface': '#E8EAFF',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
      elevation: 0,
    },
    VCard: {
      rounded: 'xl',
      elevation: 0,
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VChip: {
      rounded: 'lg',
    },
  },
})
