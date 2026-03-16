import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Components/Layout & Grid',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

export const Grid: Story = {
  render: () => ({
    template: `
      <div style="padding:24px; max-width:960px; margin:0 auto;">
        <p class="text-overline text-primary mb-4">12-Column Grid</p>

        <p class="text-caption text-medium-emphasis mb-2">Equal columns</p>
        <v-row class="mb-4">
          <v-col v-for="n in 3" :key="n" cols="4">
            <div class="bg-primary-lighten-2 rounded-lg pa-4 text-center text-caption font-weight-medium text-primary">col-4</div>
          </v-col>
        </v-row>

        <p class="text-caption text-medium-emphasis mb-2">Mixed columns</p>
        <v-row class="mb-4">
          <v-col cols="8">
            <div class="bg-primary rounded-lg pa-4 text-center text-caption font-weight-medium text-white">col-8</div>
          </v-col>
          <v-col cols="4">
            <div class="bg-primary-lighten-1 rounded-lg pa-4 text-center text-caption font-weight-medium text-white">col-4</div>
          </v-col>
        </v-row>

        <p class="text-caption text-medium-emphasis mb-2">Responsive breakpoints</p>
        <v-row class="mb-4">
          <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 4" :key="n">
            <div class="bg-primary-lighten-2 rounded-lg pa-4 text-center text-caption font-weight-medium text-primary">
              12 / sm:6 / md:4 / lg:3
            </div>
          </v-col>
        </v-row>

        <p class="text-caption text-medium-emphasis mb-2">Gutters</p>
        <v-row class="mb-4" :gutter="16">
          <v-col cols="6" v-for="n in 4" :key="n">
            <div class="bg-surface-variant rounded-lg pa-4 text-center text-caption font-weight-medium">col-6</div>
          </v-col>
        </v-row>
      </div>
    `,
  }),
}

export const Dividers: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Dividers</p>

        <p class="text-caption text-medium-emphasis mb-2">Default</p>
        <v-divider class="mb-6" />

        <p class="text-caption text-medium-emphasis mb-2">With label</p>
        <v-divider class="mb-6">
          <template #default>
            <span class="text-caption text-medium-emphasis px-3">or continue with</span>
          </template>
        </v-divider>

        <p class="text-caption text-medium-emphasis mb-2">Thickness</p>
        <v-divider thickness="1" class="mb-3" />
        <v-divider thickness="2" class="mb-3" />
        <v-divider thickness="4" class="mb-6" />

        <p class="text-caption text-medium-emphasis mb-4">Vertical</p>
        <div class="d-flex align-center ga-4" style="height:48px;">
          <span class="text-body-2">Home</span>
          <v-divider vertical />
          <span class="text-body-2">About</span>
          <v-divider vertical />
          <span class="text-body-2">Contact</span>
        </div>
      </v-container>
    `,
  }),
}

export const Cards: Story = {
  render: () => ({
    template: `
      <div style="padding:24px; max-width:960px; margin:0 auto;">
        <p class="text-overline text-primary mb-4">Card Layouts</p>

        <v-row>
          <!-- Stat card -->
          <v-col cols="12" sm="6" md="3" v-for="stat in stats" :key="stat.label">
            <v-card color="surface" rounded="xl">
              <v-card-text class="pa-5">
                <div class="d-flex align-center justify-space-between mb-3">
                  <v-avatar :color="stat.color" variant="tonal" size="40" rounded="lg">
                    <v-icon :color="stat.color">{{ stat.icon }}</v-icon>
                  </v-avatar>
                  <v-chip :color="stat.change > 0 ? 'success' : 'error'" variant="tonal" size="small">
                    {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}%
                  </v-chip>
                </div>
                <div class="text-h5 font-weight-bold mb-1">{{ stat.value }}</div>
                <div class="text-body-2 text-medium-emphasis">{{ stat.label }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-2">
          <!-- Content card -->
          <v-col cols="12" md="8">
            <v-card color="surface" rounded="xl">
              <v-card-title class="pa-6 pb-2 text-h6 font-weight-semibold">Recent Activity</v-card-title>
              <v-list bg-color="transparent" nav>
                <v-list-item
                  v-for="item in activity"
                  :key="item.title"
                  :title="item.title"
                  :subtitle="item.time"
                  :prepend-icon="item.icon"
                  color="primary"
                />
              </v-list>
            </v-card>
          </v-col>

          <!-- Action card -->
          <v-col cols="12" md="4">
            <v-card color="primary" rounded="xl">
              <v-card-text class="pa-6">
                <v-icon color="white" size="32" class="mb-4">mdi-rocket-launch-outline</v-icon>
                <h3 class="text-h6 font-weight-semibold text-white mb-2">Upgrade to Pro</h3>
                <p class="text-body-2 mb-6" style="color:rgba(255,255,255,0.8)">
                  Unlock all design tokens, advanced theming, and unlimited components.
                </p>
                <v-btn color="white" variant="flat" rounded="lg" block>
                  <span class="text-primary font-weight-semibold">Get started</span>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    `,
    setup() {
      const stats = [
        { label: 'Components', value: '48', change: 12, icon: 'mdi-button-cursor', color: 'primary' },
        { label: 'Design Tokens', value: '124', change: 8, icon: 'mdi-palette-outline', color: 'accent' },
        { label: 'Stories', value: '96', change: 24, icon: 'mdi-book-open-outline', color: 'success' },
        { label: 'Open Issues', value: '3', change: -40, icon: 'mdi-alert-circle-outline', color: 'warning' },
      ]
      const activity = [
        { title: 'Color tokens updated', time: '2 min ago', icon: 'mdi-palette-outline' },
        { title: 'Button variants added', time: '1 hour ago', icon: 'mdi-button-cursor' },
        { title: 'Typography reviewed', time: 'Yesterday', icon: 'mdi-format-font' },
        { title: 'Dark theme released', time: '3 days ago', icon: 'mdi-weather-night' },
      ]
      return { stats, activity }
    },
  }),
}

export const Timeline: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Timeline</p>
        <v-timeline side="end" density="compact" color="primary">
          <v-timeline-item
            v-for="event in events"
            :key="event.title"
            :dot-color="event.color"
            size="small"
          >
            <template #opposite>
              <span class="text-caption text-medium-emphasis">{{ event.date }}</span>
            </template>
            <v-card color="surface" rounded="lg">
              <v-card-text class="pa-4">
                <div class="text-body-2 font-weight-semibold mb-1">{{ event.title }}</div>
                <div class="text-caption text-medium-emphasis">{{ event.desc }}</div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    `,
    setup() {
      const events = [
        { title: 'Design System Launched', desc: 'Initial release with core components', date: 'Mar 2025', color: 'primary' },
        { title: 'Dark Theme Added', desc: 'Full dark mode support with epDark theme', date: 'Apr 2025', color: 'secondary' },
        { title: 'Storybook Integrated', desc: 'All components documented in Storybook 8', date: 'Jun 2025', color: 'accent' },
        { title: 'Poppins Font', desc: 'Switched to Poppins as the brand typeface', date: 'Mar 2026', color: 'success' },
      ]
      return { events }
    },
  }),
}
