import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Data Display',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Sparklines: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Sparklines</p>
        <v-row>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl" class="pa-5">
              <div class="d-flex justify-space-between align-start mb-4">
                <div>
                  <div class="text-caption text-medium-emphasis">Total Revenue</div>
                  <div class="text-h5 font-weight-bold">$48,295</div>
                  <div class="text-caption text-success">↑ 12.4% this month</div>
                </div>
                <v-icon color="primary" size="28">mdi-trending-up</v-icon>
              </div>
              <v-sparkline
                :model-value="revenueData"
                color="primary"
                line-width="2"
                padding="8"
                smooth
                fill
              />
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl" class="pa-5">
              <div class="d-flex justify-space-between align-start mb-4">
                <div>
                  <div class="text-caption text-medium-emphasis">Active Users</div>
                  <div class="text-h5 font-weight-bold">3,821</div>
                  <div class="text-caption text-error">↓ 2.1% this week</div>
                </div>
                <v-icon color="secondary" size="28">mdi-account-group-outline</v-icon>
              </div>
              <v-sparkline
                :model-value="usersData"
                color="secondary"
                line-width="2"
                padding="8"
                smooth
              />
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="primary" rounded="xl" class="pa-5">
              <div class="d-flex justify-space-between align-start mb-4">
                <div>
                  <div class="text-caption" style="color:rgba(255,255,255,0.7)">Conversions</div>
                  <div class="text-h5 font-weight-bold text-white">8.3%</div>
                  <div class="text-caption text-white" style="opacity:0.8">↑ 1.2% vs last month</div>
                </div>
                <v-icon color="white" size="28">mdi-percent-outline</v-icon>
              </div>
              <v-sparkline
                :model-value="convData"
                color="white"
                line-width="2"
                padding="8"
                smooth
                fill
              />
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl" class="pa-5">
              <div class="d-flex justify-space-between align-start mb-4">
                <div>
                  <div class="text-caption text-medium-emphasis">Bar Sparkline</div>
                  <div class="text-h5 font-weight-bold">Weekly Trend</div>
                </div>
                <v-icon color="accent" size="28">mdi-chart-bar</v-icon>
              </div>
              <v-sparkline
                :model-value="barData"
                color="accent"
                type="bar"
                line-width="8"
                padding="8"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    `,
    setup() {
      return {
        revenueData: [28, 35, 22, 48, 41, 55, 38, 62, 58, 71, 65, 80],
        usersData: [40, 38, 45, 42, 50, 47, 44, 48, 43, 46, 41, 38],
        convData: [5, 7, 6, 8, 7, 9, 8, 10, 9, 8, 10, 11],
        barData: [12, 18, 14, 22, 19, 25, 21],
      }
    },
  }),
}

export const DataIterators: Story = {
  render: () => ({
    data: () => ({ search: '', page: 1, itemsPerPage: 3 }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Data Iterators</p>

        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search components..."
          variant="outlined"
          density="comfortable"
          clearable
          class="mb-4"
        />

        <v-data-iterator
          :items="items"
          :search="search"
          :items-per-page="itemsPerPage"
          :page="page"
        >
          <template #default="{ items }">
            <v-row>
              <v-col v-for="item in items" :key="item.raw.name" cols="12" sm="6" md="4">
                <v-card color="surface" rounded="xl" height="100%">
                  <v-card-item>
                    <template #prepend>
                      <v-icon :color="item.raw.color" size="32">{{ item.raw.icon }}</v-icon>
                    </template>
                    <v-card-title class="text-body-1 font-weight-semibold">{{ item.raw.name }}</v-card-title>
                    <v-card-subtitle>{{ item.raw.category }}</v-card-subtitle>
                  </v-card-item>
                  <v-card-text class="text-body-2 text-medium-emphasis">{{ item.raw.desc }}</v-card-text>
                  <v-card-actions class="px-4 pb-4">
                    <v-chip :color="item.raw.color" size="small" variant="tonal">{{ item.raw.status }}</v-chip>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </template>
          <template #footer="{ page, pageCount, prevPage, nextPage }">
            <div class="d-flex align-center justify-center ga-4 mt-4">
              <v-btn icon="mdi-chevron-left" variant="text" :disabled="page === 1" @click="prevPage" />
              <span class="text-body-2">{{ page }} / {{ pageCount }}</span>
              <v-btn icon="mdi-chevron-right" variant="text" :disabled="page === pageCount" @click="nextPage" />
            </div>
          </template>
        </v-data-iterator>
      </v-container>
    `,
    setup() {
      const items = [
        { name: 'Buttons', category: 'Containment', icon: 'mdi-button-cursor', color: 'primary', desc: 'Trigger actions and events.', status: 'Stable' },
        { name: 'Cards', category: 'Containment', icon: 'mdi-card-outline', color: 'primary', desc: 'Surface to group related content.', status: 'Stable' },
        { name: 'Dialogs', category: 'Containment', icon: 'mdi-dock-window', color: 'info', desc: 'Modal overlays for focused tasks.', status: 'Stable' },
        { name: 'Text Fields', category: 'Forms', icon: 'mdi-form-textbox', color: 'accent', desc: 'Single line text input control.', status: 'Stable' },
        { name: 'Selects', category: 'Forms', icon: 'mdi-chevron-down-box-outline', color: 'accent', desc: 'Drop-down selection control.', status: 'Stable' },
        { name: 'Date Picker', category: 'Pickers', icon: 'mdi-calendar-outline', color: 'warning', desc: 'Calendar date selection input.', status: 'Labs' },
        { name: 'Data Table', category: 'Data & Display', icon: 'mdi-table', color: 'secondary', desc: 'Tabular data with sort & filter.', status: 'Stable' },
        { name: 'Sparklines', category: 'Data & Display', icon: 'mdi-chart-line', color: 'success', desc: 'Compact data trend charts.', status: 'Stable' },
        { name: 'Treeview', category: 'Data & Display', icon: 'mdi-file-tree', color: 'secondary', desc: 'Hierarchical list structure.', status: 'Labs' },
      ]
      return { items }
    },
  }),
}

