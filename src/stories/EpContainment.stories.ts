import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Containment',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const BottomSheets: Story = {
  render: () => ({
    data: () => ({ sheet: false, sheetList: false }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Bottom Sheets</p>
        <div class="d-flex flex-wrap ga-3">
          <v-btn color="primary" @click="sheet = true">Open Bottom Sheet</v-btn>
          <v-btn color="primary" variant="tonal" @click="sheetList = true">Sheet with List</v-btn>
        </div>

        <v-bottom-sheet v-model="sheet" inset>
          <v-card rounded="t-xl" color="surface">
            <v-card-title class="pa-6 pb-2 text-h6 font-weight-semibold">Share this item</v-card-title>
            <v-card-text class="px-6 pb-2 text-body-2 text-medium-emphasis">
              Choose how you'd like to share this content with others.
            </v-card-text>
            <v-row class="pa-6 pt-2" no-gutters>
              <v-col v-for="opt in shareOptions" :key="opt.label" cols="3" class="text-center">
                <v-btn :color="opt.color" variant="tonal" icon rounded="lg" size="large" class="mb-2">
                  <v-icon>{{ opt.icon }}</v-icon>
                </v-btn>
                <div class="text-caption">{{ opt.label }}</div>
              </v-col>
            </v-row>
            <v-card-actions class="pa-4 pt-0">
              <v-btn block variant="text" @click="sheet = false">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-bottom-sheet>

        <v-bottom-sheet v-model="sheetList" inset>
          <v-card rounded="t-xl" color="surface">
            <v-list bg-color="transparent" nav>
              <v-list-subheader>ACTIONS</v-list-subheader>
              <v-list-item prepend-icon="mdi-pencil-outline" title="Edit" @click="sheetList = false" />
              <v-list-item prepend-icon="mdi-content-copy" title="Duplicate" @click="sheetList = false" />
              <v-list-item prepend-icon="mdi-share-outline" title="Share" @click="sheetList = false" />
              <v-list-item prepend-icon="mdi-download-outline" title="Download" @click="sheetList = false" />
              <v-divider />
              <v-list-item prepend-icon="mdi-delete-outline" title="Delete" class="text-error" @click="sheetList = false" />
            </v-list>
          </v-card>
        </v-bottom-sheet>
      </v-container>
    `,
    setup() {
      const shareOptions = [
        { label: 'Copy link', icon: 'mdi-link', color: 'primary' },
        { label: 'Email', icon: 'mdi-email-outline', color: 'info' },
        { label: 'Message', icon: 'mdi-message-outline', color: 'success' },
        { label: 'More', icon: 'mdi-dots-horizontal', color: 'secondary' },
      ]
      return { shareOptions }
    },
  }),
}

export const Sheets: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Sheets</p>
        <v-row>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Default</p>
            <v-sheet rounded="xl" class="pa-6">
              <p class="text-body-2">A basic sheet with default background.</p>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Colored</p>
            <v-sheet color="primary" rounded="xl" class="pa-6">
              <p class="text-body-2 text-white">A primary colored sheet.</p>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Surface variant</p>
            <v-sheet color="surface-variant" rounded="xl" class="pa-6">
              <p class="text-body-2">Surface variant sheet.</p>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Outlined</p>
            <v-sheet color="surface" rounded="xl" border="sm" class="pa-6">
              <p class="text-body-2">Outlined sheet with border.</p>
            </v-sheet>
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Elevation</p>
            <v-sheet :elevation="4" rounded="xl" class="pa-6">
              <p class="text-body-2">Sheet with elevation shadow.</p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const Toolbars: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Toolbars</p>

        <p class="text-caption text-medium-emphasis mb-2">Default</p>
        <v-toolbar rounded="lg" class="mb-4" color="surface">
          <v-btn icon="mdi-menu" variant="text" />
          <v-toolbar-title>Page Title</v-toolbar-title>
          <v-spacer />
          <v-btn icon="mdi-magnify" variant="text" />
          <v-btn icon="mdi-dots-vertical" variant="text" />
        </v-toolbar>

        <p class="text-caption text-medium-emphasis mb-2">Primary</p>
        <v-toolbar rounded="lg" class="mb-4" color="primary">
          <v-btn icon="mdi-arrow-left" variant="text" color="white" />
          <v-toolbar-title class="text-white">EP Design System</v-toolbar-title>
          <v-spacer />
          <v-btn icon="mdi-magnify" variant="text" color="white" />
          <v-btn icon="mdi-share-outline" variant="text" color="white" />
        </v-toolbar>

        <p class="text-caption text-medium-emphasis mb-2">With tabs</p>
        <v-toolbar rounded="t-lg" color="surface" class="mb-0">
          <v-btn icon="mdi-menu" variant="text" />
          <v-toolbar-title>Design System</v-toolbar-title>
          <v-spacer />
          <v-btn icon="mdi-magnify" variant="text" />
        </v-toolbar>
        <v-toolbar color="surface" class="mb-4" rounded="b-lg" height="48">
          <v-tabs color="primary" density="compact">
            <v-tab value="components">Components</v-tab>
            <v-tab value="tokens">Tokens</v-tab>
            <v-tab value="guides">Guides</v-tab>
          </v-tabs>
        </v-toolbar>

        <p class="text-caption text-medium-emphasis mb-2">Dense</p>
        <v-toolbar density="compact" rounded="lg" color="surface-variant">
          <v-btn icon="mdi-arrow-left" variant="text" size="small" />
          <v-toolbar-title class="text-body-2 font-weight-semibold">Compact toolbar</v-toolbar-title>
          <v-spacer />
          <v-btn icon="mdi-check" variant="text" color="primary" size="small" />
        </v-toolbar>
      </v-container>
    `,
  }),
}

export const Overlays: Story = {
  render: () => ({
    data: () => ({ overlay: false, overlayScrim: false }),
    template: `
      <v-container style="max-width:680px; position:relative;">
        <p class="text-overline text-primary mb-4">Overlays</p>
        <div class="d-flex flex-wrap ga-3">
          <v-btn color="primary" @click="overlay = true">Open Overlay</v-btn>
          <v-btn color="primary" variant="tonal" @click="overlayScrim = true">Custom Scrim</v-btn>
        </div>

        <v-overlay v-model="overlay" class="align-center justify-center">
          <v-card rounded="xl" color="surface" max-width="360" class="pa-2">
            <v-card-title class="pa-4 pb-2 text-h6 font-weight-semibold">Overlay Content</v-card-title>
            <v-card-text class="px-4 pb-2 text-body-2 text-medium-emphasis">
              This is an overlay. It sits on top of the page content with a scrim behind it.
            </v-card-text>
            <v-card-actions class="pa-4 pt-2">
              <v-spacer />
              <v-btn color="primary" variant="flat" rounded="lg" @click="overlay = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-overlay>

        <v-overlay v-model="overlayScrim" scrim="primary" class="align-center justify-center" opacity="0.7">
          <v-card rounded="xl" color="white" max-width="360" class="pa-2">
            <v-card-title class="pa-4 pb-2 text-h6 font-weight-semibold text-primary">Branded Scrim</v-card-title>
            <v-card-text class="px-4 pb-2 text-body-2">Primary colored scrim overlay.</v-card-text>
            <v-card-actions class="pa-4 pt-2">
              <v-spacer />
              <v-btn color="primary" variant="flat" rounded="lg" @click="overlayScrim = false">Dismiss</v-btn>
            </v-card-actions>
          </v-card>
        </v-overlay>
      </v-container>
    `,
  }),
}
