import type { StorybookConfig } from '@storybook/vue3-vite'
import vuetify from 'vite-plugin-vuetify'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3-vite',
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins ?? []
    config.plugins.push(vuetify({ autoImport: true }))
    return config
  },
}

export default config