export const Tables: Story = {
  render: () => ({
    data: () => ({ search: '', sortBy: [] }),
    template: `
      <v-container style="max-width:780px;">
        <p class="text-overline text-primary mb-4">Tables</p>

        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search..."
          variant="outlined"
          density="comfortable"
          clearable
          class="mb-4"
          style="max-width:320px;"
        />

        <v-data-table
          :headers="headers"
          :items="rows"
          :search="search"
          rounded="xl"
          color="surface"
          hover
        >
          <template #item.status="{ item }">
            <v-chip
              :color="item.status === 'Active' ? 'success' : item.status === 'Beta' ? 'warning' : 'info'"
              size="small"
              variant="tonal"
            >{{ item.status }}</v-chip>
          </template>
          <template #item.coverage="{ item }">
            <v-progress-linear
              :model-value="item.coverage"
              color="primary"
              rounded
              height="6"
              style="min-width:80px;"
            />
          </template>
        </v-data-table>
      </v-container>
    `,
    setup() {
      const headers = [
        { title: 'Component', key: 'name' },
        { title: 'Category', key: 'category' },
        { title: 'Status', key: 'status' },
        { title: 'Coverage', key: 'coverage', sortable: false },
        { title: 'Version', key: 'version' },
      ]
      const rows = [
        { name: 'VBtn', category: 'Containment', status: 'Active', coverage: 95, version: '3.x' },
        { name: 'VCard', category: 'Containment', status: 'Active', coverage: 90, version: '3.x' },
        { name: 'VTextField', category: 'Forms', status: 'Active', coverage: 88, version: '3.x' },
        { name: 'VDataTable', category: 'Data & Display', status: 'Active', coverage: 75, version: '3.x' },
        { name: 'VDatePicker', category: 'Pickers', status: 'Beta', coverage: 60, version: 'Labs' },
        { name: 'VCalendar', category: 'Data & Display', status: 'Beta', coverage: 50, version: 'Labs' },
        { name: 'VTreeview', category: 'Data & Display', status: 'Beta', coverage: 55, version: 'Labs' },
        { name: 'VOtpInput', category: 'Forms', status: 'Beta', coverage: 70, version: 'Labs' },
        { name: 'VSparkline', category: 'Data & Display', status: 'Active', coverage: 85, version: '3.x' },
        { name: 'VSnackbar', category: 'Feedback', status: 'Active', coverage: 92, version: '3.x' },
      ]
      return { headers, rows }
    },
  }),
}

