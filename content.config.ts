import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const baseSchema = {
  title: z.string().nonempty(),
  description: z.string().nonempty()
}

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

const imageSchema = z.object({
  src: z.string().nonempty(),
  alt: z.string().optional(),
  loading: z.string().optional(),
  srcset: z.string().optional()
})

const featureItemSchema = z.object({
  ...baseSchema,
  icon: z.string().nonempty()
})

const sectionSchema = z.object({
  headline: z.string().optional(),
  ...baseSchema,
  features: z.array(featureItemSchema)
})

export const collections = {
  docs: defineCollection({
    type: 'page',
    source: '1.docs/**/*',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty()
    })
  }),
  posts: defineCollection({
    type: 'page',
    source: '3.blog/**/*',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      image: z.object({ src: z.string().nonempty() }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({ src: z.string().nonempty() })
        })
      ),
      date: z.string().nonempty(),
      badge: z.object({ label: z.string().nonempty() })
    })
  }),
  index: defineCollection({
    source: '0.index.yml',
    type: 'data',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      hero: sectionSchema.extend({
        headline: z.object({
          label: z.string().nonempty(),
          to: z.string().nonempty(),
          icon: z.string().nonempty()
        }),
        links: z.array(linkSchema)
      }),
      sections: z.array(
        sectionSchema.extend({
          id: z.string().nonempty(),
          orientation: orientationEnum.optional(),
          features: z.array(featureItemSchema),
          links: z.array(linkSchema),
          reverse: z.boolean().optional()
        })
      ),
      features: sectionSchema.extend({
        items: z.array(featureItemSchema)
      }),
      testimonials: sectionSchema.extend({
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: imageSchema
            })
          })
        )
      }),
      cta: sectionSchema.extend({
        links: z.array(linkSchema)
      })
    })
  }),
  pricing: defineCollection({
    source: '2.pricing.yml',
    type: 'data',
    schema: sectionSchema.extend({
      hero: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty()
      }),
      plans: z.array(
        z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          price: z.object({
            month: z.string().nonempty(),
            year: z.string().nonempty()
          }),
          billing_period: z.string().nonempty(),
          billing_cycle: z.string().nonempty(),
          button: linkSchema,
          features: z.array(z.string().nonempty()),
          highlight: z.boolean().optional()
        })
      ),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(z.string())
      }),
      faq: sectionSchema.extend({
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty(),
            defaultOpen: z.boolean().optional()
          })
        )
      })
    })
  }),
  blog: defineCollection({
    source: '3.blog.yml',
    type: 'data',
    schema: sectionSchema
  })
}
