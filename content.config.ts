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
        subtitle: z.object({
          en: z.string(),
          tr: z.string(),
        }).optional(),
        description: z.object({
          en: z.string(),
          tr: z.string(),
        }),
        content: z.object({
          en: z.array(z.string()),
          tr: z.array(z.string()),
        }).optional(),
        approach: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        classes: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            sessions: z.array(z.string()),
            features: z.array(z.string()),
            extracurricular: z.object({
              title: z.string(),
              description: z.string(),
              activities: z.array(z.string()),
            }),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            sessions: z.array(z.string()),
            features: z.array(z.string()),
            extracurricular: z.object({
              title: z.string(),
              description: z.string(),
              activities: z.array(z.string()),
            }),
          }),
        }).optional(),
        tracks: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            programs: z.array(z.string()),
            note: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            programs: z.array(z.string()),
            note: z.string(),
          }),
        }).optional(),
        location: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        facilities: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        detailed_facilities: z.object({
          en: z.object({
            title: z.string(),
            facilities: z.array(z.object({
              name: z.string(),
              description: z.string(),
            })),
          }),
          tr: z.object({
            title: z.string(),
            facilities: z.array(z.object({
              name: z.string(),
              description: z.string(),
            })),
          }),
        }).optional(),
        community: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        selection_criteria: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        seminars_workshops: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        immersion: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        dialect: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        culture: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        strategic_location: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        opportunities: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        instructors: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        administration: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        commitment: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            features: z.array(z.string()),
            conclusion: z.string(),
            evaluation_process: z.object({
              title: z.string(),
              description: z.string(),
              phases: z.array(z.object({
                title: z.string(),
                description: z.string(),
              })),
              conclusion: z.string(),
            }).optional(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            features: z.array(z.string()),
            conclusion: z.string(),
            evaluation_process: z.object({
              title: z.string(),
              description: z.string(),
              phases: z.array(z.object({
                title: z.string(),
                description: z.string(),
              })),
              conclusion: z.string(),
            }).optional(),
          }),
        }).optional(),
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
        private_tutoring: z.object({
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
        refund_details: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            important_notes: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            important_notes: z.array(z.string()),
          }),
        }).optional(),
      })
    }),
    academics: defineCollection({
      type: 'data',
      source: 'academics/**.json',
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
        // Additional fields for specific programs
        administration: z.object({
          en: z.object({
            title: z.string(),
            features: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            features: z.array(z.string()),
          }),
        }).optional(),
        assessment: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            requirements: z.array(z.string()),
            note: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            requirements: z.array(z.string()),
            note: z.string(),
          }),
        }).optional(),
        foundational_skills: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            skills: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            skills: z.array(z.string()),
          }),
        }).optional(),
        advanced_mastery: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            modules: z.array(z.string()),
            note: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            modules: z.array(z.string()),
            note: z.string(),
          }),
        }).optional(),
        curriculum: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            features: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            features: z.array(z.string()),
          }),
        }).optional(),
        advanced_proficiency: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            modules: z.array(z.string()),
            note: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            modules: z.array(z.string()),
            note: z.string(),
          }),
        }).optional(),
        course_structure: z.object({
          en: z.object({
            title: z.string(),
            levels: z.array(z.object({
              level: z.string(),
              title: z.string(),
              description: z.string(),
            })),
          }),
          tr: z.object({
            title: z.string(),
            levels: z.array(z.object({
              level: z.string(),
              title: z.string(),
              description: z.string(),
            })),
          }),
        }).optional(),
        learning_materials: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }).optional(),
        programs: z.object({
          en: z.array(z.object({
            title: z.string(),
            description: z.string(),
          })),
          tr: z.array(z.object({
            title: z.string(),
            description: z.string(),
          })),
        }).optional(),
        test_arabic: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }).optional(),
      })
    }),
    accommodation: defineCollection({
      type: 'data',
      source: 'accommodation/**.json',
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
        // Additional fields for housing options
        almujam_housing: z.object({
          en: z.object({
            title: z.string(),
            subtitle: z.string(),
            features: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            subtitle: z.string(),
            features: z.array(z.string()),
          }),
        }).optional(),
        independent_housing: z.object({
          en: z.object({
            title: z.string(),
            subtitle: z.string(),
            features: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            subtitle: z.string(),
            features: z.array(z.string()),
          }),
        }).optional(),
        // Additional fields for housing philosophy
        common_challenges: z.object({
          en: z.object({
            title: z.string(),
            challenges: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            challenges: z.array(z.string()),
          }),
        }).optional(),
        // Additional fields for room types
        room_types: z.object({
          en: z.array(z.object({
            name: z.string(),
            size: z.string(),
            features: z.string(),
            description: z.string(),
          })),
          tr: z.array(z.object({
            name: z.string(),
            size: z.string(),
            features: z.string(),
            description: z.string(),
          })),
        }).optional(),
        apartment_features: z.object({
          en: z.object({
            title: z.string(),
            features: z.array(z.string()),
            bedroom_features: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            features: z.array(z.string()),
            bedroom_features: z.string(),
          }),
        }).optional(),
        // Additional fields for pricing
        pricing_table: z.object({
          en: z.object({
            title: z.string(),
            headers: z.array(z.string()),
            rows: z.array(z.array(z.string())),
          }),
          tr: z.object({
            title: z.string(),
            headers: z.array(z.string()),
            rows: z.array(z.array(z.string())),
          }),
        }).optional(),
        included_in_rent: z.object({
          en: z.object({
            title: z.string(),
            items: z.array(z.object({
              item: z.string(),
              cost: z.string(),
            })),
          }),
          tr: z.object({
            title: z.string(),
            items: z.array(z.object({
              item: z.string(),
              cost: z.string(),
            })),
          }),
        }).optional(),
        excluded_from_rent: z.object({
          en: z.object({
            title: z.string(),
            items: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            items: z.array(z.string()),
          }),
        }).optional(),
        daily_rates: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            rates: z.array(z.object({
              room_type: z.string(),
              daily_rate: z.string(),
            })),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            rates: z.array(z.object({
              room_type: z.string(),
              daily_rate: z.string(),
            })),
          }),
        }).optional(),
        checkout_fees: z.object({
          en: z.object({
            title: z.string(),
            items: z.array(z.object({
              item: z.string(),
              fee: z.string(),
            })),
          }),
          tr: z.object({
            title: z.string(),
            items: z.array(z.object({
              item: z.string(),
              fee: z.string(),
            })),
          }),
        }).optional(),
        // Additional fields for recommendations
        which_option_right: z.object({
          en: z.object({
            title: z.string(),
            almujam_housing: z.object({
              title: z.string(),
              features: z.array(z.string()),
            }),
            independent_housing: z.object({
              title: z.string(),
              features: z.array(z.string()),
            }),
          }),
          tr: z.object({
            title: z.string(),
            almujam_housing: z.object({
              title: z.string(),
              features: z.array(z.string()),
            }),
            independent_housing: z.object({
              title: z.string(),
              features: z.array(z.string()),
            }),
          }),
        }).optional(),
        first_term_recommendation: z.object({
          en: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            content: z.array(z.string()),
          }),
        }).optional(),
        facilitated_housing: z.object({
          en: z.object({
            title: z.string(),
            subtitle: z.string(),
            description: z.string(),
            contact_info: z.string(),
            features: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            subtitle: z.string(),
            description: z.string(),
            contact_info: z.string(),
            features: z.array(z.string()),
          }),
        }).optional(),
        // Additional fields for policies
        right_of_entry: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }).optional(),
        premature_departure: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }).optional(),
        limit_of_liability: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }).optional(),
        cancellation_policy: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            details: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            details: z.array(z.string()),
          }),
        }).optional(),
        eligibility: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }).optional(),
        visitor_policy: z.object({
          en: z.object({
            title: z.string(),
            description: z.string(),
            rules: z.array(z.string()),
          }),
          tr: z.object({
            title: z.string(),
            description: z.string(),
            rules: z.array(z.string()),
          }),
        }).optional(),
      })
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
