<script setup lang="ts">
import { withoutTrailingSlash, joinURL } from 'ufo'

const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/blog')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .findSurround(withoutTrailingSlash(route.path))
, { default: () => [] })

useSeoMeta({
  title: article.value.head?.title || article.value.title,
  description: article.value.head?.description || article.value.description
})

const title = article.value.head?.title || article.value.title
const description = article.value.head?.description || article.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
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
</script>

<template>
  <UContainer>
    <UPage v-if="article">
      <UPageHeader :title="article.title" :description="article.description">
        <template #headline>
          {{ article.category }} <span class="text-gray-500 dark:text-gray-400">&middot;</span> <time class="text-gray-500 dark:text-gray-400"> {{ article.date }}</time>
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
