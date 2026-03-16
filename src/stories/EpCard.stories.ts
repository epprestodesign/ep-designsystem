import type { Meta, StoryObj } from '@storybook/vue3'
import { VCard, VCardTitle, VCardSubtitle, VCardText, VCardActions, VBtn, VChip } from 'vuetify/components'

const meta: Meta<typeof VCard> = {
  title: 'Foundation/Card',
  component: VCard,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    rounded: {
      control: 'select',
      options: ['0', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text'],
    },
    elevation: { control: { type: 'range', min: 0, max: 24 } },
  },
  args: {
    rounded: 'xl',
    variant: 'flat',
    elevation: 0,
  },
}

export default meta
type Story = StoryObj<typeof VCard>

export const Default: Story = {
  render: () => ({
    components: { VCard, VCardTitle, VCardSubtitle, VCardText, VCardActions, VBtn },
    template: `
      <VCard style="width: 360px;" rounded="xl" color="surface">
        <VCardTitle class="pa-6 pb-1 text-h6 font-weight-semibold">Card Title</VCardTitle>
        <VCardSubtitle class="px-6 pb-2">Supporting subtitle text</VCardSubtitle>
        <VCardText class="px-6 pb-4 text-body-2 text-medium-emphasis">
          This card component follows EP design system conventions — rounded corners, flat elevation, and surface background color.
        </VCardText>
        <VCardActions class="px-6 pb-6">
          <VBtn color="primary" variant="flat" size="small">Action</VBtn>
          <VBtn color="primary" variant="text" size="small">Dismiss</VBtn>
        </VCardActions>
      </VCard>
    `,
  }),
}

export const Highlighted: Story = {
  render: () => ({
    components: { VCard, VCardTitle, VCardText, VCardActions, VBtn, VChip },
    template: `
      <VCard style="width: 360px; border: 2px solid #3660F1;" rounded="xl" color="surface">
        <VCardTitle class="pa-6 pb-1 d-flex align-center ga-2">
          <span class="text-h6 font-weight-semibold">Pro Plan</span>
          <VChip color="primary" size="small" variant="tonal">Popular</VChip>
        </VCardTitle>
        <VCardText class="px-6 pb-4 text-body-2 text-medium-emphasis">
          Full access to all features with priority support and advanced analytics.
        </VCardText>
        <VCardActions class="px-6 pb-6">
          <VBtn color="primary" variant="flat" block>Get Started</VBtn>
        </VCardActions>
      </VCard>
    `,
  }),
}
