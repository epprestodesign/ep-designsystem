import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Navigation',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

export const Breadcrumbs: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Breadcrumbs</p>

        <v-breadcrumbs :items="['Home', 'Design System', 'Components']" class="mb-6 px-0" color="primary" />

        <v-breadcrumbs
          :items="[
            { title: 'Home', href: '#' },
            { title: 'Components', href: '#' },
            { title: 'Components', disabled: true },
          ]"
          divider="/"
          class="mb-6 px-0"
          color="primary"
        />

        <v-breadcrumbs
          :items="[
            { title: 'Home', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'EP Design System', href: '#' },
            { title: 'Stories', disabled: true },
          ]"
          class="px-0"
          color="primary"
        >
          <template #divider>
            <v-icon size="14" color="medium-emphasis">chevron_right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    `,
  }),
}

export const Tabs: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    data: () => ({ tab: 'overview' }),
    template: `
      <div style="padding:24px;">
        <p class="text-overline text-primary mb-4">Default Tabs</p>
        <v-tabs v-model="tab" color="primary" class="mb-6">
          <v-tab value="overview">Overview</v-tab>
          <v-tab value="components">Components</v-tab>
          <v-tab value="tokens">Tokens</v-tab>
          <v-tab value="guidelines">Guidelines</v-tab>
        </v-tabs>

        <p class="text-overline text-primary mb-4">Tabs with Icons</p>
        <v-tabs color="primary" class="mb-6">
          <v-tab prepend-icon="home" value="home">Home</v-tab>
          <v-tab prepend-icon="palette" value="design">Design</v-tab>
          <v-tab prepend-icon="code" value="code">Code</v-tab>
          <v-tab prepend-icon="science" value="test" disabled>Testing</v-tab>
        </v-tabs>

        <p class="text-overline text-primary mb-4">Filled Tabs</p>
        <v-tabs color="primary" bg-color="primary-lighten-2" class="mb-6" rounded="lg">
          <v-tab value="all">All</v-tab>
          <v-tab value="active">Active</v-tab>
          <v-tab value="archived">Archived</v-tab>
        </v-tabs>

        <p class="text-overline text-primary mb-4">Vertical Tabs</p>
        <div class="d-flex" style="height:200px;">
          <v-tabs direction="vertical" color="primary">
            <v-tab value="profile" prepend-icon="account_circle">Profile</v-tab>
            <v-tab value="security" prepend-icon="lock">Security</v-tab>
            <v-tab value="billing" prepend-icon="credit_card">Billing</v-tab>
            <v-tab value="notifications" prepend-icon="notifications_none">Notifications</v-tab>
          </v-tabs>
        </div>
      </div>
    `,
  }),
}

export const Pagination: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    data: () => ({ page: 3 }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Pagination</p>

        <div class="mb-6">
          <p class="text-caption text-medium-emphasis mb-2">Default</p>
          <v-pagination v-model="page" :length="10" color="primary" rounded="lg" />
        </div>

        <div class="mb-6">
          <p class="text-caption text-medium-emphasis mb-2">Compact</p>
          <v-pagination v-model="page" :length="10" color="primary" density="compact" rounded="lg" />
        </div>

        <div class="mb-6">
          <p class="text-caption text-medium-emphasis mb-2">With boundaries</p>
          <v-pagination v-model="page" :length="20" color="primary" :total-visible="5" rounded="lg" show-first-last-page />
        </div>
      </v-container>
    `,
  }),
}

export const Stepper: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    data: () => ({ step: 2 }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Stepper</p>
        <v-stepper v-model="step" color="primary" rounded="xl" flat>
          <v-stepper-header>
            <v-stepper-item title="Account" value="1" color="primary" :complete="step > 1" />
            <v-divider />
            <v-stepper-item title="Profile" value="2" color="primary" :complete="step > 2" />
            <v-divider />
            <v-stepper-item title="Review" value="3" color="primary" :complete="step > 3" />
            <v-divider />
            <v-stepper-item title="Done" value="4" color="primary" />
          </v-stepper-header>

          <v-stepper-window>
            <v-stepper-window-item value="1">
              <v-card-text>Step 1 — Account setup content</v-card-text>
            </v-stepper-window-item>
            <v-stepper-window-item value="2">
              <v-card-text>Step 2 — Profile information content</v-card-text>
            </v-stepper-window-item>
            <v-stepper-window-item value="3">
              <v-card-text>Step 3 — Review your details</v-card-text>
            </v-stepper-window-item>
            <v-stepper-window-item value="4">
              <v-card-text>Step 4 — All done!</v-card-text>
            </v-stepper-window-item>
          </v-stepper-window>

          <div class="pa-4 d-flex ga-3">
            <v-btn color="primary" variant="text" :disabled="step <= 1" @click="step--">Back</v-btn>
            <v-spacer />
            <v-btn color="primary" :disabled="step >= 4" @click="step++">
              {{ step === 3 ? 'Submit' : 'Continue' }}
            </v-btn>
          </div>
        </v-stepper>
      </v-container>
    `,
  }),
}

export const BottomNavigation: Story = {
  render: () => ({
    data: () => ({ nav: 'home' }),
    template: `
      <div style="height:320px; position:relative; background:#F7F8FC; overflow:hidden;">
        <div style="padding:24px;">
          <p class="text-overline text-primary mb-2">Bottom Navigation</p>
          <p class="text-body-2 text-medium-emphasis">Active: {{ nav }}</p>
        </div>
        <v-bottom-navigation v-model="nav" color="primary" elevation="4" style="position:absolute; bottom:0; width:100%;">
          <v-btn value="home">
            <v-icon>home</v-icon>
            <span>Home</span>
          </v-btn>
          <v-btn value="search">
            <v-icon>search</v-icon>
            <span>Explore</span>
          </v-btn>
          <v-btn value="bookmarks">
            <v-icon>bookmark_border</v-icon>
            <span>Saved</span>
          </v-btn>
          <v-btn value="profile">
            <v-icon>person</v-icon>
            <span>Profile</span>
          </v-btn>
        </v-bottom-navigation>
      </div>
    `,
  }),
}
