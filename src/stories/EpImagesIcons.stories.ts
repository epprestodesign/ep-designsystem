import { ref, computed, defineComponent } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import 'material-icons/iconfont/material-icons.css'
import iconVersions from 'material-icons/_data/versions.json'

const allIcons: string[] = Object.keys(iconVersions).sort()

const meta: Meta = {
  title: 'Images & Icons',
}
export default meta

type Story = StoryObj

const variantOptions = [
  { label: 'Filled',   value: 'filled',   cls: 'material-icons' },
  { label: 'Outlined', value: 'outlined', cls: 'material-icons-outlined' },
  { label: 'Rounded',  value: 'round',    cls: 'material-icons-round' },
  { label: 'Sharp',    value: 'sharp',    cls: 'material-icons-sharp' },
  { label: 'Two-Tone', value: 'two-tone', cls: 'material-icons-two-tone' },
]

const IconsComponent = defineComponent({
  setup() {
    const search  = ref('')
    const variant = ref('filled')

    const iconClass = computed(
      () => variantOptions.find(v => v.value === variant.value)?.cls ?? 'material-icons'
    )

    const filtered = computed(() => {
      const q = search.value.trim().toLowerCase().replace(/\s+/g, '_')
      return q ? allIcons.filter(n => n.includes(q)) : allIcons
    })

    return { search, variant, variantOptions, iconClass, filtered, total: allIcons.length }
  },
  template: `
    <div style="font-family: Poppins, sans-serif; padding: 24px; background: #F9F9FA; min-height: 100vh;">

      <!-- Header -->
      <div style="margin-bottom: 24px;">
        <p style="font-size: 11px; font-weight: 600; letter-spacing: 0.1em; color: #3660F1; text-transform: uppercase; margin: 0 0 6px;">Images & Icons</p>
        <h1 style="font-size: 28px; font-weight: 600; margin: 0 0 4px; color: #1A1A2E;">Material Design Icons</h1>
        <p style="font-size: 14px; color: #666; margin: 0;">
          {{ total.toLocaleString() }} icons from
          <a href="https://github.com/google/material-design-icons" target="_blank" style="color: #3660F1;">google/material-design-icons</a>
        </p>
      </div>

      <!-- Controls bar -->
      <div style="background:#fff; border:1px solid #D7D9E4; border-radius:12px; padding:16px 20px; margin-bottom:24px; display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
        <div style="position:relative; flex:1; min-width:220px;">
          <span class="material-icons" style="position:absolute; left:12px; top:50%; transform:translateY(-50%); font-size:18px; color:#9E9E9E; pointer-events:none;">search</span>
          <input
            v-model="search"
            placeholder="Search icons…"
            style="width:100%; padding:8px 12px 8px 40px; border:1px solid #D7D9E4; border-radius:8px; font-size:14px; font-family:Poppins,sans-serif; outline:none; box-sizing:border-box; background:#F9F9FA;"
          />
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button
            v-for="v in variantOptions"
            :key="v.value"
            @click="variant = v.value"
            :style="{
              padding:'6px 14px', borderRadius:'20px', border:'1px solid',
              borderColor: variant===v.value ? '#3660F1' : '#D7D9E4',
              background:  variant===v.value ? '#3660F1' : '#fff',
              color:       variant===v.value ? '#fff'    : '#555',
              fontSize:'12px', fontWeight:'500', fontFamily:'Poppins,sans-serif', cursor:'pointer',
            }"
          >{{ v.label }}</button>
        </div>
        <span style="font-size:13px; color:#9E9E9E; white-space:nowrap;">{{ filtered.length.toLocaleString() }} results</span>
      </div>

      <!-- Icon grid -->
      <div v-if="filtered.length > 0" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(96px,1fr)); gap:8px;">
        <div
          v-for="icon in filtered"
          :key="icon"
          :title="icon"
          style="background:#fff; border:1px solid #D7D9E4; border-radius:10px; padding:14px 8px 10px; display:flex; flex-direction:column; align-items:center; gap:8px; cursor:default; transition:border-color .15s,box-shadow .15s;"
          @mouseenter="e => { e.currentTarget.style.borderColor='#3660F1'; e.currentTarget.style.boxShadow='0 0 0 3px rgba(54,96,241,0.08)' }"
          @mouseleave="e => { e.currentTarget.style.borderColor='#D7D9E4'; e.currentTarget.style.boxShadow='none' }"
        >
          <span :class="iconClass" style="font-size:24px; color:#1A1A2E; user-select:none;">{{ icon }}</span>
          <span style="font-size:9px; color:#888; text-align:center; line-height:1.3; word-break:break-word; font-family:'SF Mono',Consolas,monospace; max-width:100%;">{{ icon }}</span>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else style="text-align:center; padding:60px 0; color:#9E9E9E;">
        <span class="material-icons" style="font-size:48px; display:block; margin-bottom:12px;">search_off</span>
        <p style="margin:0; font-size:14px;">No icons match "<strong>{{ search }}</strong>"</p>
      </div>

    </div>
  `,
})

export const Icons: Story = {
  render: () => IconsComponent,
}
