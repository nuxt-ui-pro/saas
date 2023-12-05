<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const links = [{
  label: 'Documentation',
  to: '/docs'
}, {
  label: 'Pricing',
  to: '/pricing'
}, {
  label: 'Blog',
  to: '/blog'
}, {
  label: 'Changelog',
  to: '/changelog'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt UI Pro <UBadge label="SaaS" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Sign in" color="gray" to="/login" />
      <UButton label="Get started" icon="i-heroicons-arrow-right-20-solid" trailing color="black" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
