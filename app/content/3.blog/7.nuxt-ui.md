---
title: 'I tested Nuxt UI'
description: "Nuxt UI is a module that provides a set of Vue components and composables built with Tailwind CSS and Headless UI"
image:
  src: https://ui.nuxt.com/social-card.png
authors:
  - name: Kevin browski
    to: https://twitter.com/benjamincanac
    avatar:
      src: https://i.pravatar.cc/128?u=6
date: 2023-10-19
badge:
  label: Web devlopment, Nuxt
---

## Introduction

Nuxt UI is a module that provides a set of Vue components and composables built with Tailwind CSS and Headless UI to help you build beautiful and accessible user interfaces.
Its goal is to provide everything related to UI when building a Nuxt app. This includes components, icons, colors, dark mode but also keyboard shortcuts.

### ✨ Awesome Features

- Built with Headless UI and Tailwind CSS
- HMR support through Nuxt App Config
- Dark mode support
- Support for LTR and RTL languages
- Keyboard shortcuts
- Bundled icons
- Fully typed
- Figma Kit

## 😌 Easy and quick installation

### Setup

1. Install `@nuxt/ui` dependency to your project:

::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

::

2. Add it to your `modules` section in your `nuxt.config`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

That's it! You can now use all the components and composables in your Nuxt app 🤩

### Automatically installed modules

Nuxt UI will automatically install the [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/), [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) and [nuxt-icon](https://github.com/nuxt-modules/icon) modules for you.

::callout{icon="i-heroicons-exclamation-triangle"}
You should remove them from your `modules` and `dependencies` if you've previously installed them.
::

### ...And all in Typescript !

This module is written in TypeScript and provides typings for all the components and composables.

You can use those types in your own components by importing them from `#ui/types`, for example when defining wrapper components:

```vue
<template>
  <UBreadcrumb :links="links">
    <template #icon="{ link }">
      <UIcon :name="link.icon" />
    </template>
  </UBreadcrumb>
</template>

<script setup lang="ts">
import type { BreadcrumbLink } from '#ui/types'

export interface Props {
  links: BreadcrumbLink[]
}

defineProps<Props>()
</script>
```

### The power of IntelliSense

If you're using VSCode, you can install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension to get autocompletion for the classes.

You can read more on how to set it up on the [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/tailwind/editor-support) module documentation.

### Many options

| Key                   | Default         | Description                                                                                                 |
|-----------------------|-----------------|-------------------------------------------------------------------------------------------------------------|
| `prefix`              | `u`             | Define the prefix of the imported components.                                                               |
| `global`              | `false`         | Expose components globally.                                                                                 |
| `icons`               | `['heroicons']` | Icon collections to load.                                                                                   |
| `safelistColors`      | `['primary']`   | Force safelisting of colors to need be purged.                                                              |
| `disableGlobalStyles` | `false`         | Disable [global CSS styles](https://github.com/nuxt/ui/blob/dev/src/runtime/ui.css) injected by the module. |

Configure options in your `nuxt.config.ts` as such:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  }
})
```

## 🎨 Theming

### Colors

#### Configuration

Components are based on a `primary` and a `gray` color. You can change them in your `app.config.ts`.

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool'
  }
})
```

As this module uses Tailwind CSS under the hood, you can use any of the [Tailwind CSS colors](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) or your own custom colors. By default, the `primary` color is `green` and the `gray` color is `cool`.

When [using custom colors](https://tailwindcss.com/docs/customizing-colors#using-custom-colors) or [adding additional colors](https://tailwindcss.com/docs/customizing-colors#adding-additional-colors) through the `extend` key in your `tailwind.config.ts`, you'll need to make sure to define all the shades from `50` to `950` as most of them are used in the components config defined in [`ui.config.ts`](https://github.com/nuxt/ui/blob/dev/src/runtime/ui.config.ts). You can [generate your colors](https://tailwindcss.com/docs/customizing-colors#generating-colors) using tools such as https://uicolors.app/ for example.

### Components

#### `app.config.ts`

Components are styled with Tailwind CSS but classes are all defined in the default [ui.config.ts](https://github.com/nuxt/ui/blob/dev/src/runtime/ui.config.ts) file. You can override those in your own `app.config.ts`.

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    container: {
      constrained: 'max-w-5xl'
    }
  }
})
```

Thanks to [tailwind-merge](https://github.com/dcastil/tailwind-merge), the `app.config.ts` is smartly merged with the default config. This means you don't have to rewrite everything.

#### `ui` prop

Each component has a `ui` prop that allows you to customize everything specifically.

```vue
<template>
  <UContainer :ui="{ constrained: 'max-w-2xl' }">
    <slot />
  </UContainer>
</template>
```

::callout{icon="i-heroicons-light-bulb"}
You can find the default classes for each component under the `Config` section.
::

### Dark mode

All the components are styled with dark mode in mind.

:color-mode-button

### Icons

You can use any icon (100,000+) from [Iconify](https://iconify.design/).

Some components have an `icon` prop that allows you to add an icon to the component.

```vue
<template>
  <UButton icon="i-heroicons-magnifying-glass" />
</template>
```

## Here are some components you can use... but there are many others !

::card-group
  ::card
  ---
  title: Accordion
  to: https://ui.nuxt.com/components/accordion
  target: _blank
  ---
  Display togglable accordion panels.
  ::
  ::card
  ---
  title: Carousel
  to: https://ui.nuxt.com/components/carousel
  target: _blank
  ---
  Display images or content in a scrollable area.
  ::
  ::card
  ---
  title: Command Palette
  to: https://ui.nuxt.com/components/command-palette
  target: _blank
  ---
  Add a customizable command palette to your app.
  ::
  ::card
  ---
  title: Popover
  to: https://ui.nuxt.com/components/popover
  target: _blank
  ---
  Display a non-modal dialog that floats around a trigger element.
  ::
  ::card
  ---
  title: Range
  to: https://ui.nuxt.com/components/range
  target: _blank
  ---
  Display a range field
  ::
  ::card
  ---
  title: Table
  to: https://ui.nuxt.com/components/table
  target: _blank
  ---
  Display data in a table.
  ::
::

## Conclusion

Nuxt UI is the **perfect**, **modular** and **customizable** UI library for creating websites in Nuxt. it allows you to create a beautiful website with incredible components (more than 45!)
In addition, the Pro version allows you to expand the range of components, it's a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.
It includes all primitives to build landing pages, documentations, blogs, dashboards or entire SaaS products.
