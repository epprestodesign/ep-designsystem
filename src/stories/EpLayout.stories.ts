import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Layout',
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
  parameters: { layout: 'padded' },
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
                <v-icon color="white" size="32" class="mb-4">rocket_launch</v-icon>
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
        { label: 'Components', value: '48', change: 12, icon: 'ads_click', color: 'primary' },
        { label: 'Design Tokens', value: '124', change: 8, icon: 'palette', color: 'accent' },
        { label: 'Stories', value: '96', change: 24, icon: 'menu_book', color: 'success' },
        { label: 'Open Issues', value: '3', change: -40, icon: 'error', color: 'warning' },
      ]
      const activity = [
        { title: 'Color tokens updated', time: '2 min ago', icon: 'palette' },
        { title: 'Button variants added', time: '1 hour ago', icon: 'ads_click' },
        { title: 'Typography reviewed', time: 'Yesterday', icon: 'font_download' },
        { title: 'Dark theme released', time: '3 days ago', icon: 'nightlight' },
      ]
      return { stats, activity }
    },
  }),
}

export const ExpansionPanels: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Expansion Panels (Accordion)</p>
        <v-expansion-panels color="primary" rounded="xl">
          <v-expansion-panel
            v-for="faq in faqs"
            :key="faq.q"
            :title="faq.q"
            :text="faq.a"
            rounded="xl"
          />
        </v-expansion-panels>
      </v-container>
    `,
    setup() {
      const faqs = [
        { q: 'What is the EP Design System?', a: 'A comprehensive UI component library built on Vuetify 3 with a custom brand theme, documented in Storybook for easy prototyping and development.' },
        { q: 'What is the primary brand color?', a: 'The primary color is #3660F1 — a vibrant blue used for main CTAs, focus states, and interactive elements throughout the application.' },
        { q: 'What font does the design system use?', a: 'Poppins — a geometric sans-serif typeface from Google Fonts. It is loaded across all weights from 300 to 700.' },
        { q: 'Is dark mode supported?', a: 'Yes. The design system includes an epDark theme with a full dark color palette. Toggle between epLight and epDark using the Vuetify theme API.' },
        { q: 'How do I use these components in my app?', a: 'Import Vuetify with the EP theme plugin and use any v-* component. All components inherit brand tokens automatically.' },
      ]
      return { faqs }
    },
  }),
}

export const Windows: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    data: () => ({ window: 0 }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Windows (Transitions)</p>

        <v-card color="surface" rounded="xl">
          <v-window v-model="window">
            <v-window-item v-for="item in items" :key="item.title">
              <v-card-text class="pa-8 text-center" style="min-height:220px;">
                <v-icon :color="item.color" size="56" class="mb-4">{{ item.icon }}</v-icon>
                <h3 class="text-h6 font-weight-semibold mb-2">{{ item.title }}</h3>
                <p class="text-body-2 text-medium-emphasis">{{ item.desc }}</p>
              </v-card-text>
            </v-window-item>
          </v-window>

          <v-divider />

          <v-card-actions class="pa-4">
            <v-btn variant="text" :disabled="window === 0" @click="window--">Back</v-btn>
            <v-spacer />
            <div class="d-flex ga-1">
              <v-icon
                v-for="n in items.length"
                :key="n"
                :color="window === n - 1 ? 'primary' : 'grey-lighten-2'"
                size="10"
              >circle</v-icon>
            </div>
            <v-spacer />
            <v-btn color="primary" :disabled="window === items.length - 1" @click="window++">Next</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    `,
    setup() {
      const items = [
        { title: 'Welcome to EP Design System', desc: 'A Vuetify-powered design system with EP brand theming, documented in Storybook.', icon: 'palette', color: 'primary' },
        { title: 'Pick your colors', desc: 'Primary color #3660F1 is applied globally. All components inherit brand tokens automatically.', icon: 'colorize', color: 'accent' },
        { title: 'Choose your font', desc: 'Poppins is set as the default typeface across the entire application.', icon: 'font_download', color: 'secondary' },
        { title: "You're all set!", desc: 'Start building your application with confidence using the EP Design System.', icon: 'check_circle', color: 'success' },
      ]
      return { items }
    },
  }),
}

