import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Inputs',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Switches: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:600px; background:#ffffff; border-radius:16px; padding:24px;">
        <p class="text-overline text-primary mb-4">Switches</p>
        <v-row>
          <v-col cols="12" sm="4">
            <v-switch color="primary" label="On" :model-value="true" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-switch color="primary" label="Off" :model-value="false" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-switch color="primary" label="Disabled" disabled />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch color="primary" label="With messages" hint="Activates notifications" persistent-hint :model-value="true" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch color="success" label="Success color" :model-value="true" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const Radios: Story = {
  render: () => ({
    data: () => ({ group: 'option1' }),
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-2">Radio Buttons</p>
        <v-radio-group v-model="group" inline>
          <v-radio color="primary" label="Option A" value="option1" />
          <v-radio color="primary" label="Option B" value="option2" />
          <v-radio color="primary" label="Option C" value="option3" />
          <v-radio color="primary" label="Disabled" value="option4" disabled />
        </v-radio-group>
      </v-container>
    `,
  }),
}

export const Sliders: Story = {
  render: () => ({
    data: () => ({ val: 40, range: [20, 70] }),
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-6">Sliders</p>
        <v-row>
          <v-col cols="12">
            <v-slider v-model="val" color="primary" label="Default" thumb-label />
          </v-col>
          <v-col cols="12">
            <v-slider color="primary" label="With steps" step="10" thumb-label :ticks="[0,10,20,30,40,50,60,70,80,90,100]" show-ticks="always" />
          </v-col>
          <v-col cols="12">
            <v-range-slider v-model="range" color="primary" label="Range" thumb-label />
          </v-col>
          <v-col cols="12">
            <v-slider color="primary" label="Disabled" disabled model-value="30" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const NumberInputs: Story = {
  render: () => ({
    data: () => ({ qty: 1, price: 99, percent: 50 }),
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">Number Inputs</p>
        <v-row>
          <v-col cols="12">
            <v-number-input
              v-model="qty"
              label="Quantity"
              :min="0"
              :max="100"
              variant="outlined"
              density="comfortable"
              control-variant="stacked"
            />
          </v-col>
          <v-col cols="12">
            <v-number-input
              v-model="price"
              label="Price"
              :min="0"
              :step="10"
              prefix="$"
              variant="outlined"
              density="comfortable"
              control-variant="split"
            />
          </v-col>
          <v-col cols="12">
            <v-number-input
              v-model="percent"
              label="Percentage"
              :min="0"
              :max="100"
              suffix="%"
              variant="outlined"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12">
            <v-number-input label="Disabled" :model-value="42" disabled variant="outlined" density="comfortable" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const FileInputs: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">File Inputs</p>
        <v-row>
          <v-col cols="12">
            <v-file-input label="Default file input" variant="outlined" density="comfortable" />
          </v-col>
          <v-col cols="12">
            <v-file-input
              label="Accept images only"
              accept="image/*"
              prepend-icon="image"
              variant="outlined"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12">
            <v-file-input
              label="Multiple files"
              multiple
              prepend-icon="attach_file"
              variant="outlined"
              density="comfortable"
              hint="Select multiple files at once"
              persistent-hint
            />
          </v-col>
          <v-col cols="12">
            <v-file-input
              label="With chips"
              multiple
              chips
              variant="outlined"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12">
            <v-file-input
              label="Show file size"
              show-size
              variant="outlined"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12">
            <v-file-input label="Disabled" disabled variant="outlined" density="comfortable" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const OTPInput: Story = {
  render: () => ({
    data: () => ({ otp: '', otpDone: false }),
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">OTP Input</p>

        <v-card color="surface" rounded="xl" class="pa-8 mb-6 text-center" max-width="400">
          <v-icon color="primary" size="48" class="mb-4">verified_user</v-icon>
          <h3 class="text-h6 font-weight-semibold mb-2">Verify your identity</h3>
          <p class="text-body-2 text-medium-emphasis mb-6">Enter the 6-digit code sent to your phone</p>
          <v-otp-input
            v-model="otp"
            :length="6"
            type="number"
            variant="outlined"
            color="primary"
            class="mb-4"
            @finish="otpDone = true"
          />
          <v-btn color="primary" block :disabled="otp.length < 6">Verify</v-btn>
          <v-btn variant="text" color="primary" size="small" class="mt-3">Resend code</v-btn>
        </v-card>

        <p class="text-overline text-primary mb-4">Variants</p>
        <v-row>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Outlined (default)</p>
            <v-otp-input :length="4" variant="outlined" color="primary" />
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Filled</p>
            <v-otp-input :length="4" variant="filled" color="primary" />
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Solo</p>
            <v-otp-input :length="4" variant="solo" color="primary" />
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Password hidden</p>
            <v-otp-input :length="4" type="password" variant="outlined" color="primary" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

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
              prepend-inner-icon="calendar_today"
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

export const ButtonToggles: Story = {
  render: () => ({
    data: () => ({ align: 'left', view: 'grid', multi: ['bold'] }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Button Toggles</p>

        <p class="text-caption text-medium-emphasis mb-2">Exclusive (single select)</p>
        <v-btn-toggle v-model="align" color="primary" rounded="lg" density="comfortable" class="mb-6" mandatory>
          <v-btn value="left" icon="format_align_left" />
          <v-btn value="center" icon="format_align_center" />
          <v-btn value="right" icon="format_align_right" />
          <v-btn value="justify" icon="format_align_justify" />
        </v-btn-toggle>

        <p class="text-caption text-medium-emphasis mb-2">Multi-select</p>
        <v-btn-toggle v-model="multi" color="primary" rounded="lg" density="comfortable" class="mb-6" multiple>
          <v-btn value="bold" icon="format_bold" />
          <v-btn value="italic" icon="format_italic" />
          <v-btn value="underline" icon="format_underline" />
          <v-btn value="strikethrough" icon="format_strikethrough" />
        </v-btn-toggle>

        <p class="text-caption text-medium-emphasis mb-2">With text labels</p>
        <v-btn-toggle v-model="view" color="primary" rounded="lg" density="comfortable" class="mb-6" mandatory>
          <v-btn value="grid" prepend-icon="grid_view">Grid</v-btn>
          <v-btn value="list" prepend-icon="view_list">List</v-btn>
          <v-btn value="table" prepend-icon="table_chart">Table</v-btn>
        </v-btn-toggle>

        <p class="text-caption text-medium-emphasis mb-2">Outlined variant</p>
        <v-btn-toggle color="primary" rounded="lg" density="comfortable" mandatory>
          <v-btn value="day" variant="outlined">Day</v-btn>
          <v-btn value="week" variant="outlined">Week</v-btn>
          <v-btn value="month" variant="outlined">Month</v-btn>
        </v-btn-toggle>
      </v-container>
    `,
  }),
}

