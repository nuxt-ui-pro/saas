<script setup lang="ts">
const items = [{
  label: 'Docs',
  to: '/docs'
}, {
  label: 'Pricing',
  to: '/pricing'
}, {
  label: 'Blog',
  to: '/blog'
}, {
  label: 'Roadmap',
  to: '/roadmap'
}]
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <LogoPro class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Sign in"
        color="neutral"
        to="/login"
      />
      <UButton
        label="Sign up"
        color="neutral"
        variant="ghost"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:flex"
      />
    </template>

    <template #content>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        block
        class="mb-3"
      />
      <UButton
        label="Sign up"
        color="neutral"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>
