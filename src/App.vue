<template>
  <v-app>
    <v-main>
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <div class="text-center mb-10">
              <h1 class="text-h3 font-weight-bold text-primary mb-2">EP Design System</h1>
              <p class="text-body-1 text-medium-emphasis">
                Built with Vuetify · Documented in Storybook
              </p>
            </div>

            <!-- Color Palette -->
            <v-card class="mb-6" color="surface">
              <v-card-title class="text-h6 font-weight-semibold pa-6 pb-2">Brand Colors</v-card-title>
              <v-card-text class="pa-6 pt-2">
                <v-row>
                  <v-col v-for="swatch in palette" :key="swatch.name" cols="6" sm="4" md="3">
                    <div
                      class="rounded-lg mb-2"
                      :style="{ background: swatch.hex, height: '64px' }"
                    />
                    <div class="text-caption font-weight-medium">{{ swatch.name }}</div>
                    <div class="text-caption text-medium-emphasis">{{ swatch.hex }}</div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Buttons -->
            <v-card class="mb-6" color="surface">
              <v-card-title class="text-h6 font-weight-semibold pa-6 pb-2">Buttons</v-card-title>
              <v-card-text class="pa-6 pt-2">
                <v-row align="center" class="ga-3 flex-wrap">
                  <v-btn color="primary">Primary</v-btn>
                  <v-btn color="primary" variant="tonal">Tonal</v-btn>
                  <v-btn color="primary" variant="outlined">Outlined</v-btn>
                  <v-btn color="primary" variant="text">Text</v-btn>
                  <v-btn color="primary" :loading="true">Loading</v-btn>
                  <v-btn color="primary" disabled>Disabled</v-btn>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Typography -->
            <v-card class="mb-6" color="surface">
              <v-card-title class="text-h6 font-weight-semibold pa-6 pb-2">Typography</v-card-title>
              <v-card-text class="pa-6 pt-2">
                <p class="text-h3 font-weight-bold mb-1">Display / H3</p>
                <p class="text-h5 font-weight-semibold mb-1">Heading / H5</p>
                <p class="text-h6 mb-1">Subheading / H6</p>
                <p class="text-body-1 mb-1">Body 1 — primary reading text</p>
                <p class="text-body-2 text-medium-emphasis mb-1">Body 2 — secondary reading text</p>
                <p class="text-caption text-medium-emphasis">Caption — labels and metadata</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const palette = [
  { name: 'Primary', hex: '#3660F1' },
  { name: 'Primary Dark', hex: '#2448C9' },
  { name: 'Primary Light', hex: '#6080F4' },
  { name: 'Primary Tint', hex: '#EEF1FE' },
  { name: 'Secondary', hex: '#1A1A2E' },
  { name: 'Accent', hex: '#00C2A8' },
  { name: 'Surface', hex: '#F7F8FC' },
  { name: 'Error', hex: '#D32F2F' },
]
</script>
