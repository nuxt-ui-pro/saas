<script setup lang="ts">
import type { NavItem } from '@nuxt/content'
import { mapContentNavigation } from '#ui-pro/utils'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = computed(() => navigation.value.find(item => item._path === '/docs')?.children ?? [])
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <template #top>
            <UContentSearchButton
              class="rounded-md w-full"
              variant="subtle"
              label="Search..."
              size="sm"
            />
          </template>

          <UContentNavigation :links="mapContentNavigation(links)" />
        </UPageAside>
      </template>

      <NuxtPage />
    </UPage>
  </UContainer>
</template>
