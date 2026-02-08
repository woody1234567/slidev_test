<template>
  <figure :class="['flex flex-col items-center', containerClass]">
    <img
      :src="resolvedSrc"
      :alt="alt"
      :class="['max-w-full', imgClass]"
      :style="imgStyle"
    />
    <figcaption
      v-if="caption"
      class="text-center text-sm text-gray-500 dark:text-gray-400 mt-2"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: 'auto',
  },
  maxWidth: {
    type: String,
    default: '100%',
  },
  imgClass: {
    type: String,
    default: '',
  },
  containerClass: {
    type: String,
    default: '',
  },
});

const resolvedSrc = computed(() => {
  // Handle absolute URLs
  // if (props.src.startsWith('http://') || props.src.startsWith('https://')) {
  //   return props.src;
  // }
  // Handle relative paths - Slidev will resolve these
  return props.src;
});

const imgStyle = computed(() => ({
  width: props.width,
  maxWidth: props.maxWidth,
}));
</script>

<style scoped>
figure {
  margin: 0;
}
</style>
