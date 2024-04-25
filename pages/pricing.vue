<script setup lang="ts">
const { data: page } = await useAsyncData('pricing', () => queryContent('/pricing').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

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

const isYearly = ref(false)
</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero">
      <template #links>
        <UPricingToggle
          v-model="isYearly"
          class="w-48"
        />
      </template>
    </UPageHero>

    <UContainer>
      <UPricingGrid>
        <UPricingCard
          v-for="(plan, index) in page.plans"
          :key="index"
          v-bind="plan"
          :price="isYearly ? plan.price.year : plan.price.month"
          :cycle="isYearly ? '/year' : '/month'"
        />
      </UPricingGrid>
    </UContainer>

    <ULandingSection>
      <ULandingLogos>
        <UIcon
          v-for="icon in page.logos.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
        />
      </ULandingLogos>
    </ULandingSection>

    <ULandingSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <ULandingFAQ
        :items="page.faq.items"
        multiple
        default-open
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