export const Footer: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Footers</p>

        <p class="text-caption text-medium-emphasis mb-2">Simple footer</p>
        <v-footer color="surface" class="mb-4" rounded="xl">
          <div class="d-flex justify-space-between align-center w-100">
            <span class="text-body-2 font-weight-semibold text-primary">EP Design System</span>
            <span class="text-caption text-medium-emphasis">© 2026 EventPipe</span>
          </div>
        </v-footer>

        <p class="text-caption text-medium-emphasis mb-2">Full footer</p>
        <v-footer color="secondary" class="mb-4" rounded="xl">
          <v-row class="pa-2">
            <v-col cols="12" sm="4">
              <div class="text-body-1 font-weight-semibold text-white mb-2">EP Design System</div>
              <div class="text-caption" style="color:rgba(255,255,255,0.6);">A Vuetify-based design system with EP brand theming.</div>
            </v-col>
            <v-col cols="6" sm="4">
              <div class="text-caption font-weight-semibold text-white mb-2">RESOURCES</div>
              <div class="text-caption mb-1" style="color:rgba(255,255,255,0.6);">Storybook</div>
              <div class="text-caption mb-1" style="color:rgba(255,255,255,0.6);">GitHub</div>
              <div class="text-caption" style="color:rgba(255,255,255,0.6);">Vuetify Docs</div>
            </v-col>
            <v-col cols="6" sm="4">
              <div class="text-caption font-weight-semibold text-white mb-2">COMPANY</div>
              <div class="text-caption mb-1" style="color:rgba(255,255,255,0.6);">About</div>
              <div class="text-caption mb-1" style="color:rgba(255,255,255,0.6);">Contact</div>
              <div class="text-caption" style="color:rgba(255,255,255,0.6);">Privacy</div>
            </v-col>
            <v-col cols="12">
              <v-divider color="white" opacity="0.15" class="mb-3" />
              <div class="text-caption" style="color:rgba(255,255,255,0.4);">© 2026 EventPipe. All rights reserved.</div>
            </v-col>
          </v-row>
        </v-footer>
      </v-container>
    `,
  }),
}

export const SystemBar: Story = {
  parameters: { layout: 'padded' },
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">System Bars</p>

        <p class="text-caption text-medium-emphasis mb-2">Default</p>
        <v-system-bar class="mb-4" color="surface-variant" rounded="lg">
          <v-icon>wifi</v-icon>
          <v-icon>signal_cellular_alt</v-icon>
          <v-icon>battery_full</v-icon>
          <v-spacer />
          <span class="text-caption">9:41 AM</span>
        </v-system-bar>

        <p class="text-caption text-medium-emphasis mb-2">Primary</p>
        <v-system-bar color="primary" class="mb-4" rounded="lg">
          <v-icon color="white">wifi</v-icon>
          <v-spacer />
          <span class="text-caption text-white">9:41 AM</span>
          <v-icon color="white">battery_full</v-icon>
        </v-system-bar>

        <p class="text-caption text-medium-emphasis mb-2">Window system bar</p>
        <v-system-bar window color="surface" rounded="lg">
          <v-icon>email</v-icon>
          <span class="text-caption ml-1">New message from Alex</span>
          <v-spacer />
          <v-icon>remove</v-icon>
          <v-icon>check_box_outline_blank</v-icon>
          <v-icon>close</v-icon>
        </v-system-bar>
      </v-container>
    `,
  }),
}

export const AppBar: Story = {
  render: () => ({
    data: () => ({ drawer: false }),
    template: `
      <div style="height:280px; position:relative;">
        <v-app-bar color="surface" elevation="0" border="b">
          <v-app-bar-nav-icon @click="drawer = !drawer" />
          <v-toolbar-title class="font-weight-semibold text-primary">EP Design System</v-toolbar-title>
          <v-spacer />
          <v-btn icon="search" variant="text" />
          <v-btn icon="notifications_none" variant="text">
            <v-badge color="error" content="3" floating>
              <v-icon>notifications_none</v-icon>
            </v-badge>
          </v-btn>
          <v-avatar color="primary" size="36" class="ml-2" style="cursor:pointer;">
            <span class="text-caption font-weight-bold text-white">JG</span>
          </v-avatar>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
          <v-list-item
            prepend-icon="palette"
            title="EP Design System"
            subtitle="v1.0"
            nav
          />
          <v-divider />
          <v-list nav>
            <v-list-item prepend-icon="home" title="Overview" value="overview" color="primary" />
            <v-list-item prepend-icon="palette" title="Colors" value="colors" color="primary" />
            <v-list-item prepend-icon="font_download" title="Typography" value="typography" color="primary" />
            <v-list-item prepend-icon="ads_click" title="Components" value="components" color="primary" active />
            <v-list-item prepend-icon="grid_view" title="Templates" value="templates" color="primary" />
          </v-list>
        </v-navigation-drawer>
      </div>
    `,
  }),
}
