import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Components/Data Display',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Lists: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-2">Simple List</p>
        <v-card color="surface" rounded="xl" class="mb-6">
          <v-list bg-color="transparent" nav>
            <v-list-item prepend-icon="mdi-home-outline" title="Dashboard" subtitle="Overview of your activity" color="primary" />
            <v-list-item prepend-icon="mdi-palette-outline" title="Design Tokens" subtitle="Colors, spacing, and typography" color="primary" />
            <v-list-item prepend-icon="mdi-button-cursor" title="Components" subtitle="All UI components" color="primary" active />
            <v-list-item prepend-icon="mdi-view-grid-outline" title="Templates" subtitle="Page layouts and patterns" color="primary" />
          </v-list>
        </v-card>

        <p class="text-overline text-primary mb-2">List with Avatars</p>
        <v-card color="surface" rounded="xl" class="mb-6">
          <v-list bg-color="transparent">
            <v-list-item
              v-for="user in users"
              :key="user.name"
              :subtitle="user.role"
              :title="user.name"
            >
              <template #prepend>
                <v-avatar :color="user.color" size="40" class="mr-2">
                  <span class="text-caption font-weight-bold text-white">{{ user.initials }}</span>
                </v-avatar>
              </template>
              <template #append>
                <v-chip :color="user.status === 'Active' ? 'success' : 'default'" variant="tonal" size="small">{{ user.status }}</v-chip>
              </template>
            </v-list-item>
          </v-list>
        </v-card>

        <p class="text-overline text-primary mb-2">List with Actions</p>
        <v-card color="surface" rounded="xl">
          <v-list bg-color="transparent">
            <v-list-item
              v-for="item in actions"
              :key="item.title"
              :title="item.title"
              :subtitle="item.time"
              :prepend-icon="item.icon"
              color="primary"
            >
              <template #append>
                <v-btn icon="mdi-dots-vertical" variant="text" size="small" />
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
    `,
    setup() {
      const users = [
        { name: 'Justin Girard', role: 'Lead Designer', initials: 'JG', color: 'primary', status: 'Active' },
        { name: 'Alex Chen', role: 'Frontend Developer', initials: 'AC', color: 'secondary', status: 'Active' },
        { name: 'Maria Lopez', role: 'Product Manager', initials: 'ML', color: 'accent', status: 'Away' },
        { name: 'Sam Taylor', role: 'UX Researcher', initials: 'ST', color: 'warning', status: 'Offline' },
      ]
      const actions = [
        { title: 'Color tokens updated', time: '2 min ago', icon: 'mdi-palette-outline' },
        { title: 'Button component published', time: '1 hour ago', icon: 'mdi-button-cursor' },
        { title: 'Typography scale reviewed', time: 'Yesterday', icon: 'mdi-format-font' },
        { title: 'Dark theme configured', time: '3 days ago', icon: 'mdi-weather-night' },
      ]
      return { users, actions }
    },
  }),
}

export const Avatars: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Avatar Sizes</p>
        <div class="d-flex align-center ga-4 mb-8">
          <v-avatar color="primary" size="24"><span class="text-caption font-weight-bold text-white" style="font-size:9px">JG</span></v-avatar>
          <v-avatar color="primary" size="32"><span class="text-caption font-weight-bold text-white">JG</span></v-avatar>
          <v-avatar color="primary" size="40"><span class="text-body-2 font-weight-bold text-white">JG</span></v-avatar>
          <v-avatar color="primary" size="48"><span class="text-body-1 font-weight-bold text-white">JG</span></v-avatar>
          <v-avatar color="primary" size="64"><span class="text-h6 font-weight-bold text-white">JG</span></v-avatar>
          <v-avatar color="primary" size="80"><span class="text-h5 font-weight-bold text-white">JG</span></v-avatar>
        </div>

        <p class="text-overline text-primary mb-4">Avatar Colors</p>
        <div class="d-flex align-center ga-4 mb-8">
          <v-avatar color="primary" size="48"><span class="text-body-1 font-weight-bold text-white">JG</span></v-avatar>
          <v-avatar color="secondary" size="48"><span class="text-body-1 font-weight-bold text-white">AC</span></v-avatar>
          <v-avatar color="accent" size="48"><span class="text-body-1 font-weight-bold text-white">ML</span></v-avatar>
          <v-avatar color="success" size="48"><span class="text-body-1 font-weight-bold text-white">ST</span></v-avatar>
          <v-avatar color="warning" size="48"><span class="text-body-1 font-weight-bold text-white">KP</span></v-avatar>
          <v-avatar color="error" size="48"><span class="text-body-1 font-weight-bold text-white">RM</span></v-avatar>
        </div>

        <p class="text-overline text-primary mb-4">Avatar with Icon</p>
        <div class="d-flex align-center ga-4 mb-8">
          <v-avatar color="primary" size="48"><v-icon color="white">mdi-account</v-icon></v-avatar>
          <v-avatar color="surface-variant" size="48"><v-icon color="primary">mdi-account</v-icon></v-avatar>
          <v-avatar color="primary" size="48" variant="outlined">JG</v-avatar>
        </div>

        <p class="text-overline text-primary mb-4">Avatar Group</p>
        <div class="mb-8">
          <v-avatar-group max="4">
            <v-avatar color="primary" size="44"><span class="text-body-2 font-weight-bold text-white">JG</span></v-avatar>
            <v-avatar color="secondary" size="44"><span class="text-body-2 font-weight-bold text-white">AC</span></v-avatar>
            <v-avatar color="accent" size="44"><span class="text-body-2 font-weight-bold text-white">ML</span></v-avatar>
            <v-avatar color="success" size="44"><span class="text-body-2 font-weight-bold text-white">ST</span></v-avatar>
            <v-avatar color="warning" size="44"><span class="text-body-2 font-weight-bold text-white">KP</span></v-avatar>
            <v-avatar color="error" size="44"><span class="text-body-2 font-weight-bold text-white">RM</span></v-avatar>
          </v-avatar-group>
        </div>
      </v-container>
    `,
  }),
}

