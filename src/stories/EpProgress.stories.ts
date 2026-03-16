import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Feedback',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const ProgressBars: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Linear Progress</p>
        <div class="d-flex flex-column ga-6 mb-8">
          <div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption">Indeterminate</span>
            </div>
            <v-progress-linear color="primary" indeterminate rounded="pill" height="6" />
          </div>
          <div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption">25%</span>
              <span class="text-caption text-medium-emphasis">In progress</span>
            </div>
            <v-progress-linear color="primary" model-value="25" rounded="pill" height="6" />
          </div>
          <div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption">60%</span>
              <span class="text-caption text-medium-emphasis">Processing</span>
            </div>
            <v-progress-linear color="primary" model-value="60" rounded="pill" height="6" />
          </div>
          <div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption">100%</span>
              <span class="text-caption text-success">Complete</span>
            </div>
            <v-progress-linear color="success" model-value="100" rounded="pill" height="6" />
          </div>
          <div>
            <div class="d-flex justify-space-between mb-1">
              <span class="text-caption">Striped</span>
            </div>
            <v-progress-linear color="primary" model-value="70" rounded="pill" height="10" striped />
          </div>
        </div>

        <p class="text-overline text-primary mb-4">Buffer</p>
        <v-progress-linear color="primary" model-value="40" buffer-value="65" stream rounded="pill" height="6" />
      </v-container>
    `,
  }),
}

export const CircularProgress: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-6">Circular Progress</p>
        <div class="d-flex flex-wrap align-center ga-8 mb-8">
          <div class="text-center">
            <v-progress-circular color="primary" indeterminate />
            <p class="text-caption mt-2">Indeterminate</p>
          </div>
          <div class="text-center">
            <v-progress-circular color="primary" model-value="25" size="56" width="4">
              <span class="text-caption font-weight-bold">25%</span>
            </v-progress-circular>
            <p class="text-caption mt-2">25%</p>
          </div>
          <div class="text-center">
            <v-progress-circular color="primary" model-value="60" size="56" width="4">
              <span class="text-caption font-weight-bold">60%</span>
            </v-progress-circular>
            <p class="text-caption mt-2">60%</p>
          </div>
          <div class="text-center">
            <v-progress-circular color="success" model-value="100" size="56" width="4">
              <v-icon color="success">mdi-check</v-icon>
            </v-progress-circular>
            <p class="text-caption mt-2">Complete</p>
          </div>
        </div>

        <p class="text-overline text-primary mb-6">Sizes</p>
        <div class="d-flex align-center ga-6">
          <v-progress-circular color="primary" indeterminate size="24" width="2" />
          <v-progress-circular color="primary" indeterminate size="36" width="3" />
          <v-progress-circular color="primary" indeterminate size="48" width="4" />
          <v-progress-circular color="primary" indeterminate size="64" width="5" />
          <v-progress-circular color="primary" indeterminate size="80" width="6" />
        </div>
      </v-container>
    `,
  }),
}

export const Skeletons: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Skeleton Loaders</p>

        <v-row>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">Card skeleton</p>
            <v-skeleton-loader type="card" rounded="xl" />
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-caption text-medium-emphasis mb-2">List skeleton</p>
            <v-skeleton-loader type="list-item-avatar-two-line, list-item-avatar-two-line, list-item-avatar-two-line" rounded="xl" />
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Article skeleton</p>
            <v-skeleton-loader type="image, article" rounded="xl" />
          </v-col>
          <v-col cols="12">
            <p class="text-caption text-medium-emphasis mb-2">Table skeleton</p>
            <v-skeleton-loader type="table" rounded="xl" />
          </v-col>
        </v-row>
      </v-container>
    `,
  }),
}

export const Ratings: Story = {
  render: () => ({
    data: () => ({ rating: 4, halfRating: 3.5 }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-6">Ratings</p>

        <div class="mb-6">
          <p class="text-caption text-medium-emphasis mb-2">Interactive</p>
          <v-rating v-model="rating" color="primary" active-color="primary" half-increments />
          <p class="text-caption mt-1">Rating: {{ rating }}</p>
        </div>

        <div class="mb-6">
          <p class="text-caption text-medium-emphasis mb-2">Read-only</p>
          <v-rating model-value="4" color="primary" active-color="primary" readonly />
        </div>

        <div class="mb-6">
          <p class="text-caption text-medium-emphasis mb-2">Sizes</p>
          <v-rating model-value="4" color="primary" active-color="primary" size="x-small" readonly class="mb-2" />
          <v-rating model-value="4" color="primary" active-color="primary" size="small" readonly class="mb-2" />
          <v-rating model-value="4" color="primary" active-color="primary" size="default" readonly class="mb-2" />
          <v-rating model-value="4" color="primary" active-color="primary" size="large" readonly />
        </div>
      </v-container>
    `,
  }),
}