export const VirtualScrollers: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Virtual Scrollers</p>
        <p class="text-body-2 text-medium-emphasis mb-4">Rendering 500 items efficiently — only visible rows are mounted in the DOM.</p>

        <v-card color="surface" rounded="xl">
          <v-virtual-scroll :items="items" height="360" item-height="64">
            <template #default="{ item, index }">
              <v-list-item
                :title="item.name"
                :subtitle="item.role"
                :value="item.id"
              >
                <template #prepend>
                  <v-avatar :color="item.color" size="36" class="mr-1 text-white text-caption font-weight-bold">
                    {{ item.initials }}
                  </v-avatar>
                </template>
                <template #append>
                  <v-chip :color="item.statusColor" size="x-small" variant="tonal">{{ item.status }}</v-chip>
                </template>
              </v-list-item>
              <v-divider v-if="index < items.length - 1" />
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-container>
    `,
    setup() {
      const colors = ['primary', 'secondary', 'accent', 'success', 'warning', 'info']
      const roles = ['Designer', 'Developer', 'Product Manager', 'Engineer', 'Analyst', 'Marketer']
      const statuses = [{ label: 'Active', color: 'success' }, { label: 'Away', color: 'warning' }, { label: 'Offline', color: 'default' }]
      const items = Array.from({ length: 500 }, (_, i) => {
        const first = ['Alex', 'Jordan', 'Sam', 'Riley', 'Morgan', 'Casey', 'Taylor', 'Avery'][i % 8]
        const last = ['Smith', 'Johnson', 'Lee', 'Brown', 'Davis', 'Wilson', 'Moore', 'Taylor'][i % 8]
        const s = statuses[i % 3]
        return {
          id: i,
          name: `${first} ${last}`,
          initials: `${first[0]}${last[0]}`,
          role: roles[i % roles.length],
          color: colors[i % colors.length],
          status: s.label,
          statusColor: s.color,
        }
      })
      return { items }
    },
  }),
}

export const Treeview: Story = {
  render: () => ({
    data: () => ({ selected: [], opened: [1, 3] }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Treeview</p>
        <v-row>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl">
              <v-card-title class="pa-4 pb-2 text-body-1 font-weight-semibold">Design System Files</v-card-title>
              <v-treeview
                :items="tree"
                item-value="id"
                color="primary"
                open-on-click
                class="pa-2"
              >
                <template #prepend="{ item, isOpen }">
                  <v-icon :color="item.children ? 'primary' : 'medium-emphasis'">
                    {{ item.children ? (isOpen ? 'mdi-folder-open' : 'mdi-folder') : item.icon }}
                  </v-icon>
                </template>
              </v-treeview>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="surface" rounded="xl">
              <v-card-title class="pa-4 pb-2 text-body-1 font-weight-semibold">Selectable</v-card-title>
              <v-treeview
                v-model:selected="selected"
                :items="tree"
                item-value="id"
                color="primary"
                selectable
                open-on-click
                class="pa-2"
              >
                <template #prepend="{ item, isOpen }">
                  <v-icon :color="item.children ? 'primary' : 'medium-emphasis'">
                    {{ item.children ? (isOpen ? 'mdi-folder-open' : 'mdi-folder') : item.icon }}
                  </v-icon>
                </template>
              </v-treeview>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    `,
    setup() {
      const tree = [
        {
          id: 1, title: 'src', children: [
            {
              id: 2, title: 'stories', children: [
                { id: 5, title: 'EpButton.stories.ts', icon: 'mdi-language-typescript' },
                { id: 6, title: 'EpCard.stories.ts', icon: 'mdi-language-typescript' },
                { id: 7, title: 'EpColors.stories.ts', icon: 'mdi-language-typescript' },
                { id: 8, title: 'EpForms.stories.ts', icon: 'mdi-language-typescript' },
              ]
            },
            {
              id: 3, title: 'plugins', children: [
                { id: 9, title: 'vuetify.ts', icon: 'mdi-language-typescript' },
              ]
            },
            { id: 10, title: 'main.ts', icon: 'mdi-language-typescript' },
            { id: 11, title: 'App.vue', icon: 'mdi-vuejs' },
          ]
        },
        {
          id: 4, title: '.storybook', children: [
            { id: 12, title: 'main.ts', icon: 'mdi-language-typescript' },
            { id: 13, title: 'preview.ts', icon: 'mdi-language-typescript' },
          ]
        },
        { id: 14, title: 'package.json', icon: 'mdi-code-json' },
        { id: 15, title: 'vite.config.ts', icon: 'mdi-language-typescript' },
      ]
      return { tree }
    },
  }),
}
