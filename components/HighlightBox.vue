<!-- components/HighlightBox.vue -->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#0020C2' // Default deep blue, similar to the image
  }
})

const boxStyle = computed(() => ({
  borderColor: props.color,
  borderWidth: '3px',
  borderStyle: 'solid',
  borderRadius: '6px',
  overflow: 'hidden',
  marginBottom: '1rem',
  marginTop: '1rem'
}))

const headerStyle = computed(() => ({
  backgroundColor: props.color,
  color: 'white'
}))
</script>

<template>
  <div :style="boxStyle" class="shadow-sm">
    <div :style="headerStyle" class="px-4 py-1 text-lg font-bold">
      {{ title }}
    </div>
    <div class="px-4 py-4 bg-white text-black text-center">
      <slot />
    </div>
  </div>
</template>
