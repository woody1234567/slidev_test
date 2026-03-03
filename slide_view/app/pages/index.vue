<script setup lang="ts">
useHead({
  title: 'Slide Hub - Elegant Markdown Presentations',
  meta: [
    { name: 'description', content: 'Explore amazing presentations generated through Slidev Markdown directly on the web.' }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative py-24 sm:py-32 overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/20 via-background to-background"></div>
      
      <UContainer class="text-center relative z-10">
        <UBadge
          color="primary"
          variant="subtle"
          size="sm"
          class="mb-6 rounded-full"
        >
          Built with Slidev & Nuxt
        </UBadge>
        
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
          Welcome to <span class="text-primary">Slide Hub</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          A centralized platform hosting beautiful, interactive presentations created using Markdown and Slidev. Discover, present, and share ideas effortlessly.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton
            size="xl"
            color="neutral"
            variant="solid"
            icon="i-simple-icons-github"
            to="https://github.com/slidevjs/slidev"
            target="_blank"
            class="w-full sm:w-auto font-semibold"
          >
            Learn Slidev
          </UButton>
        </div>
      </UContainer>
    </div>

    <!-- Features Section -->
    <UContainer id="explore" class="py-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard class="flex flex-col h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur">
          <template #header>
            <UIcon name="i-heroicons-document-text" class="w-10 h-10 text-primary mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Markdown Native</h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300 flex-1">
            Write your slides in pure Markdown. Focus on the content, while Slidev handles the elegant presentation layout and interactions.
          </p>
        </UCard>
        
        <UCard class="flex flex-col h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur">
          <template #header>
            <UIcon name="i-heroicons-sparkles" class="w-10 h-10 text-primary mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Developer Friendly</h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300 flex-1">
            Built for developers. Integrates powerful developer tools, UnoCSS styling, and Vue components directly into your presentations.
          </p>
        </UCard>

        <UCard class="flex flex-col h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur">
          <template #header>
            <UIcon name="i-heroicons-bolt" class="w-10 h-10 text-primary mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Lightning Fast</h3>
          </template>
          <p class="text-gray-600 dark:text-gray-300 flex-1">
            Powered by Vite and Nuxt. Benefit from instant server start, hot module replacement, and highly optimized static builds.
          </p>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
