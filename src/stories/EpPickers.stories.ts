import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Pickers',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const ColorPickers: Story = {
  render: () => ({
    data: () => ({ color: '#3660F1', swatchColor: '#3660F1' }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Color Pickers</p>
        <v-row>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Default</p>
            <v-color-picker v-model="color" rounded="xl" elevation="0" />
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Swatches mode</p>
            <v-color-picker
              v-model="swatchColor"
              mode="hex"
              show-swatches
              rounded="xl"
              elevation="0"
              :swatches="swatches"
            />
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">In a card context</p>
            <v-card color="surface" rounded="xl" class="pa-5">
              <div class="d-flex align-center ga-4 mb-4">
                <v-sheet :color="color" rounded="lg" width="48" height="48" elevation="2" />
                <div>
                  <div class="text-body-2 font-weight-semibold">Brand primary color</div>
                  <div class="text-caption text-medium-emphasis">{{ color }}</div>
                </div>
              </div>
              <v-color-picker v-model="color" mode="hex" hide-inputs rounded="lg" elevation="0" width="100%" />
              <div class="d-flex ga-3 mt-4">
                <v-btn color="primary" variant="flat" rounded="lg" @click="color = '#3660F1'">Reset to brand</v-btn>
                <v-btn color="primary" variant="tonal" rounded="lg">Apply</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    `,
    setup() {
      const swatches = [
        ['#3660F1', '#2448C9', '#6080F4', '#EEF1FE'],
        ['#1A1A2E', '#3D3D5C', '#0D0D1A', '#A0A8D0'],
        ['#00C2A8', '#00E5C8', '#009688', '#E0F2F1'],
        ['#E65100', '#FFA726', '#FF8F00', '#FFF8E1'],
        ['#2E7D32', '#66BB6A', '#1B5E20', '#E8F5E9'],
        ['#D32F2F', '#EF5350', '#B71C1C', '#FFEBEE'],
      ]
      return { swatches }
    },
  }),
}

export const DatePickers: Story = {
  render: () => ({
    data: () => ({ date: null, dateRange: null }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Date Pickers</p>
        <v-row>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Standalone</p>
            <v-date-picker
              v-model="date"
              color="primary"
              rounded="xl"
              elevation="0"
              bg-color="surface"
            />
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">In a text field</p>
            <v-text-field
              :model-value="date ? new Date(date).toLocaleDateString() : ''"
              label="Select date"
              prepend-inner-icon="mdi-calendar-outline"
              variant="outlined"
              density="comfortable"
              readonly
              class="mb-4"
            />
            <v-card color="surface" rounded="xl" class="overflow-hidden">
              <v-date-picker
                v-model="date"
                color="primary"
                elevation="0"
                bg-color="surface"
                show-adjacent-months
              />
              <v-divider />
              <v-card-actions class="pa-3">
                <v-btn variant="text" @click="date = null">Clear</v-btn>
                <v-spacer />
                <v-btn color="primary" variant="flat" rounded="lg">Apply</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Multiple selection</p>
            <v-date-picker
              v-model="dateRange"
              color="primary"
              rounded="xl"
              elevation="0"
              bg-color="surface"
              multiple="range"
            />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const TimePickers: Story = {
  render: () => ({
    data: () => ({ time: null, time24: null }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Time Pickers</p>
        <v-row>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">12-hour format</p>
            <v-time-picker
              v-model="time"
              color="primary"
              rounded="xl"
              elevation="0"
              bg-color="surface"
            />
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">24-hour format</p>
            <v-time-picker
              v-model="time24"
              color="primary"
              format="24hr"
              rounded="xl"
              elevation="0"
              bg-color="surface"
            />
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">In a card — event scheduler</p>
            <v-card color="surface" rounded="xl" class="pa-5" max-width="380">
              <v-card-title class="pa-0 mb-1 text-body-1 font-weight-semibold">Set event time</v-card-title>
              <v-card-subtitle class="pa-0 mb-4">Choose a start time for your event</v-card-subtitle>
              <v-time-picker
                v-model="time"
                color="primary"
                elevation="0"
                bg-color="surface"
                full-width
              />
              <div class="d-flex ga-3 mt-4">
                <v-btn variant="text" @click="time = null">Clear</v-btn>
                <v-spacer />
                <v-btn color="primary" variant="flat" rounded="lg" :disabled="!time">Confirm</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}
