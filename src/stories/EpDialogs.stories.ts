import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Containment',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Dialogs: Story = {
  render: () => ({
    data: () => ({
      confirmDialog: false,
      formDialog: false,
      fullscreenDialog: false,
    }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Dialogs</p>
        <div class="d-flex flex-wrap ga-3">
          <v-btn color="primary" @click="confirmDialog = true">Confirm Dialog</v-btn>
          <v-btn color="primary" variant="tonal" @click="formDialog = true">Form Dialog</v-btn>
          <v-btn color="primary" variant="outlined" @click="fullscreenDialog = true">Fullscreen</v-btn>
        </div>

        <!-- Confirm Dialog -->
        <v-dialog v-model="confirmDialog" max-width="420">
          <v-card rounded="xl" color="surface">
            <v-card-title class="pa-6 pb-2 text-h6 font-weight-semibold">Delete item?</v-card-title>
            <v-card-text class="px-6 pb-2 text-body-2 text-medium-emphasis">
              This action cannot be undone. The item will be permanently removed from your account.
            </v-card-text>
            <v-card-actions class="pa-6 pt-4">
              <v-spacer />
              <v-btn variant="text" @click="confirmDialog = false">Cancel</v-btn>
              <v-btn color="error" variant="flat" rounded="lg" @click="confirmDialog = false">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Form Dialog -->
        <v-dialog v-model="formDialog" max-width="520">
          <v-card rounded="xl" color="surface">
            <v-card-title class="pa-6 pb-1 text-h6 font-weight-semibold">Invite team member</v-card-title>
            <v-card-subtitle class="px-6 pb-4 text-body-2">Send an invite link to your colleague</v-card-subtitle>
            <v-card-text class="px-6 pb-2">
              <v-text-field label="Email address" prepend-inner-icon="mdi-email-outline" placeholder="colleague@company.com" class="mb-3" />
              <v-select
                label="Role"
                :items="['Viewer', 'Editor', 'Admin']"
                model-value="Editor"
              />
            </v-card-text>
            <v-card-actions class="pa-6 pt-2">
              <v-spacer />
              <v-btn variant="text" @click="formDialog = false">Cancel</v-btn>
              <v-btn color="primary" variant="flat" rounded="lg" @click="formDialog = false">Send Invite</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Fullscreen Dialog -->
        <v-dialog v-model="fullscreenDialog" fullscreen>
          <v-card>
            <v-toolbar color="primary" flat>
              <v-btn icon="mdi-close" @click="fullscreenDialog = false" />
              <v-toolbar-title>New Project</v-toolbar-title>
              <v-spacer />
              <v-btn variant="text" @click="fullscreenDialog = false">Save</v-btn>
            </v-toolbar>
            <v-card-text class="pa-8" style="max-width:600px; margin:0 auto;">
              <h2 class="text-h5 font-weight-semibold mb-6">Project details</h2>
              <v-text-field label="Project name" placeholder="My Design System" class="mb-4" />
              <v-textarea label="Description" placeholder="What is this project about?" rows="3" class="mb-4" />
              <v-select
                label="Visibility"
                :items="['Private', 'Team', 'Public']"
                model-value="Team"
              />
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    `,
  }),
}

export const Tooltips: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-6">Tooltips</p>
        <div class="d-flex flex-wrap align-center ga-6 mb-8">
          <v-tooltip text="Default tooltip" location="top">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary">Hover me (top)</v-btn>
            </template>
          </v-tooltip>
          <v-tooltip text="Right side tooltip" location="end">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="tonal">Hover (right)</v-btn>
            </template>
          </v-tooltip>
          <v-tooltip text="Bottom tooltip" location="bottom">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="outlined">Hover (bottom)</v-btn>
            </template>
          </v-tooltip>
          <v-tooltip location="top">
            <template #activator="{ props }">
              <v-icon v-bind="props" color="primary">mdi-information-outline</v-icon>
            </template>
            <span>Tooltip on an icon</span>
          </v-tooltip>
        </div>

        <p class="text-overline text-primary mb-6">Menus</p>
        <div class="d-flex flex-wrap ga-4">
          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" append-icon="mdi-chevron-down">Options</v-btn>
            </template>
            <v-list rounded="lg" elevation="4" min-width="180">
              <v-list-item prepend-icon="mdi-pencil-outline" title="Edit" />
              <v-list-item prepend-icon="mdi-content-copy" title="Duplicate" />
              <v-list-item prepend-icon="mdi-share-outline" title="Share" />
              <v-divider />
              <v-list-item prepend-icon="mdi-delete-outline" title="Delete" class="text-error" />
            </v-list>
          </v-menu>

          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="tonal" icon="mdi-dots-vertical" />
            </template>
            <v-list rounded="lg" elevation="4" min-width="160">
              <v-list-item prepend-icon="mdi-account-outline" title="Profile" />
              <v-list-item prepend-icon="mdi-cog-outline" title="Settings" />
              <v-divider />
              <v-list-item prepend-icon="mdi-logout" title="Sign out" />
            </v-list>
          </v-menu>
        </div>
      </v-container>
    `,
  }),
}
