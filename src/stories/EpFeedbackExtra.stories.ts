import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Feedback',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Banners: Story = {
  render: () => ({
    data: () => ({ show1: true, show2: true, show3: true }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Banners</p>

        <v-banner v-if="show1" color="primary" rounded="xl" class="mb-4" lines="one">
          <template #text>New version of EP Design System is available.</template>
          <template #actions>
            <v-btn variant="text" color="white" @click="show1 = false">Dismiss</v-btn>
            <v-btn variant="flat" color="white" class="text-primary">Update now</v-btn>
          </template>
        </v-banner>

        <v-banner v-if="show2" color="warning" rounded="xl" class="mb-4" lines="one" icon="mdi-alert-outline">
          <template #text>Your session expires in 10 minutes. Save your work.</template>
          <template #actions>
            <v-btn variant="text" @click="show2 = false">Dismiss</v-btn>
            <v-btn variant="flat" color="warning">Extend session</v-btn>
          </template>
        </v-banner>

        <v-banner v-if="show3" color="surface" rounded="xl" class="mb-4" lines="two" icon="mdi-information-outline">
          <template #text>
            Storybook is running in development mode. Some features may behave differently in production builds.
          </template>
          <template #actions>
            <v-btn variant="text" color="primary" @click="show3 = false">Got it</v-btn>
          </template>
        </v-banner>

        <v-btn v-if="!show1 && !show2 && !show3" color="primary" @click="show1 = show2 = show3 = true">
          Reset banners
        </v-btn>
      </v-container>
    `,
  }),
}

export const EmptyStates: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Empty States</p>
        <v-row>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl">
              <v-empty-state
                icon="mdi-magnify"
                title="No results found"
                text="Try adjusting your search or filters to find what you're looking for."
                color="primary"
              >
                <template #actions>
                  <v-btn color="primary" variant="flat" rounded="lg">Clear filters</v-btn>
                </template>
              </v-empty-state>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl">
              <v-empty-state
                icon="mdi-folder-open-outline"
                title="No components yet"
                text="Get started by creating your first component in the design system."
                color="accent"
              >
                <template #actions>
                  <v-btn color="primary" variant="flat" rounded="lg" prepend-icon="mdi-plus">Add component</v-btn>
                </template>
              </v-empty-state>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl">
              <v-empty-state
                icon="mdi-wifi-off"
                title="No connection"
                text="Check your internet connection and try again."
                color="error"
              >
                <template #actions>
                  <v-btn color="primary" variant="flat" rounded="lg" prepend-icon="mdi-refresh">Retry</v-btn>
                </template>
              </v-empty-state>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="primary" rounded="xl">
              <v-empty-state
                icon="mdi-check-circle-outline"
                title="All caught up!"
                text="You have no pending tasks. Enjoy your day."
                color="white"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const Hover: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Hover</p>
        <p class="text-body-2 text-medium-emphasis mb-6">VHover provides hover state to non-interactive elements.</p>
        <v-row>
          <v-col v-for="item in items" :key="item.title" cols="12" sm="6" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'primary' : 'surface'"
                :elevation="isHovering ? 4 : 0"
                rounded="xl"
                class="pa-5 text-center"
                style="transition: all 0.2s ease; cursor:pointer;"
              >
                <v-icon :color="isHovering ? 'white' : item.color" size="36" class="mb-3">{{ item.icon }}</v-icon>
                <div :class="isHovering ? 'text-white' : ''" class="text-body-1 font-weight-semibold mb-1">{{ item.title }}</div>
                <div :class="isHovering ? 'text-white' : 'text-medium-emphasis'" class="text-caption" style="opacity:0.8;">{{ item.desc }}</div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <p class="text-overline text-primary mt-8 mb-4">Hover with overlay</p>
        <v-row>
          <v-col v-for="item in items.slice(0,3)" :key="item.title" cols="12" sm="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props" rounded="xl" color="surface" class="overflow-hidden">
                <v-sheet :color="item.color" height="120" class="d-flex align-center justify-center">
                  <v-icon color="white" size="48">{{ item.icon }}</v-icon>
                </v-sheet>
                <v-overlay
                  :model-value="isHovering"
                  contained
                  scrim="primary"
                  opacity="0.85"
                  class="align-center justify-center"
                >
                  <v-btn color="white" variant="outlined" rounded="lg" size="small">View docs</v-btn>
                </v-overlay>
                <v-card-text class="pa-4">
                  <div class="text-body-2 font-weight-semibold">{{ item.title }}</div>
                  <div class="text-caption text-medium-emphasis">{{ item.desc }}</div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    `,
    setup() {
      const items = [
        { title: 'Colors', desc: 'Brand palette tokens', icon: 'mdi-palette-outline', color: 'primary' },
        { title: 'Typography', desc: 'Poppins type scale', icon: 'mdi-format-font', color: 'secondary' },
        { title: 'Buttons', desc: 'CTA & actions', icon: 'mdi-button-cursor', color: 'accent' },
        { title: 'Forms', desc: 'Input controls', icon: 'mdi-form-textbox', color: 'success' },
        { title: 'Cards', desc: 'Content surfaces', icon: 'mdi-card-outline', color: 'info' },
        { title: 'Navigation', desc: 'App routing', icon: 'mdi-navigation-outline', color: 'warning' },
      ]
      return { items }
    },
  }),
}

