<script setup lang="ts">
useSeoMeta({
  title: 'Roadmap',
  ogTitle: 'Roadmap',
  description: 'Roadmap of Nuxt UI Pro SaaS template.',
  ogDescription: 'Roadmap of Nuxt UI Pro SaaS template.'
})

defineOgImageComponent('Saas')

const appConfig = useAppConfig()
const colorMode = useColorMode()

// Check out the Volta docs at https://volta.net/docs/issue/embed
const token = 'eyJ2aWV3IjoiYm9hcmQiLCJib2FyZFN0YXR1c2VzIjpbInRyaWFnZSIsImJhY2tsb2ciLCJ0b2RvIiwiaW5fcHJvZ3Jlc3MiLCJpbl9yZXZpZXciLCJkb25lIiwicmVsZWFzZWQiLCJjYW5jZWxsZWQiXSwiYm9hcmRMaW5rZWRQcnMiOnRydWUsImxpc3RHcm91cCI6InN0YXR1cyIsImxpc3RPcmRlciI6ImNyZWF0ZWRfYXQiLCJ0aW1lbGluZVpvb20iOiJtb250aCIsInRpbWVsaW5lT3JkZXIiOiJzdGF0ZSIsInRpbWVsaW5lRGlzcGxheSI6ImFsbF9taWxlc3RvbmVzIiwiZmlsdGVycyI6e30sIm93bmVyIjoibnV4dC11aS1wcm8iLCJuYW1lIjoic2FhcyJ9'

const src = computed(() => `https://volta.net/embed/${token}?theme=${colorMode.value}&gray=${appConfig.ui.colors.neutral}&primary=${appConfig.ui.colors.primary}`)
</script>

<template>
  <div class="h-[calc(100vh-var(--ui-header-height))]">
    <ClientOnly>
      <iframe
        :src="src"
        width="100%"
        height="100%"
      />
    </ClientOnly>
  </div>
</template>
