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
    { label: 'interview', href: '/resume/interview/', target: '_blank', external: true }
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
