<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-auto">
    <UContainer class="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-sm text-gray-500 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Slide Hub. All rights reserved.
      </div>
      
      <div class="flex gap-4">
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/slidevjs/slidev"
          target="_blank"
          aria-label="Slidev GitHub"
        />
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
</script>
