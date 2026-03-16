import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Feedback',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Alerts: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Alert Types</p>
        <div class="d-flex flex-column ga-3 mb-8">
          <v-alert type="success" title="Success" text="Your changes have been saved successfully." variant="tonal" rounded="lg" />
          <v-alert type="info" title="Information" text="A new version of the design system is available." variant="tonal" rounded="lg" />
          <v-alert type="warning" title="Warning" text="Your session will expire in 5 minutes. Please save your work." variant="tonal" rounded="lg" />
          <v-alert type="error" title="Error" text="Something went wrong. Please try again or contact support." variant="tonal" rounded="lg" />
        </div>

        <p class="text-overline text-primary mb-4">Alert Variants</p>
        <div class="d-flex flex-column ga-3 mb-8">
          <v-alert type="info" title="Flat (default)" text="Default flat style with tonal background." variant="flat" rounded="lg" />
          <v-alert type="info" title="Outlined" text="Outlined style with a border." variant="outlined" rounded="lg" />
          <v-alert type="info" title="Tonal" text="Tonal variant with muted background." variant="tonal" rounded="lg" />
          <v-alert type="info" title="Elevated" text="Elevated card-like alert." variant="elevated" rounded="lg" />
        </div>

        <p class="text-overline text-primary mb-4">Closable Alerts</p>
        <div class="d-flex flex-column ga-3 mb-8">
          <v-alert type="success" title="Dismissible" text="Click the × to dismiss this alert." variant="tonal" rounded="lg" closable />
          <v-alert type="warning" title="With action" variant="tonal" rounded="lg" closable>
            <template #text>
              You have unsaved changes. Would you like to save before leaving?
            </template>
            <template #append>
              <v-btn color="warning" variant="text" size="small">Save now</v-btn>
            </template>
          </v-alert>
        </div>

        <p class="text-overline text-primary mb-4">Custom Alerts</p>
        <div class="d-flex flex-column ga-3">
          <v-alert
            color="primary"
            icon="mdi-rocket-launch-outline"
            title="New Feature Available"
            text="EP Design System v1 is now live. Explore all components in Storybook."
            variant="tonal"
            rounded="lg"
          />
          <v-alert
            color="primary"
            icon="mdi-shield-check-outline"
            title="Your account is verified"
            variant="outlined"
            rounded="lg"
          >
            <template #text>
              All security checks passed. You have full access to all features.
            </template>
            <template #append>
              <v-btn color="primary" variant="flat" size="small" rounded="lg">View details</v-btn>
            </template>
          </v-alert>
        </div>
      </v-container>
    `,
  }),
}

export const Snackbars: Story = {
  render: () => ({
    data: () => ({
      snackSuccess: false,
      snackError: false,
      snackInfo: false,
      snackAction: false,
    }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Snackbar / Toast</p>
        <div class="d-flex flex-wrap ga-3">
          <v-btn color="success" @click="snackSuccess = true">Show Success</v-btn>
          <v-btn color="error" @click="snackError = true">Show Error</v-btn>
          <v-btn color="primary" @click="snackInfo = true">Show Info</v-btn>
          <v-btn color="secondary" @click="snackAction = true">Show with Action</v-btn>
        </div>

        <v-snackbar v-model="snackSuccess" color="success" rounded="lg" location="bottom end" :timeout="3000">
          <v-icon class="mr-2">mdi-check-circle</v-icon> Changes saved successfully
        </v-snackbar>

        <v-snackbar v-model="snackError" color="error" rounded="lg" location="bottom end" :timeout="3000">
          <v-icon class="mr-2">mdi-alert-circle</v-icon> Something went wrong
        </v-snackbar>

        <v-snackbar v-model="snackInfo" color="primary" rounded="lg" location="bottom end" :timeout="3000">
          <v-icon class="mr-2">mdi-information</v-icon> A new update is available
        </v-snackbar>

        <v-snackbar v-model="snackAction" rounded="lg" location="bottom end" :timeout="5000">
          Item moved to trash
          <template #actions>
            <v-btn color="primary" variant="text" @click="snackAction = false">Undo</v-btn>
          </template>
        </v-snackbar>
      </v-container>
    `,
  }),
}
