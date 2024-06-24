<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = computed(() => navigation.value.find(item => item._path === '/docs')?.children ?? [])
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <template #top>
            <UContentSearchButton
              class="rounded-md"
              size="sm"
            />
          </template>

          <UNavigationTree :links="mapContentNavigation(links)" />
        </UAside>
      </template>

      <NuxtPage />
    </UPage>
  </UContainer>
</template>
