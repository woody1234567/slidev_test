<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const slideLinks = [
  [
    { label: 'Resume', href: '/resume/resume/', target: '_blank', external: true },
    { label: 'thesis', href: '/resume/optimal_carbon_tax_slides/', target: '_blank', external: true },
    { label: 'FunNow', href: '/resume/final_report_slides/', target: '_blank', external: true }
  ],
  [
    { label: 'Calculus 3.1', href: '/Calculus/Calculus_teaching_section_3/section3.1/', target: '_blank', external: true },
    { label: 'Calculus 3.3', href: '/Calculus/Calculus_teaching_section_3/section3.3/', target: '_blank', external: true },
    { label: 'Calculus 3.4', href: '/Calculus/Calculus_teaching_section_3/section3.4/', target: '_blank', external: true },
    { label: 'Calculus 3.6', href: '/Calculus/Calculus_teaching_section_3/section3.6/', target: '_blank', external: true },
    { label: 'Calculus 3.10', href: '/Calculus/Calculus_teaching_section_3/section3.10/', target: '_blank', external: true },
    { label: 'Calculus 3.11', href: '/Calculus/Calculus_teaching_section_3/section3.11/', target: '_blank', external: true }
  ],
  [
    { label: 'Calculus 4.1', href: '/Calculus/Calculus_teaching_section_4/section4.1/', target: '_blank', external: true },
    { label: 'Calculus 4.2', href: '/Calculus/Calculus_teaching_section_4/section4.2/', target: '_blank', external: true },
    { label: 'Calculus 4.3', href: '/Calculus/Calculus_teaching_section_4/section4.3/', target: '_blank', external: true },
    { label: 'Calculus 4.4', href: '/Calculus/Calculus_teaching_section_4/section4.4/', target: '_blank', external: true },
    { label: 'Calculus 4.5', href: '/Calculus/Calculus_teaching_section_4/section4.5/', target: '_blank', external: true },
    { label: 'Calculus 4.7', href: '/Calculus/Calculus_teaching_section_4/section4.7/', target: '_blank', external: true },
    { label: 'Calculus 4.9', href: '/Calculus/Calculus_teaching_section_4/section4.9/', target: '_blank', external: true }
  ],
  [
    { label: 'Economics: Chapter 3', href: '/Economics/Economics_teaching/chap3/', target: '_blank', external: true },
    { label: 'Economics: Chapter 5', href: '/Economics/Economics_teaching/chap5/', target: '_blank', external: true },
    { label: 'Economics: Chapter 6', href: '/Economics/Economics_teaching/chap6/', target: '_blank', external: true },
    { label: 'Economics: Chapter 7', href: '/Economics/Economics_teaching/chap7/', target: '_blank', external: true },
    { label: 'Economics: Chapter 18', href: '/Economics/Economics_teaching/chap18/', target: '_blank', external: true }
  ],
  [
    { label: 'IB Math', href: '/IB_math/IB_math_test/IB_math/', target: '_blank', external: true }
  ],
  [
    { label: 'Interview: Model Training', href: '/interview/model_training_presentation/', target: '_blank', external: true }
  ]
]
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75"
  >
    <UContainer class="flex items-center justify-between h-16">
      <div class="flex items-center gap-2 font-bold text-xl cursor-pointer">
        <UIcon name="i-heroicons-presentation-chart-bar" class="w-6 h-6 text-primary" />
        <NuxtLink to="/">Slide Hub</NuxtLink>
      </div>
      
      <div class="flex items-center gap-4">
        <UButton
          to="/"
          color="neutral"
          variant="ghost"
          label="Home"
        />
        
        <UDropdownMenu :items="slideLinks" :content="{ side: 'bottom', align: 'start' }">
          <UButton color="neutral" variant="ghost" label="Slides" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdownMenu>

        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="neutral"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
    </UContainer>
  </header>
</template>
