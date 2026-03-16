import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Feedback',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Chips: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:700px;">
        <p class="text-overline text-primary mb-4">Chip Variants</p>
        <div class="d-flex flex-wrap ga-3 mb-8">
          <v-chip color="primary">Default</v-chip>
          <v-chip color="primary" variant="tonal">Tonal</v-chip>
          <v-chip color="primary" variant="outlined">Outlined</v-chip>
          <v-chip color="primary" variant="text">Text</v-chip>
          <v-chip color="primary" variant="elevated">Elevated</v-chip>
        </div>

        <p class="text-overline text-primary mb-4">Chip Sizes</p>
        <div class="d-flex flex-wrap align-center ga-3 mb-8">
          <v-chip color="primary" size="x-small">X-Small</v-chip>
          <v-chip color="primary" size="small">Small</v-chip>
          <v-chip color="primary" size="default">Default</v-chip>
          <v-chip color="primary" size="large">Large</v-chip>
        </div>

        <p class="text-overline text-primary mb-4">With Icons</p>
        <div class="d-flex flex-wrap ga-3 mb-8">
          <v-chip color="primary" prepend-icon="mdi-star">Starred</v-chip>
          <v-chip color="success" variant="tonal" prepend-icon="mdi-check-circle">Approved</v-chip>
          <v-chip color="error" variant="tonal" prepend-icon="mdi-close-circle">Rejected</v-chip>
          <v-chip color="warning" variant="tonal" prepend-icon="mdi-alert">Pending</v-chip>
          <v-chip color="info" variant="tonal" prepend-icon="mdi-information">Info</v-chip>
        </div>

        <p class="text-overline text-primary mb-4">Closable Chips</p>
        <div class="d-flex flex-wrap ga-3 mb-8">
          <v-chip color="primary" closable>Design</v-chip>
          <v-chip color="primary" variant="tonal" closable>Development</v-chip>
          <v-chip color="primary" variant="outlined" closable>UX Research</v-chip>
        </div>

        <p class="text-overline text-primary mb-4">Status Labels</p>
        <div class="d-flex flex-wrap ga-3">
          <v-chip color="success" variant="tonal" size="small">Active</v-chip>
          <v-chip color="warning" variant="tonal" size="small">Pending</v-chip>
          <v-chip color="error" variant="tonal" size="small">Inactive</v-chip>
          <v-chip color="primary" variant="tonal" size="small">New</v-chip>
          <v-chip variant="tonal" size="small">Draft</v-chip>
        </div>
      </v-container>
    `,
  }),
}

export const Badges: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:700px;">
        <p class="text-overline text-primary mb-6">Badge Variants</p>
        <div class="d-flex flex-wrap align-center ga-10 mb-10">
          <v-badge color="primary" content="4">
            <v-icon size="32">mdi-bell</v-icon>
          </v-badge>
          <v-badge color="error" content="99+">
            <v-icon size="32">mdi-email</v-icon>
          </v-badge>
          <v-badge color="success" icon="mdi-check">
            <v-icon size="32">mdi-account</v-icon>
          </v-badge>
          <v-badge color="warning" content="!">
            <v-btn color="primary" variant="tonal">Messages</v-btn>
          </v-badge>
          <v-badge color="success" dot>
            <v-avatar color="primary" size="40">
              <span class="text-body-2 font-weight-bold text-white">JG</span>
            </v-avatar>
          </v-badge>
        </div>

        <p class="text-overline text-primary mb-6">Badge Positions</p>
        <div class="d-flex flex-wrap align-center ga-10">
          <div class="text-center">
            <v-badge color="primary" content="1" location="top end">
              <v-icon size="32">mdi-bell</v-icon>
            </v-badge>
            <p class="text-caption mt-2">top end</p>
          </div>
          <div class="text-center">
            <v-badge color="primary" content="2" location="top start">
              <v-icon size="32">mdi-bell</v-icon>
            </v-badge>
            <p class="text-caption mt-2">top start</p>
          </div>
          <div class="text-center">
            <v-badge color="primary" content="3" location="bottom end">
              <v-icon size="32">mdi-bell</v-icon>
            </v-badge>
            <p class="text-caption mt-2">bottom end</p>
          </div>
          <div class="text-center">
            <v-badge color="primary" content="4" location="bottom start">
              <v-icon size="32">mdi-bell</v-icon>
            </v-badge>
            <p class="text-caption mt-2">bottom start</p>
          </div>
        </div>
      </v-container>
    `,
  }),
}
