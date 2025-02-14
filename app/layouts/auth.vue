<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'dark:bg-neutral-950'
  }
})
</script>

<template>
  <div class="h-screen flex items-center justify-center overlay">
    <UButton
      icon="i-lucide-home"
      label="Home"
      to="/"
      color="neutral"
      class="absolute top-4"
    />
    <UPageCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
      <slot />
    </UPageCard>
  </div>
</template>
