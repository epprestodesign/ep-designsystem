import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Navigation/Extra',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

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
            <v-icon>mdi-home-outline</v-icon>
            <span>Home</span>
          </v-btn>
          <v-btn value="search">
            <v-icon>mdi-magnify</v-icon>
            <span>Explore</span>
          </v-btn>
          <v-btn value="bookmarks">
            <v-icon>mdi-bookmark-outline</v-icon>
            <span>Saved</span>
          </v-btn>
          <v-btn value="profile">
            <v-icon>mdi-account-outline</v-icon>
            <span>Profile</span>
          </v-btn>
        </v-bottom-navigation>
      </div>
    `,
  }),
}

export const FloatingActionButton: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-6">Floating Action Buttons</p>

        <p class="text-caption text-medium-emphasis mb-4">Sizes</p>
        <div class="d-flex align-center ga-6 mb-8">
          <div class="text-center">
            <v-btn color="primary" icon="mdi-plus" size="x-small" elevation="4" />
            <p class="text-caption mt-2">x-small</p>
          </div>
          <div class="text-center">
            <v-btn color="primary" icon="mdi-plus" size="small" elevation="4" />
            <p class="text-caption mt-2">small</p>
          </div>
          <div class="text-center">
            <v-btn color="primary" icon="mdi-plus" elevation="4" />
            <p class="text-caption mt-2">default</p>
          </div>
          <div class="text-center">
            <v-btn color="primary" icon="mdi-plus" size="large" elevation="4" />
            <p class="text-caption mt-2">large</p>
          </div>
        </div>

        <p class="text-caption text-medium-emphasis mb-4">Extended FAB</p>
        <div class="d-flex flex-wrap ga-4 mb-8">
          <v-btn color="primary" prepend-icon="mdi-plus" elevation="4" rounded="lg">New Component</v-btn>
          <v-btn color="primary" prepend-icon="mdi-pencil-outline" elevation="4" rounded="lg" variant="tonal">Edit</v-btn>
          <v-btn color="accent" prepend-icon="mdi-share-outline" elevation="4" rounded="lg">Share</v-btn>
        </div>

        <p class="text-caption text-medium-emphasis mb-4">Colors</p>
        <div class="d-flex align-center ga-4">
          <v-btn color="primary" icon="mdi-plus" elevation="4" />
          <v-btn color="secondary" icon="mdi-pencil" elevation="4" />
          <v-btn color="accent" icon="mdi-share-variant" elevation="4" />
          <v-btn color="success" icon="mdi-check" elevation="4" />
          <v-btn color="error" icon="mdi-delete" elevation="4" />
        </div>
      </v-container>
    `,
  }),
}

export const SpeedDial: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px; min-height:340px; position:relative;">
        <p class="text-overline text-primary mb-4">Speed Dial</p>
        <p class="text-body-2 text-medium-emphasis mb-4">Click the + button at the bottom right to expand.</p>

        <v-speed-dial location="bottom end" style="position:absolute; bottom:24px; right:24px;">
          <template #activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="primary" icon="mdi-plus" size="large" elevation="4" />
          </template>
          <v-btn color="accent" icon="mdi-share-outline" elevation="2" size="small" />
          <v-btn color="info" icon="mdi-pencil-outline" elevation="2" size="small" />
          <v-btn color="success" icon="mdi-content-copy" elevation="2" size="small" />
          <v-btn color="error" icon="mdi-delete-outline" elevation="2" size="small" />
        </v-speed-dial>
      </v-container>
    `,
  }),
}

export const SystemBar: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">System Bars</p>

        <p class="text-caption text-medium-emphasis mb-2">Default</p>
        <v-system-bar class="mb-4" color="surface-variant" rounded="lg">
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-3</v-icon>
          <v-icon>mdi-battery</v-icon>
          <v-spacer />
          <span class="text-caption">9:41 AM</span>
        </v-system-bar>

        <p class="text-caption text-medium-emphasis mb-2">Primary</p>
        <v-system-bar color="primary" class="mb-4" rounded="lg">
          <v-icon color="white">mdi-wifi</v-icon>
          <v-spacer />
          <span class="text-caption text-white">9:41 AM</span>
          <v-icon color="white">mdi-battery</v-icon>
        </v-system-bar>

        <p class="text-caption text-medium-emphasis mb-2">Window system bar</p>
        <v-system-bar window color="surface" rounded="lg">
          <v-icon>mdi-message</v-icon>
          <span class="text-caption ml-1">New message from Alex</span>
          <v-spacer />
          <v-icon>mdi-minus</v-icon>
          <v-icon>mdi-checkbox-blank-outline</v-icon>
          <v-icon>mdi-close</v-icon>
        </v-system-bar>
      </v-container>
    `,
  }),
}

export const Footer: Story = {
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
