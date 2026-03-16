import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Foundation/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const BrandPalette: Story = {
  render: () => ({
    template: `
      <div style="padding: 32px; font-family: sans-serif;">
        <h2 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">EP Brand Palette</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px;">
          <div v-for="swatch in palette" :key="swatch.name">
            <div :style="{ background: swatch.hex, height: '80px', borderRadius: '12px', marginBottom: '8px', border: '1px solid rgba(0,0,0,0.06)' }"></div>
            <div style="font-weight: 600; font-size: 13px;">{{ swatch.name }}</div>
            <div style="color: #666; font-size: 12px; font-family: monospace;">{{ swatch.hex }}</div>
            <div style="color: #999; font-size: 11px;">{{ swatch.token }}</div>
          </div>
        </div>
      </div>
    `,
    setup() {
      const palette = [
        { name: 'Primary', hex: '#3660F1', token: 'primary' },
        { name: 'Primary Dark', hex: '#2448C9', token: 'primary-darken-1' },
        { name: 'Primary Light', hex: '#6080F4', token: 'primary-lighten-1' },
        { name: 'Primary Tint', hex: '#EEF1FE', token: 'primary-lighten-2' },
        { name: 'Secondary', hex: '#1A1A2E', token: 'secondary' },
        { name: 'Secondary Light', hex: '#3D3D5C', token: 'secondary-lighten-1' },
        { name: 'Accent', hex: '#00C2A8', token: 'accent' },
        { name: 'Background', hex: '#FFFFFF', token: 'background' },
        { name: 'Surface', hex: '#F7F8FC', token: 'surface' },
        { name: 'Surface Variant', hex: '#ECEEF8', token: 'surface-variant' },
        { name: 'Error', hex: '#D32F2F', token: 'error' },
        { name: 'Success', hex: '#2E7D32', token: 'success' },
        { name: 'Warning', hex: '#E65100', token: 'warning' },
        { name: 'Info', hex: '#1565C0', token: 'info' },
      ]
      return { palette }
    },
  }),
}
