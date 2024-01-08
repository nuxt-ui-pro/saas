<script setup lang="ts">
const { data: page } = await useAsyncData('changelog', () => queryContent('/changelog').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: versions } = await useAsyncData('versions', () => queryContent('/changelog')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .find())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Saas',
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <UContainer>
    <UPageHeader v-bind="page" class="py-[50px]" />

    <UPageBody />
  </UContainer>
</template>