export const DataTable: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:860px;">
        <p class="text-overline text-primary mb-4">Data Table</p>
        <v-card color="surface" rounded="xl">
          <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="5"
            color="primary"
          >
            <template #top>
              <v-toolbar flat color="transparent" class="px-4 pt-2">
                <v-toolbar-title class="text-h6 font-weight-semibold">Team Members</v-toolbar-title>
                <v-spacer />
                <v-text-field
                  placeholder="Search..."
                  prepend-inner-icon="mdi-magnify"
                  density="compact"
                  variant="outlined"
                  hide-details
                  style="max-width:220px;"
                />
                <v-btn color="primary" class="ml-3" prepend-icon="mdi-plus">Invite</v-btn>
              </v-toolbar>
            </template>
            <template #item.name="{ item }">
              <div class="d-flex align-center ga-3 py-2">
                <v-avatar :color="item.color" size="36">
                  <span class="text-caption font-weight-bold text-white">{{ item.initials }}</span>
                </v-avatar>
                <div>
                  <div class="text-body-2 font-weight-medium">{{ item.name }}</div>
                  <div class="text-caption text-medium-emphasis">{{ item.email }}</div>
                </div>
              </div>
            </template>
            <template #item.status="{ item }">
              <v-chip :color="item.status === 'Active' ? 'success' : item.status === 'Pending' ? 'warning' : 'default'" variant="tonal" size="small">
                {{ item.status }}
              </v-chip>
            </template>
            <template #item.actions>
              <v-btn icon="mdi-dots-vertical" variant="text" size="small" />
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    `,
    setup() {
      const headers = [
        { title: 'Name', key: 'name', sortable: true },
        { title: 'Role', key: 'role', sortable: true },
        { title: 'Department', key: 'department' },
        { title: 'Status', key: 'status' },
        { title: '', key: 'actions', sortable: false },
      ]
      const items = [
        { name: 'Justin Girard', email: 'justin@eventpipe.com', role: 'Lead Designer', department: 'Design', status: 'Active', initials: 'JG', color: 'primary' },
        { name: 'Alex Chen', email: 'alex@eventpipe.com', role: 'Frontend Developer', department: 'Engineering', status: 'Active', initials: 'AC', color: 'secondary' },
        { name: 'Maria Lopez', email: 'maria@eventpipe.com', role: 'Product Manager', department: 'Product', status: 'Active', initials: 'ML', color: 'accent' },
        { name: 'Sam Taylor', email: 'sam@eventpipe.com', role: 'UX Researcher', department: 'Design', status: 'Pending', initials: 'ST', color: 'warning' },
        { name: 'Kim Park', email: 'kim@eventpipe.com', role: 'Backend Developer', department: 'Engineering', status: 'Active', initials: 'KP', color: 'success' },
        { name: 'Ryan Moore', email: 'ryan@eventpipe.com', role: 'DevOps Engineer', department: 'Engineering', status: 'Inactive', initials: 'RM', color: 'error' },
      ]
      return { headers, items }
    },
  }),
}

export const ExpansionPanels: Story = {
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
