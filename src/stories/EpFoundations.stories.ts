import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Foundations',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const ColorPalette: Story = {
  render: () => ({
    template: `
      <div style="padding: 32px;">
        <p class="text-overline text-primary mb-6">EP Brand Palette</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(152px, 1fr)); gap: 16px;">
          <div v-for="swatch in palette" :key="swatch.name">
            <div :style="{ background: swatch.hex, height: '72px', borderRadius: '12px', marginBottom: '8px', border: '1px solid rgba(0,0,0,0.08)' }"></div>
            <div class="text-body-2 font-weight-medium">{{ swatch.name }}</div>
            <div class="text-caption" style="font-family:monospace; color:#666;">{{ swatch.hex }}</div>
            <div class="text-caption text-medium-emphasis">{{ swatch.token }}</div>
          </div>
        </div>
      </div>
    `,
    setup() {
      const palette = [
        { name: 'Primary',          hex: '#3660F1', token: '--ep-color-primary' },
        { name: 'Primary Dark',     hex: '#2448C9', token: '--ep-color-primary-dark' },
        { name: 'Primary Light',    hex: '#6080F4', token: '--ep-color-primary-light' },
        { name: 'Primary Tint',     hex: '#EEF1FE', token: 'primary-lighten-2' },
        { name: 'Secondary',        hex: '#1A1A2E', token: 'secondary' },
        { name: 'Secondary Light',  hex: '#3D3D5C', token: 'secondary-lighten-1' },
        { name: 'Accent',           hex: '#00C2A8', token: 'accent' },
        { name: 'Background',       hex: '#F9F9FA', token: '--ep-color-background' },
        { name: 'Surface',          hex: '#FFFFFF', token: '--ep-color-surface' },
        { name: 'Surface Variant',  hex: '#ECEEF8', token: 'surface-variant' },
        { name: 'Error',            hex: '#D32F2F', token: '--ep-color-error' },
        { name: 'Success',          hex: '#2E7D32', token: '--ep-color-success' },
        { name: 'Warning',          hex: '#EF6C00', token: '--ep-color-warning' },
        { name: 'Info',             hex: '#0288D1', token: '--ep-color-info' },
      ]
      return { palette }
    },
  }),
}

export const Typography: Story = {
  render: () => ({
    template: `
      <div style="padding: 32px; max-width: 720px;">
        <p class="text-overline text-primary mb-6">Poppins — EP Brand Typeface</p>

        <div class="mb-10">
          <div style="font-family: 'Poppins', sans-serif; font-size: 48px; font-weight: 700; color: #1A1A2E; line-height: 1.15;">
            The quick brown fox jumps over the lazy dog
          </div>
          <div class="text-caption text-medium-emphasis mt-2">700 · Bold · 48px</div>
        </div>

        <div class="mb-8">
          <div v-for="weight in weights" :key="weight.value" class="mb-6">
            <div :style="{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: weight.value, color: '#1A1A2E', lineHeight: '1.3' }">
              {{ weight.label }} — Poppins {{ weight.name }}
            </div>
            <div class="text-caption text-medium-emphasis mt-1" style="font-family: monospace;">
              font-weight: {{ weight.value }} · {{ weight.name }}
            </div>
          </div>
        </div>

        <v-divider class="mb-6" />

        <p class="text-overline text-primary mb-4">Character Set</p>
        <div style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 400; color: #1A1A2E; line-height: 2; letter-spacing: 0.04em;">
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
          a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
          0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) — + = [ ] { }
        </div>
      </div>
    `,
    setup() {
      const weights = [
        { value: 300, name: 'Light', label: 'Aa' },
        { value: 400, name: 'Regular', label: 'Aa' },
        { value: 500, name: 'Medium', label: 'Aa' },
        { value: 600, name: 'SemiBold', label: 'Aa' },
        { value: 700, name: 'Bold', label: 'Aa' },
      ]
      return { weights }
    },
  }),
}

export const TypeScale: Story = {
  render: () => ({
    template: `
      <div style="max-width: 640px;">
        <div v-for="item in scale" :key="item.class" style="margin-bottom: 28px; border-bottom: 1px solid #ECEEF8; padding-bottom: 20px;">
          <div :class="item.class" :style="item.style">{{ item.label }}</div>
          <div style="margin-top: 6px; font-size: 12px; color: #999; font-family: monospace;">{{ item.class }} · {{ item.weight }} · {{ item.size }}</div>
        </div>
      </div>
    `,
    setup() {
      const scale = [
        { label: 'Display Heading', class: 'text-h3', style: 'font-weight: 700; color: #1A1A2E;', weight: 'Bold 700', size: '3rem' },
        { label: 'Page Title', class: 'text-h4', style: 'font-weight: 700; color: #1A1A2E;', weight: 'Bold 700', size: '2.125rem' },
        { label: 'Section Heading', class: 'text-h5', style: 'font-weight: 600; color: #1A1A2E;', weight: 'Semibold 600', size: '1.5rem' },
        { label: 'Card Title', class: 'text-h6', style: 'font-weight: 600; color: #1A1A2E;', weight: 'Semibold 600', size: '1.25rem' },
        { label: 'Body 1 — Primary reading text for paragraphs and descriptions', class: 'text-body-1', style: 'color: #1A1A2E;', weight: 'Regular 400', size: '1rem' },
        { label: 'Body 2 — Secondary reading text and supporting copy', class: 'text-body-2', style: 'color: #666;', weight: 'Regular 400', size: '0.875rem' },
        { label: 'Caption — labels, timestamps, metadata', class: 'text-caption', style: 'color: #999;', weight: 'Regular 400', size: '0.75rem' },
        { label: 'OVERLINE — category labels', class: 'text-overline', style: 'color: #3660F1;', weight: 'Medium 500', size: '0.625rem' },
      ]
      return { scale }
    },
  }),
}
