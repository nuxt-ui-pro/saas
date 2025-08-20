# Nuxt SaaS Template

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)
[![Deploy to NuxtHub](https://img.shields.io/badge/Deploy%20to-NuxtHub-00DC82?logo=nuxt&labelColor=020420)](https://hub.nuxt.com/new?repo=nuxt-ui-pro/saas)

Fully built SaaS application to launch your next project with a landing page, a pricing page, a documentation and a blog powered by [Nuxt UI](https://ui.nuxt.com) components.

- [Live demo](https://saas-template.nuxt.dev/)
- [Documentation](https://ui.nuxt.com/getting-started/installation)

<a href="https://saas-template.nuxt.dev/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3NhYXMtdGVtcGxhdGUubnV4dC5kZXYiLCJpYXQiOjE3Mzk0NjM0NDh9.tgzUQaw6XswUPPVbOXazuWwoTHJODg155CYt1xfzIdM.jpg?theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3NhYXMtdGVtcGxhdGUubnV4dC5kZXYiLCJpYXQiOjE3Mzk0NjM0NDh9.tgzUQaw6XswUPPVbOXazuWwoTHJODg155CYt1xfzIdM.jpg?theme=light">
    <img alt="Nuxt SaaS Template" src="https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3NhYXMtdGVtcGxhdGUubnV4dC5kZXYiLCJpYXQiOjE3Mzk0NjM0NDh9.tgzUQaw6XswUPPVbOXazuWwoTHJODg155CYt1xfzIdM.jpg">
  </picture>
</a>

## Quick Start

```bash [Terminal]
npx nuxi init -t github:nuxt-ui-pro/saas
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt Studio integration

Studio is an intuitive CMS interface to edit your Nuxt Content websites.

It take advantage of the Preview API included in Nuxt Content to propose the best editing experience for your content files. Editors can benefit from a user-friendly interface to edit their Markdown, YAML or JSON files.

You can import your project on the platform without any extra setup.

However to enable the live preview on the platform, you just need to activate studio in the content configuration of your `nuxt.config.ts` file.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})
```

Read more on [Nuxt Studio docs](https://content.nuxt.com/studio/setup).

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