export const ChipGroups: Story = {
  render: () => ({
    data: () => ({ category: 'all', filters: [] }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Chip Groups</p>

        <p class="text-caption text-medium-emphasis mb-2">Single select filter</p>
        <v-chip-group v-model="category" color="primary" selected-class="text-white" class="mb-6" mandatory>
          <v-chip value="all" filter>All</v-chip>
          <v-chip value="design" filter>Design</v-chip>
          <v-chip value="development" filter>Development</v-chip>
          <v-chip value="product" filter>Product</v-chip>
          <v-chip value="marketing" filter>Marketing</v-chip>
        </v-chip-group>

        <p class="text-caption text-medium-emphasis mb-2">Multi-select</p>
        <v-chip-group v-model="filters" color="primary" multiple selected-class="text-white" class="mb-6">
          <v-chip value="vue" filter>Vue</v-chip>
          <v-chip value="react" filter>React</v-chip>
          <v-chip value="typescript" filter>TypeScript</v-chip>
          <v-chip value="figma" filter>Figma</v-chip>
          <v-chip value="storybook" filter>Storybook</v-chip>
          <v-chip value="vuetify" filter>Vuetify</v-chip>
        </v-chip-group>

        <p class="text-caption text-medium-emphasis mb-2">Column layout</p>
        <v-chip-group color="primary" column>
          <v-chip prepend-icon="palette">Colors</v-chip>
          <v-chip prepend-icon="font_download">Typography</v-chip>
          <v-chip prepend-icon="ads_click">Buttons</v-chip>
          <v-chip prepend-icon="credit_card">Cards</v-chip>
          <v-chip prepend-icon="text_fields">Forms</v-chip>
          <v-chip prepend-icon="navigation">Navigation</v-chip>
        </v-chip-group>
      </v-container>
    `,
  }),
}

export const FullFormExample: Story = {
  render: () => ({
    data: () => ({ submitted: false }),
    template: `
      <v-container style="max-width:560px;">
        <v-card color="surface" rounded="xl" class="pa-6">
          <h2 class="text-h6 font-weight-semibold mb-1">Create Account</h2>
          <p class="text-body-2 text-medium-emphasis mb-6">Fill in your details below</p>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="First name" placeholder="Justin" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Last name" placeholder="Girard" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email" prepend-inner-icon="email" placeholder="you@example.com" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password" prepend-inner-icon="lock" append-inner-icon="visibility" type="password" placeholder="••••••••" />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Role"
                :items="['Designer', 'Developer', 'Product Manager', 'Other']"
                placeholder="Select your role"
              />
            </v-col>
            <v-col cols="12">
              <v-checkbox color="primary" label="I agree to the Terms &amp; Privacy Policy" />
            </v-col>
            <v-col cols="12">
              <v-btn color="primary" block size="large">Create Account</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    `,
  }),
}
