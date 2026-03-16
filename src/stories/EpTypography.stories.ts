import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Foundations',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

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
