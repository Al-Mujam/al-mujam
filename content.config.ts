import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    programs: defineCollection({
      type: 'data',
      source: 'programs/**.json',
      schema: z.object({
        title: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        image: z.string(),
        link: z.string(),
      }),
    }),
    students: defineCollection({
      type: 'data',
      source: 'students/**.json',
      schema: z.object({
        name: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        role: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        testimony: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        image: z.string(),
      }),
    }),
    general: defineCollection({
      type: 'data',
      source: 'general/**.json',
      schema: z.object({
        key: z.string(),
        value: z.object({
          en: z.string(),
          tr: z.string(),
        }),
      })
    }),
    stats: defineCollection({
      type: 'data',
      source: 'stats/**.json',
      schema: z.object({
        number: z.string(),
        description: z.object({
          en: z.string(),
          tr: z.string()
        }),
        icon: z.string(),
      })
    }),
    contact: defineCollection({
      type: 'data',
      source: 'contact/**.json',
      schema: z.object({
        key: z.string(),
        value: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        link: z.object({
          en: z.string(),
          tr: z.string(),
        }),
      })
    }),
    privacy: defineCollection({
      type: 'page',
      source: 'privacy/**.md',
    }),
    translations: defineCollection({
      type: 'data',
      source: 'translations/**.json',
      schema: z.object({
        key: z.string(),
        value: z.object({
          en: z.string(),
          tr: z.string(),
        }),
      })
    }),
    about: defineCollection({
      type: 'data',
      source: 'about/**.json',
      schema: z.object({
        title: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        image: z.string(),
      })
    }),
    about_features: defineCollection({
      type: 'data',
      source: 'about_features/**.json',
      schema: z.object({
        title: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        icon: z.string(),
      })
    }),
    blogs: defineCollection({
      type: 'data',
      source: 'blogs/**.json',
      schema: z.object({
        blog_id: z.number(),
        title: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        subtitle: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        sections: z.array(z.object({
          heading: z.object({
            en: z.string(),
            tr: z.string(),
          }),
          content: z.object({
            en: z.array(z.string()),
            tr: z.array(z.string()),
          })
        })),
        image: z.string(),
      })
    }),
    faq: defineCollection({
      type: 'data',
      source: 'faq/**.json',
      schema: z.object({
        question: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        answer: z.object({
          en: z.array(z.array(z.string())),
          tr: z.array(z.array(z.string())),
        }),
      })
    })
    
  },
})
