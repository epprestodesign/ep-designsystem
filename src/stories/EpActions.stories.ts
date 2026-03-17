import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Actions',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const FloatingActionButton: Story = {
  render: () => ({
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-6">Floating Action Buttons</p>

        <p class="text-caption text-medium-emphasis mb-4">Sizes</p>
        <div class="d-flex align-center ga-6 mb-8">
          <div class="text-center">
            <v-btn color="primary" icon="add" size="x-small" elevation="4" />
            <p class="text-caption mt-2">x-small</p>
          </div>
          <div class="text-center">
            <v-btn color="primary" icon="add" size="small" elevation="4" />
            <p class="text-caption mt-2">small</p>
          </div>
          <div class="text-center">
            <v-btn color="primary" icon="add" elevation="4" />
            <p class="text-caption mt-2">default</p>
          </div>
          <div class="text-center">
            <v-btn color="primary" icon="add" size="large" elevation="4" />
            <p class="text-caption mt-2">large</p>
          </div>
        </div>

        <p class="text-caption text-medium-emphasis mb-4">Extended FAB</p>
        <div class="d-flex flex-wrap ga-4 mb-8">
          <v-btn color="primary" prepend-icon="add" elevation="4" rounded="lg">New Component</v-btn>
          <v-btn color="primary" prepend-icon="edit" elevation="4" rounded="lg" variant="tonal">Edit</v-btn>
          <v-btn color="accent" prepend-icon="share" elevation="4" rounded="lg">Share</v-btn>
        </div>

        <p class="text-caption text-medium-emphasis mb-4">Colors</p>
        <div class="d-flex align-center ga-4">
          <v-btn color="primary" icon="add" elevation="4" />
          <v-btn color="secondary" icon="edit" elevation="4" />
          <v-btn color="accent" icon="share" elevation="4" />
          <v-btn color="success" icon="check" elevation="4" />
          <v-btn color="error" icon="delete" elevation="4" />
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
            <v-btn v-bind="activatorProps" color="primary" icon="add" size="large" elevation="4" />
          </template>
          <v-btn color="accent" icon="share" elevation="2" size="small" />
          <v-btn color="info" icon="edit" elevation="2" size="small" />
          <v-btn color="success" icon="content_copy" elevation="2" size="small" />
          <v-btn color="error" icon="delete" elevation="2" size="small" />
        </v-speed-dial>
      </v-container>
    `,
  }),
}

export const Carousels: Story = {
  render: () => ({
    data: () => ({ slide: 0 }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Carousel</p>

        <v-carousel
          v-model="slide"
          color="primary"
          rounded="xl"
          height="280"
          show-arrows="hover"
          class="mb-6"
        >
          <v-carousel-item v-for="item in slides" :key="item.title">
            <v-sheet :color="item.color" height="100%" rounded="xl">
              <div class="d-flex flex-column align-center justify-center h-100 pa-8 text-center">
                <v-icon color="white" size="48" class="mb-4">{{ item.icon }}</v-icon>
                <h3 class="text-h5 font-weight-bold text-white mb-2">{{ item.title }}</h3>
                <p class="text-body-2" style="color:rgba(255,255,255,0.8);">{{ item.desc }}</p>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <p class="text-overline text-primary mb-4">Hide Delimiters</p>
        <v-carousel height="160" hide-delimiter-background show-arrows="hover" rounded="xl" color="primary">
          <v-carousel-item v-for="item in slides" :key="item.title">
            <v-sheet :color="item.color" height="100%" rounded="xl">
              <div class="d-flex align-center justify-center h-100">
                <span class="text-h6 font-weight-semibold text-white">{{ item.title }}</span>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    `,
    setup() {
      const slides = [
        { title: 'Brand Colors', desc: 'Consistent color palette across all surfaces', icon: 'palette', color: '#3660F1' },
        { title: 'Typography', desc: 'Poppins typeface for clear hierarchy', icon: 'font_download', color: '#1A1A2E' },
        { title: 'Components', desc: 'Vuetify 3 with EP design tokens', icon: 'ads_click', color: '#00C2A8' },
        { title: 'Storybook', desc: 'Every component documented and interactive', icon: 'menu_book', color: '#E65100' },
      ]
      return { slides }
    },
  }),
}

export const SlideGroups: Story = {
  render: () => ({
    data: () => ({ selected: null }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Slide Groups</p>

        <p class="text-caption text-medium-emphasis mb-2">Horizontal scroll</p>
        <v-slide-group v-model="selected" color="primary" show-arrows class="mb-6">
          <v-slide-group-item v-for="n in 8" :key="n" v-slot="{ isSelected, toggle }">
            <v-card
              :color="isSelected ? 'primary' : 'surface'"
              rounded="xl"
              class="ma-2 pa-4 text-center"
              width="120"
              @click="toggle"
              style="cursor:pointer;"
            >
              <v-icon :color="isSelected ? 'white' : 'primary'" class="mb-2">ads_click</v-icon>
              <div :class="isSelected ? 'text-white' : ''" class="text-caption font-weight-medium">Item {{ n }}</div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>

        <p class="text-caption text-medium-emphasis mb-2">Category pills</p>
        <v-slide-group show-arrows color="primary" class="mb-6">
          <v-slide-group-item v-for="cat in categories" :key="cat" v-slot="{ isSelected, toggle }">
            <v-chip
              :color="isSelected ? 'primary' : 'default'"
              :variant="isSelected ? 'flat' : 'tonal'"
              class="ma-1"
              @click="toggle"
            >{{ cat }}</v-chip>
          </v-slide-group-item>
        </v-slide-group>
      </v-container>
    `,
    setup() {
      const categories = ['All', 'Colors', 'Typography', 'Buttons', 'Forms', 'Navigation', 'Cards', 'Tables', 'Dialogs', 'Pickers']
      return { categories }
    },
  }),
}