export const SnackbarQueue: Story = {
  render: () => ({
    data: () => ({ snackbars: [] as any[] }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Snackbar Queue</p>
        <p class="text-body-2 text-medium-emphasis mb-6">Multiple snackbars queued and shown sequentially.</p>

        <div class="d-flex flex-wrap ga-3 mb-6">
          <v-btn color="success" variant="tonal" prepend-icon="mdi-check" @click="add('success', 'Component saved successfully!')">Success</v-btn>
          <v-btn color="error" variant="tonal" prepend-icon="mdi-alert-circle-outline" @click="add('error', 'Failed to save. Please try again.')">Error</v-btn>
          <v-btn color="info" variant="tonal" prepend-icon="mdi-information-outline" @click="add('info', 'Storybook updated to v8.6.')">Info</v-btn>
          <v-btn color="warning" variant="tonal" prepend-icon="mdi-alert-outline" @click="add('warning', 'Unsaved changes will be lost.')">Warning</v-btn>
          <v-btn color="primary" variant="flat" prepend-icon="mdi-plus" @click="addAll">Queue all</v-btn>
        </div>

        <v-snackbar-queue
          v-model="snackbars"
          location="bottom right"
          close-on-content-click
        >
          <template #default="{ item }">
            <v-icon :color="item.color" class="mr-2">{{ item.icon }}</v-icon>
            {{ item.text }}
          </template>
        </v-snackbar-queue>
      </v-container>
    `,
    methods: {
      add(type: string, text: string) {
        const map: any = {
          success: { color: 'success', icon: 'mdi-check-circle' },
          error: { color: 'error', icon: 'mdi-alert-circle' },
          info: { color: 'info', icon: 'mdi-information' },
          warning: { color: 'warning', icon: 'mdi-alert' },
        }
        this.snackbars.push({ id: Date.now(), text, ...map[type] })
      },
      addAll() {
        this.add('success', 'Component saved successfully!')
        this.add('error', 'Failed to load assets.')
        this.add('info', 'New Storybook version available.')
        this.add('warning', 'Unsaved changes detected.')
      },
    },
  }),
}

export const Timelines: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Timelines</p>

        <v-row>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Project timeline</p>
            <v-timeline side="end" density="compact" truncate-line="both">
              <v-timeline-item
                v-for="event in events"
                :key="event.title"
                :dot-color="event.color"
                size="small"
              >
                <template #opposite>
                  <span class="text-caption text-medium-emphasis">{{ event.date }}</span>
                </template>
                <div class="text-body-2 font-weight-semibold">{{ event.title }}</div>
                <div class="text-caption text-medium-emphasis">{{ event.desc }}</div>
              </v-timeline-item>
            </v-timeline>
          </v-col>

          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Activity feed</p>
            <v-timeline density="compact" truncate-line="both">
              <v-timeline-item
                v-for="act in activity"
                :key="act.user"
                :dot-color="act.color"
                size="small"
              >
                <v-card color="surface" rounded="lg" class="pa-3">
                  <div class="d-flex align-center ga-2 mb-1">
                    <v-icon :color="act.color" size="16">{{ act.icon }}</v-icon>
                    <span class="text-caption font-weight-semibold">{{ act.user }}</span>
                  </div>
                  <div class="text-caption text-medium-emphasis">{{ act.action }}</div>
                  <div class="text-caption" style="color:#aaa;">{{ act.time }}</div>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    `,
    setup() {
      const events = [
        { title: 'Project Kickoff', desc: 'Vue 3 + Vuetify scaffolded', date: 'Jan 10', color: 'primary' },
        { title: 'Storybook Setup', desc: 'Stories initialized', date: 'Jan 15', color: 'primary' },
        { title: 'Brand Tokens', desc: '#3660F1 applied globally', date: 'Jan 20', color: 'accent' },
        { title: 'Poppins Font', desc: 'Default typeface set', date: 'Feb 1', color: 'success' },
        { title: 'GitHub Pages', desc: 'Storybook deployed', date: 'Feb 8', color: 'success' },
        { title: 'Component Library', desc: 'All Vuetify components', date: 'Mar 16', color: 'warning' },
      ]
      const activity = [
        { user: 'Alex', action: 'Added EpButton story', time: '2 min ago', icon: 'mdi-plus-circle', color: 'primary' },
        { user: 'Jordan', action: 'Updated brand colors', time: '15 min ago', icon: 'mdi-palette', color: 'accent' },
        { user: 'Sam', action: 'Pushed to main branch', time: '1 hr ago', icon: 'mdi-source-branch', color: 'success' },
        { user: 'Riley', action: 'Reviewed PR #12', time: '3 hrs ago', icon: 'mdi-check-circle', color: 'info' },
        { user: 'Morgan', action: 'Opened issue #8', time: 'Yesterday', icon: 'mdi-alert-circle', color: 'warning' },
      ]
      return { events, activity }
    },
  }),
}
