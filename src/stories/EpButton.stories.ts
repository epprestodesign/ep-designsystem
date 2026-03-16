import type { Meta, StoryObj } from '@storybook/vue3'
import { VBtn } from 'vuetify/components'

const meta: Meta<typeof VBtn> = {
  title: 'Foundation/Button',
  component: VBtn,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'error', 'success', 'warning'],
      description: 'Button color from the EP theme',
    },
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
    rounded: {
      control: 'select',
      options: ['0', 'sm', 'md', 'lg', 'xl', 'pill'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    block: { control: 'boolean' },
  },
  args: {
    color: 'primary',
    variant: 'flat',
    size: 'default',
    rounded: 'lg',
    disabled: false,
    loading: false,
    block: false,
  },
}

export default meta
type Story = StoryObj<typeof VBtn>

export const Primary: Story = {
  args: { color: 'primary', variant: 'flat', default: 'Get Started' },
  render: (args) => ({
    components: { VBtn },
    setup: () => ({ args }),
    template: `<VBtn v-bind="args">Get Started</VBtn>`,
  }),
}

export const Tonal: Story = {
  args: { color: 'primary', variant: 'tonal' },
  render: (args) => ({
    components: { VBtn },
    setup: () => ({ args }),
    template: `<VBtn v-bind="args">Learn More</VBtn>`,
  }),
}

export const Outlined: Story = {
  args: { color: 'primary', variant: 'outlined' },
  render: (args) => ({
    components: { VBtn },
    setup: () => ({ args }),
    template: `<VBtn v-bind="args">Sign In</VBtn>`,
  }),
}

export const TextOnly: Story = {
  args: { color: 'primary', variant: 'text' },
  render: (args) => ({
    components: { VBtn },
    setup: () => ({ args }),
    template: `<VBtn v-bind="args">Cancel</VBtn>`,
  }),
}

export const Loading: Story = {
  args: { color: 'primary', variant: 'flat', loading: true },
  render: (args) => ({
    components: { VBtn },
    setup: () => ({ args }),
    template: `<VBtn v-bind="args">Saving...</VBtn>`,
  }),
}

export const Disabled: Story = {
  args: { color: 'primary', variant: 'flat', disabled: true },
  render: (args) => ({
    components: { VBtn },
    setup: () => ({ args }),
    template: `<VBtn v-bind="args">Unavailable</VBtn>`,
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { VBtn },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <VBtn color="primary" variant="flat">Primary</VBtn>
        <VBtn color="primary" variant="tonal">Tonal</VBtn>
        <VBtn color="primary" variant="outlined">Outlined</VBtn>
        <VBtn color="primary" variant="text">Text</VBtn>
        <VBtn color="primary" variant="flat" :loading="true">Loading</VBtn>
        <VBtn color="primary" variant="flat" disabled>Disabled</VBtn>
      </div>
    `,
  }),
}
