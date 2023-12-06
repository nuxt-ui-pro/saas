<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

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
</script>

<template>
  <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
    />

    <ULandingSection id="features" :title="page.features.title" :description="page.features.description">
      <UPageGrid>
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection id="testimonials" :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns>
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <UPageCard>
            <q class="italic text-lg text-gray-500 dark:text-gray-400">
              {{ testimonial.quote }}
            </q>

            <template #footer>
              <div class="flex items-center gap-3">
                <UAvatar
                  v-bind="testimonial.author.avatar"
                  :alt="testimonial.author.name"
                  loading="lazy"
                  size="md"
                />

                <div class="text-sm">
                  <p class="font-medium text-gray-900 dark:text-white">
                    {{ testimonial.author.name }}
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    {{ testimonial.author.job }}
                  </p>
                </div>
              </div>
            </template>
          </UPageCard>
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA v-bind="page.cta" />
    </ULandingSection>
  </div>
</template>
