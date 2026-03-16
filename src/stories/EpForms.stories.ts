import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Components/Forms',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const TextFields: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">Text Fields</p>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Default" placeholder="Enter text..." />
          </v-col>
          <v-col cols="12">
            <v-text-field label="With hint" hint="This is a helpful hint" persistent-hint placeholder="Enter text..." />
          </v-col>
          <v-col cols="12">
            <v-text-field label="With prefix icon" prepend-inner-icon="mdi-magnify" placeholder="Search..." />
          </v-col>
          <v-col cols="12">
            <v-text-field label="With suffix icon" append-inner-icon="mdi-eye-outline" placeholder="Password" type="password" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Success state" color="success" model-value="Valid value" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Error state" error-messages="This field is required" model-value="" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Disabled" disabled model-value="Disabled value" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Filled variant" variant="filled" placeholder="Filled style" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Solo variant" variant="solo" placeholder="Solo style" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const Textarea: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">Textarea</p>
        <v-row>
          <v-col cols="12">
            <v-textarea label="Default textarea" placeholder="Write something..." rows="3" />
          </v-col>
          <v-col cols="12">
            <v-textarea label="Auto-grow" auto-grow placeholder="Grows as you type..." rows="2" />
          </v-col>
          <v-col cols="12">
            <v-textarea label="With counter" counter maxlength="200" placeholder="Max 200 characters" rows="3" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const Selects: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">Select &amp; Autocomplete</p>
        <v-row>
          <v-col cols="12">
            <v-select
              label="Select"
              :items="['Designer', 'Developer', 'Product Manager', 'Marketing']"
              placeholder="Choose a role"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              label="Multi-select"
              :items="['Vue', 'React', 'Angular', 'Svelte', 'Nuxt']"
              multiple
              chips
              placeholder="Select frameworks"
            />
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              label="Autocomplete"
              :items="['Adobe XD', 'Figma', 'Sketch', 'InVision', 'Framer', 'Zeplin']"
              placeholder="Search tools..."
              prepend-inner-icon="mdi-magnify"
            />
          </v-col>
          <v-col cols="12">
            <v-combobox
              label="Combobox (create tags)"
              :items="['Design', 'Development', 'UX', 'UI', 'Research']"
              multiple
              chips
              closable-chips
              placeholder="Add tags..."
            />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const CheckboxesAndRadios: Story = {
  render: () => ({
    data: () => ({ checked: true, group: 'option1' }),
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-2">Checkboxes</p>
        <v-row class="mb-4">
          <v-col cols="12" sm="4">
            <v-checkbox color="primary" label="Checked" model-value="true" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox color="primary" label="Unchecked" :model-value="false" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox color="primary" label="Disabled" disabled />
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox color="error" label="Error" error model-value="true" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox color="success" label="Success" model-value="true" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-checkbox color="primary" label="Indeterminate" :indeterminate="true" />
          </v-col>
        </v-row>

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

export const Switches: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:600px;">
        <p class="text-overline text-primary mb-4">Switches</p>
        <v-row>
          <v-col cols="12" sm="4">
            <v-switch color="primary" label="On" model-value="true" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-switch color="primary" label="Off" :model-value="false" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-switch color="primary" label="Disabled" disabled />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch color="primary" label="With messages" hint="Activates notifications" persistent-hint model-value="true" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch color="success" label="Success color" model-value="true" />
          </v-col>
        </v-row>
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

export const AllForms: Story = {
  name: 'Full Form Example',
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
              <v-text-field label="Email" prepend-inner-icon="mdi-email-outline" placeholder="you@example.com" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password" prepend-inner-icon="mdi-lock-outline" append-inner-icon="mdi-eye-outline" type="password" placeholder="••••••••" />
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
