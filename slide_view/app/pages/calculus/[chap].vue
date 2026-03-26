<script setup lang="ts">
const route = useRoute()
const chap = route.params.chap as string

const chapterData: Record<string, { title: string, description: string, sections: { id: string, title: string, path: string }[] }> = {
  '3': {
    title: 'Calculus - Section 3',
    description: 'Integral calculus and its applications in practice.',
    sections: [
      { id: '3.1', title: 'Antiderivatives and Indefinite Integration', path: '/Calculus/Calculus_teaching_section_3/section3.1/index.html' },
      { id: '3.3', title: 'Riemann Sums and Definite Integrals', path: '/Calculus/Calculus_teaching_section_3/section3.3/index.html' },
      { id: '3.4', title: 'The Fundamental Theorem of Calculus', path: '/Calculus/Calculus_teaching_section_3/section3.4/index.html' },
      { id: '3.6', title: 'Numerical Integration', path: '/Calculus/Calculus_teaching_section_3/section3.6/index.html' },
      { id: '3.10', title: 'Integration by Parts', path: '/Calculus/Calculus_teaching_section_3/section3.10/index.html' },
      { id: '3.11', title: 'Trigonometric Substitution', path: '/Calculus/Calculus_teaching_section_3/section3.11/index.html' }
    ]
  },
  '4': {
    title: 'Calculus - Section 4',
    description: 'Advanced differentiation techniques and multivariable calculus.',
    sections: [
      { id: '4.1', title: 'Chain Rule and Its Applications', path: '/Calculus/Calculus_teaching_section_4/section4.1/index.html' },
      { id: '4.2', title: 'Implicit Differentiation', path: '/Calculus/Calculus_teaching_section_4/section4.2/index.html' },
      { id: '4.3', title: 'Related Rates', path: '/Calculus/Calculus_teaching_section_4/section4.3/index.html' },
      { id: '4.4', title: 'Extrema on an Interval', path: '/Calculus/Calculus_teaching_section_4/section4.4/index.html' },
      { id: '4.5', title: 'Mean Value Theorem', path: '/Calculus/Calculus_teaching_section_4/section4.5/index.html' },
      { id: '4.7', title: 'Optimization Problems', path: '/Calculus/Calculus_teaching_section_4/section4.7/index.html' },
      { id: '4.9', title: "L'Hôpital's Rule", path: '/Calculus/Calculus_teaching_section_4/section4.9/index.html' }
    ]
  }
}

const currentChapter = computed(() => chapterData[chap])

useHead({
  title: currentChapter.value ? `${currentChapter.value.title} - Slide Hub` : 'Chapter Not Found',
  meta: [
    { name: 'description', content: currentChapter.value?.description || 'View calculus chapter slides.' }
  ]
})
</script>

<template>
  <UContainer class="py-12">
    <div v-if="currentChapter" class="space-y-12">
      <div class="text-center">
        <UBreadcrumb :links="[{ label: 'Home', to: '/' }, { label: 'Calculus', to: '/calculus' }, { label: `Section ${chap}` }]" class="mb-8 justify-center" />
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
          {{ currentChapter.title }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ currentChapter.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard 
          v-for="section in currentChapter.sections" 
          :key="section.id"
          class="group hover:ring-2 hover:ring-primary-500 transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur"
        >
          <template #header>
            <div class="flex items-start gap-3">
              <UBadge color="primary" variant="subtle" class="mt-0.5 shrink-0 whitespace-nowrap">Section {{ section.id }}</UBadge>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {{ section.title }}
              </h3>
            </div>
          </template>
          
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-400 italic">Interactive Slidev Deck</span>
            <UButton
              :to="section.path"
              target="_blank"
              color="primary"
              variant="ghost"
              icon="i-heroicons-arrow-top-right-on-square-20-solid"
              label="Open"
            />
          </div>
        </UCard>
      </div>

      <div class="mt-16 text-center">
        <UButton
          to="/calculus"
          variant="ghost"
          color="neutral"
          icon="i-heroicons-arrow-left"
        >
          Back to Calculus Index
        </UButton>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Chapter Not Found</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8">The calculus chapter you are looking for does not exist.</p>
      <UButton to="/calculus" color="primary">Return to Calculus Index</UButton>
    </div>
  </UContainer>
</template>
