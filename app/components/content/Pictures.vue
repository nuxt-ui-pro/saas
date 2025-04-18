<template>
  <div
    class="flex space-x-4 items-center justify-between"
    :class="orientation === 'vertical' ? 'flex-col' : 'flex-row'"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  orientation: 'horizontal' | 'vertical'
}>()
</script>
