import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Selection',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const ButtonToggles: Story = {
  render: () => ({
    data: () => ({ align: 'left', view: 'grid', multi: ['bold'] }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Button Toggles</p>

        <p class="text-caption text-medium-emphasis mb-2">Exclusive (single select)</p>
        <v-btn-toggle v-model="align" color="primary" rounded="lg" density="comfortable" class="mb-6" mandatory>
          <v-btn value="left" icon="mdi-format-align-left" />
          <v-btn value="center" icon="mdi-format-align-center" />
          <v-btn value="right" icon="mdi-format-align-right" />
          <v-btn value="justify" icon="mdi-format-align-justify" />
        </v-btn-toggle>

        <p class="text-caption text-medium-emphasis mb-2">Multi-select</p>
        <v-btn-toggle v-model="multi" color="primary" rounded="lg" density="comfortable" class="mb-6" multiple>
          <v-btn value="bold" icon="mdi-format-bold" />
          <v-btn value="italic" icon="mdi-format-italic" />
          <v-btn value="underline" icon="mdi-format-underline" />
          <v-btn value="strikethrough" icon="mdi-format-strikethrough" />
        </v-btn-toggle>

        <p class="text-caption text-medium-emphasis mb-2">With text labels</p>
        <v-btn-toggle v-model="view" color="primary" rounded="lg" density="comfortable" class="mb-6" mandatory>
          <v-btn value="grid" prepend-icon="mdi-view-grid-outline">Grid</v-btn>
          <v-btn value="list" prepend-icon="mdi-view-list-outline">List</v-btn>
          <v-btn value="table" prepend-icon="mdi-table">Table</v-btn>
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
          <v-chip prepend-icon="mdi-palette-outline">Colors</v-chip>
          <v-chip prepend-icon="mdi-format-font">Typography</v-chip>
          <v-chip prepend-icon="mdi-button-cursor">Buttons</v-chip>
          <v-chip prepend-icon="mdi-card-outline">Cards</v-chip>
          <v-chip prepend-icon="mdi-form-textbox">Forms</v-chip>
          <v-chip prepend-icon="mdi-navigation-outline">Navigation</v-chip>
        </v-chip-group>
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
        { title: 'Brand Colors', desc: 'Consistent color palette across all surfaces', icon: 'mdi-palette-outline', color: '#3660F1' },
        { title: 'Typography', desc: 'Poppins typeface for clear hierarchy', icon: 'mdi-format-font', color: '#1A1A2E' },
        { title: 'Components', desc: 'Vuetify 3 with EP design tokens', icon: 'mdi-button-cursor', color: '#00C2A8' },
        { title: 'Storybook', desc: 'Every component documented and interactive', icon: 'mdi-book-open-outline', color: '#E65100' },
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
              <v-icon :color="isSelected ? 'white' : 'primary'" class="mb-2">mdi-button-cursor</v-icon>
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

export const Windows: Story = {
  render: () => ({
    data: () => ({ window: 0 }),
    template: `
      <v-container style="max-width:680px;">
        <p class="text-overline text-primary mb-4">Windows (Transitions)</p>

        <v-card color="surface" rounded="xl">
          <v-window v-model="window">
            <v-window-item v-for="item in items" :key="item.title">
              <v-card-text class="pa-8 text-center" style="min-height:220px;">
                <v-icon :color="item.color" size="56" class="mb-4">{{ item.icon }}</v-icon>
                <h3 class="text-h6 font-weight-semibold mb-2">{{ item.title }}</h3>
                <p class="text-body-2 text-medium-emphasis">{{ item.desc }}</p>
              </v-card-text>
            </v-window-item>
          </v-window>

          <v-divider />

          <v-card-actions class="pa-4">
            <v-btn variant="text" :disabled="window === 0" @click="window--">Back</v-btn>
            <v-spacer />
            <div class="d-flex ga-1">
              <v-icon
                v-for="n in items.length"
                :key="n"
                :color="window === n - 1 ? 'primary' : 'grey-lighten-2'"
                size="10"
              >mdi-circle</v-icon>
            </div>
            <v-spacer />
            <v-btn color="primary" :disabled="window === items.length - 1" @click="window++">Next</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    `,
    setup() {
      const items = [
        { title: 'Welcome to EP Design System', desc: 'A Vuetify-powered design system with EP brand theming, documented in Storybook.', icon: 'mdi-palette-outline', color: 'primary' },
        { title: 'Pick your colors', desc: 'Primary color #3660F1 is applied globally. All components inherit brand tokens automatically.', icon: 'mdi-eyedropper', color: 'accent' },
        { title: 'Choose your font', desc: 'Poppins is set as the default typeface across the entire application.', icon: 'mdi-format-font', color: 'secondary' },
        { title: "You're all set!", desc: 'Start building your application with confidence using the EP Design System.', icon: 'mdi-check-circle-outline', color: 'success' },
      ]
      return { items }
    },
  }),
}
