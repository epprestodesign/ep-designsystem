import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Form Inputs/Extra',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

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
              prepend-icon="mdi-image-outline"
              variant="outlined"
              density="comfortable"
            />
          </v-col>
          <v-col cols="12">
            <v-file-input
              label="Multiple files"
              multiple
              prepend-icon="mdi-paperclip"
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

export const OTPInput: Story = {
  render: () => ({
    data: () => ({ otp: '', otpDone: false }),
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">OTP Input</p>

        <v-card color="surface" rounded="xl" class="pa-8 mb-6 text-center" max-width="400">
          <v-icon color="primary" size="48" class="mb-4">mdi-shield-check-outline</v-icon>
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
