<script setup lang="ts">
import { withoutTrailingSlash, joinURL } from 'ufo'
import type { BlogArticle } from '~/types'

const route = useRoute()
const { copy } = useCopyToClipboard()

const { data: article } = await useAsyncData(route.path, () => queryContent<BlogArticle>(route.path).findOne())
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/blog')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  title: article.value.head?.title || article.value.title,
  description: article.value.head?.description || article.value.description
})

const title = article.value.head?.title || article.value.title
const description = article.value.head?.description || article.value.description
useSeoMeta({
  titleTemplate: '%s · Nuxt Blog',
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · Nuxt Blog`
})

if (article.value.image) {
  const site = useSiteConfig()
  useSeoMeta({
    ogImage: joinURL(site.url, article.value.image),
    twitterImage: joinURL(site.url, article.value.image)
  })
} else {
  defineOgImage({
    component: 'Docs',
    title,
    description,
    headline: 'Blog'
  })
}

const socialLinks = computed(() => [{
  icon: 'i-simple-icons-linkedin',
  to: `https://www.linkedin.com/sharing/share-offsite/?url=https://nuxt.com${article.value._path}`
}, {
  icon: 'i-simple-icons-twitter',
  to: `https://twitter.com/intent/tweet?text=I%20found%20this%20article%20interesting%20%20https://nuxt.com${article.value._path}&hashtags=nuxt`
}])

function copyLink () {
  copy(`https://nuxt.com${article.value._path}`, { title: 'Copied to clipboard' })
}
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="article.title" :description="article.description">
        <template #headline>
          {{ article.category }} <span class="text-gray-500 dark:text-gray-400">&middot;</span> <time class="text-gray-500 dark:text-gray-400"> {{ formatDateByLocale('en', article.date) }}</time>
        </template>

        <div class="mt-4 flex flex-wrap items-center gap-6">
          <UButton
            v-for="(author, index) in article.authors"
            :key="index"
            :to="author.link"
            target="_blank"
            color="white"
            variant="ghost"
            class="-my-1.5 -mx-2.5"
          >
            <UAvatar :src="author.avatarUrl" :alt="author.name" />

            <div class="text-left">
              <p class="font-medium">
                {{ author.name }}
              </p>
              <p class="text-gray-500 dark:text-gray-400 leading-4">
                {{ `@${author.link.split('/').pop()}` }}
              </p>
            </div>
          </UButton>
        </div>

        <div class="absolute top-[68px] -left-[64px] hidden lg:flex">
          <UTooltip text="Back to blog">
            <UButton
              to="/blog"
              icon="i-ph-caret-left"
              color="gray"
              :ui="{ rounded: 'rounded-full' }"
              size="lg"
            />
          </UTooltip>
        </div>
      </UPageHeader>

      <UPage>
        <UPageBody prose>
          <ContentRenderer v-if="article && article.body" :value="article" />

          <div class="flex justify-end items-center gap-1.5 mt-12 not-prose">
            <UButton icon="i-ph-link-simple" v-bind="($ui.button.secondary as any)" @click="copyLink" />
            <UButton v-for="(link, index) in socialLinks" :key="index" v-bind="{ ...($ui.button.secondary as any), ...link }" target="_blank" />
          </div>

          <hr v-if="surround?.length">

          <UDocsSurround :surround="surround" />
        </UPageBody>

        <template #right>
          <UDocsToc v-if="article.body && article.body.toc" :links="article.body.toc.links" />
        </template>
      </UPage>
    </UPage>
  </UContainer>
</template>
