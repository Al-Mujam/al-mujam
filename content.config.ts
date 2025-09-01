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
          en: z.array(z.object({
            text: z.array(z.string()),
          })),
          tr: z.array(z.object({
            text: z.array(z.string()),
          })),
        }),
      })
    }),
    food: defineCollection({
      type: 'data',
      source: 'food/**.json',
      schema: z.object({
        name: z.object({
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
    about_stats: defineCollection({
      type: 'data',
      source: 'stats/about/**.json',
      schema: z.object({
        number: z.string(),
        icon: z.string(),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
      })
    }),
    about_trips: defineCollection({
      type: 'data',
      source: 'about_trips/**.json',
      schema: z.object({
        name: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        image: z.string(),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
      })
    }),
    arrival: defineCollection({
      type: 'data',
      source: 'arrival/**.json',
      schema: z.object({
        question: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        answer: z.object({
          en: z.array(z.object({
            text: z.array(z.string()),
          })),
          tr: z.array(z.object({
            text: z.array(z.string()),
          })),
        }),
      })
    }),
    admissions: defineCollection({
      type: 'data',
      source: 'admissions/**.json',
      schema: z.object({
        title: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        subtitle: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        content: z.object({
          en: z.array(z.string()),
          tr: z.array(z.string()),
        }),
        button_text: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        button_link: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        calendar: z.object({
          en: z.array(z.object({
            term: z.string(),
            orientation: z.string(),
            classes: z.string(),
          })),
          tr: z.array(z.object({
            term: z.string(),
            orientation: z.string(),
            classes: z.string(),
          })),
        }).optional(),
        private_tutoring: z.object({
          en: z.array(z.string()),
          tr: z.array(z.string()),
        }).optional(),
        base_rate: z.object({
          en: z.object({
            title: z.string(),
            amount: z.string(),
            description: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            amount: z.string(),
            description: z.string(),
          }),
        }).optional(),
        individual_discounts: z.object({
          en: z.object({
            title: z.string(),
            subtitle: z.string(),
            terms: z.array(z.object({
              term: z.string(),
              cost: z.string(),
              discount: z.string(),
              savings: z.string(),
            })),
          }),
          tr: z.object({
            title: z.string(),
            subtitle: z.string(),
            terms: z.array(z.object({
              term: z.string(),
              cost: z.string(),
              discount: z.string(),
              savings: z.string(),
            })),
          }),
        }).optional(),
        group_discounts: z.object({
          en: z.object({
            duos_trios: z.object({
              title: z.string(),
              terms: z.array(z.object({
                term: z.string(),
                cost: z.string(),
                discount: z.string(),
                savings: z.string(),
              })),
            }),
            ensembles: z.object({
              title: z.string(),
              terms: z.array(z.object({
                term: z.string(),
                cost: z.string(),
                discount: z.string(),
                savings: z.string(),
              })),
            }),
            note: z.string(),
          }),
          tr: z.object({
            duos_trios: z.object({
              title: z.string(),
              terms: z.array(z.object({
                term: z.string(),
                cost: z.string(),
                discount: z.string(),
                savings: z.string(),
              })),
            }),
            ensembles: z.object({
              title: z.string(),
              terms: z.array(z.object({
                term: z.string(),
                cost: z.string(),
                discount: z.string(),
                savings: z.string(),
              })),
            }),
            note: z.string(),
          }),
        }).optional(),
        private_tutoring_rates: z.object({
          en: z.object({
            title: z.string(),
            sessions: z.array(z.object({
              type: z.string(),
              rate: z.string(),
            })),
            notes: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            sessions: z.array(z.object({
              type: z.string(),
              rate: z.string(),
            })),
            notes: z.array(z.string()),
          }),
        }).optional(),
        payment_info: z.object({
          en: z.object({
            deposits: z.array(z.string()),
            methods: z.array(z.string()),
          }),
          tr: z.object({
            deposits: z.array(z.string()),
            methods: z.array(z.string()),
          }),
        }).optional(),
        refund_policy: z.object({
          en: z.array(z.object({
            timeline: z.string(),
            eligibility: z.string(),
          })),
          tr: z.array(z.object({
            timeline: z.string(),
            eligibility: z.string(),
          })),
        }).optional(),
      })
    }),
    academics_admissions: defineCollection({
      type: 'page',
      source: 'academics_admissions/**.md',
      
    }),
    student_life: defineCollection({
      type: 'data',
      source: 'student_life/**.json',
      schema: z.object({
        title: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        subtitle: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        content: z.object({
          en: z.array(z.string()),
          tr: z.array(z.string()),
        }),
        button_text: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        button_link: z.object({
          en: z.string(),
          tr: z.string(),
        }),
      })
    })
  },

})
