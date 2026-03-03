<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950">
    <AppHeader />
    <main class="flex-1 flex flex-col w-full">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
</script>
