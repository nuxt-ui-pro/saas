/*
import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])

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

const sectionSchema = z.object({
  headline: z.string().optional(),
  title: z.string().nonempty(),
  description: z.string().optional()
})

const featureItemSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  icon: z.string().nonempty()
})

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'data',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      hero: sectionSchema.extend({
        links: z.array(linkSchema)
      }),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(z.string().nonempty())
      }),
      sections: z.array(
        sectionSchema.extend({
          items: z.array(featureItemSchema),
          links: z.array(linkSchema),
          reverse: z.boolean().optional(),
          code: z.string().optional()
        })
      ),
      templates: sectionSchema.extend({
        items: z.array(featureItemSchema),
        links: z.array(linkSchema)
      }),
      pricing: sectionSchema.extend({
        plans: z.array(
          z.object({
            title: z.string().nonempty(),
            description: z.string().nonempty(),
            price: z.string().nonempty(),
            billing_period: z.string().nonempty(),
            billing_cycle: z.string().nonempty(),
            button: linkSchema,
            features: z.array(z.string().nonempty()),
            highlight: z.boolean().optional()
          })
        )
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
  })
}
*/
