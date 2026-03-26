<script setup lang="ts">
const presentations = [
  {
    title: 'Calculus Section 3',
    description: 'Integral calculus and its applications in practice.',
    link: '/calculus/3',
    icon: 'i-heroicons-chart-bar'
  },
  {
    title: 'Calculus Section 4',
    description: 'Advanced differentiation techniques and multivariable calculus.',
    link: '/calculus/4',
    icon: 'i-heroicons-variable'
  }
]

useHead({
  title: 'Calculus - Slide Hub',
  meta: [
    { name: 'description', content: 'Explore Calculus presentations and teaching materials.' }
  ]
})
</script>

<template>
  <UContainer class="py-12">
    <div class="mb-12 text-center">
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
        Calculus
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        A collection of interactive presentations covering fundamental and advanced calculus concepts.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <UCard 
        v-for="item in presentations" 
        :key="item.link"
        class="group hover:ring-2 hover:ring-primary-500 transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur"
      >
        <template #header>
          <div class="flex items-center gap-4">
            <UIcon :name="item.icon" class="w-8 h-8 text-primary" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {{ item.title }}
            </h3>
          </div>
        </template>
        
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          {{ item.description }}
        </p>

        <template #footer>
          <UButton
            :to="item.link"
            color="primary"
            variant="solid"
            block
            icon="i-heroicons-arrow-top-right-on-square-20-solid"
          >
            View Slides
          </UButton>
        </template>
      </UCard>
    </div>

    <div class="mt-16 text-center">
      <UButton
        to="/"
        variant="ghost"
        color="neutral"
        icon="i-heroicons-arrow-left"
      >
        Back to Home
      </UButton>
    </div>
  </UContainer>
</template>
