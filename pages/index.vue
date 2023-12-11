<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Sass',
  title: page.value.title,
  description: page.value.description
})

const { x } = useMouse()
const { width } = useWindowSize()

const percent = computed(() => {
  if (process.server) return '0px'
  return `${Math.round((x.value - (width.value / 2)) / width.value * 150)}px`
})
</script>

<template>
  <div v-if="page" class="landing">
    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon name="i-heroicons-arrow-right-20-solid" class="ml-1" />
        </UBadge>
      </template>
    </ULandingHero>

    <ULandingSection id="features" :title="page.features.title" :description="page.features.description">
      <UPageGrid>
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" color="white" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection id="testimonials" :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns class="xl:columns-4">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" class="bg-gray-100/50 dark:bg-gray-800/50" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection class="relative">
      <ULandingCTA v-bind="page.cta" class="bg-gray-100/50 dark:bg-gray-800/50" />
    </ULandingSection>
  </div>
</template>

<style scoped>
.landing /deep/ h1, .landing /deep/ h2 {
  background: linear-gradient(90deg, rgba(241, 245, 249, 0.40) 4.65%, #F1F5F9 51.22%, rgba(241, 245, 249, 0.40) 93.04%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100%;
  background-position-x: v-bind(percent);
}
</style>
