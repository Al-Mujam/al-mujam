<template>
    <div class="mt-[70px] w-full">

        <!-- hero section -->
        <div class="md:h-[50svh] h-max w-full  flex flex-col items-center justify-center overflow-hidden">
             <div class="bg-web-primary gap-3 md:h-[calc(100%-30px)] h-max p-10 w-[calc(100%-40px)] rounded-4xl relative flex flex-col items-center justify-center">
                <img ref="ha2Ref" src="/watermarks/7a2.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -start-0 -top-20 z-0 " />
                <img ref="dalRef" src="/watermarks/dal.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -end-0 -bottom-10 z-0 " />
                <div ref="globeRef" class="md:text-4xl text-3xl  font-bold text-center text-white w-[80%]">
           {{ translations.find(t => t.key === 'student_life').value[locale] }}
        </div>

        <div class="breadcrumbs text-sm text-white">
  <ul>
    <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'home'}">{{ translations.find(t => t.key === 'home').value[locale] }}</NuxtLink></li>
    <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'student-life'}">{{ translations.find(t => t.key === 'student_life').value[locale] }}</NuxtLink></li>
  </ul>
</div>

        <!-- Section Navigation -->
        <div class="flex flex-wrap justify-center gap-3 mt-6">
          <button 
            v-for="section in navigationSections" 
            :key="section.id"
            @click="scrollToSection(section.id)"
            class="px-4 cursor-pointer py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50"
          >
            {{ section.title[locale] }}
          </button>
        </div>
             </div>

        </div>













<section id="faq" class="container mx-auto px-4 md:px-20 py-5 h-max lg:px-10 h max-w-[1280px] ">
    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto ">
            <div class="text-lg md:text-xl font-bold text-center text-web-primary ">
              {{ translations.find(t => t.key === 'student_life').value[locale].toUpperCase() }}
            </div>
            <div class="text-4xl md:text-5xl font-bold text-center text-text-color ">
              {{ translations.find(t => t.key === 'travel_arrival').value[locale] }}
            </div>
        </div>
                 <div class="grid grid-cols-1 max-w-[1000px] mx-auto gap-3 mt-5">
         <div v-for="(q,idx) in faq" :key="idx" class="collapse collapse-arrow bg-base-100 border h-max border-base-300">
   <input type="radio" name="my-accordion-2" :checked="idx === 0" />
   <div class="collapse-title font-semibold">{{ q.question[locale] }}</div>
   <div class="collapse-content text-sm flex flex-col gap-5">
     <div v-for="a in q.answer[locale]" :key="a">
         <div v-for="t in a.text" :key="t" class="mb-3">{{ t }}</div>
     </div>
   </div>
 </div>
         </div>
            
</section>

<!-- Local Food Section -->
<section id="local-food" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
            {{ studentLife.local_food.title[locale] }}
        </div>
        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
            {{ studentLife.local_food.subtitle[locale] }}
        </div>
        <div class="text-xl text-center text-gray-600 max-w-3xl">
            {{ studentLife.local_food.description[locale] }}
        </div>
        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
    </div>

    <!-- Food Images Grid -->
    <div class="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5 mb-12">
        <div v-for="food in foods" :key="food" class="flex items-center justify-center">
            <div class="w-full h-[250px] rounded-4xl overflow-hidden relative max-w-[300px] md:max-w-none group">
                <img :src="food.image" alt="food image" class="w-full h-full absolute object-cover z-0">
                <div class="w-full h-full bg-web-primary translate-y-full group-hover:translate-y-0 duration-500 transition-all relative rounded-4xl z-10 flex items-center justify-center text-white md:text-4xl text-2xl font-bold line-clamp-1">
                    {{ food.name[locale] }}
                    <img src="/watermarks/dal.png" alt="" class="absolute top-0 opacity-10 left-0 w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-4xl mx-auto">
        <div class="space-y-6 text-gray-700 leading-relaxed">
            <p v-for="(paragraph, index) in studentLife.local_food.content[locale]" :key="index" class="text-lg">
                {{ paragraph }}
            </p>
        </div>
        
        <div class="mt-8 text-center">
            <a :href="studentLife.local_food.button_link[locale]" class="web-btn">
                {{ studentLife.local_food.button_text[locale] }}
            </a>
        </div>
    </div>
</section>

<!-- Safety and Health Section -->
<section id="safety-health" class="w-full bg-gray-50 py-12">
    <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
        <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
            <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                {{ studentLife.safety_health.title[locale] }}
            </div>
            <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                {{ studentLife.safety_health.subtitle[locale] }}
            </div>
            <div class="text-xl text-center text-gray-600 max-w-3xl">
                {{ studentLife.safety_health.description[locale] }}
            </div>
            <div class="w-20 h-1 bg-web-primary rounded-full"></div>
        </div>

        <!-- Stats Section -->
        <div class="w-full bg-web-primary rounded-4xl max-w-[calc(100vw-40px)] mx-auto my-8 h-max overflow-hidden relative">
            <img src="/watermarks/ha2.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -start-0 -top-60" />
            <img src="/watermarks/kaf.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -end-0 -bottom-10" />
            <div class="container max-w-[1280px] py-10 mx-auto px-4 md:px-20 lg:px-10 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div v-for="stat in stats" :key="stat" class="p-5 flex flex-col gap-3 items-center justify-center h-full">
                    <IconsHeart v-if="stat.icon === 'IconsHeart'" class="text-[4rem] text-background" />
                    <IconsPill v-if="stat.icon === 'IconsPill'" class="text-[4rem] text-background" />
                    <IconsWifi v-if="stat.icon === 'IconsWifi'" class="text-[4rem] text-background" />
                    <IconsSheild v-if="stat.icon === 'IconsShield'" class="text-[4rem] text-background" />
                    <div class="text-3xl font-bold text-background">
                        {{ stat.number }}
                    </div>
                    <div class="text-xl text-center text-background/70">
                        {{ stat.description[locale] }}
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="space-y-6 text-gray-700 leading-relaxed">
                <p v-for="(paragraph, index) in studentLife.safety_health.content[locale]" :key="index" class="text-lg">
                    {{ paragraph }}
                </p>
            </div>
            
            <div class="mt-8 text-center">
                <a :href="studentLife.safety_health.button_link[locale]" class="web-btn">
                    {{ studentLife.safety_health.button_text[locale] }}
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Immersion Tours Section -->
<section id="immersion-tours" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
            {{ studentLife.immersion_tours.title[locale] }}
        </div>
        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
            {{ studentLife.immersion_tours.subtitle[locale] }}
        </div>
        <div class="text-xl text-center text-gray-600 max-w-3xl">
            {{ studentLife.immersion_tours.description[locale] }}
        </div>
        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
    </div>

    <!-- Trips Images Grid -->
    <div class="md:h-[calc(100svh-100px)] h-max w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5 mb-12">
        <div v-for="(trip, idx) in trips" :key="trip" :class="idx == 0 || idx == 3 ? 'md:col-span-2' : ''" class="flex items-center justify-center w-full md:h-full h-[250px]">
            <div class="w-full h-full rounded-4xl overflow-hidden relative max-w-[300px] md:max-w-none group">
                <img :src="trip.image" alt="trip image" class="w-full h-full absolute object-cover z-0">
                <div class="w-full h-full bg-web-primary translate-y-full group-hover:translate-y-0 duration-500 transition-all relative rounded-4xl z-10 flex items-center justify-center text-white md:text-4xl text-2xl font-bold line-clamp-1">
                    {{ trip.name[locale] }}
                    <img src="/watermarks/dal.png" alt="" class="absolute top-0 opacity-10 left-0 w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-4xl mx-auto">
        <div class="space-y-6 text-gray-700 leading-relaxed">
            <p v-for="(paragraph, index) in studentLife.immersion_tours.content[locale]" :key="index" class="text-lg">
                {{ paragraph }}
            </p>
        </div>
        
        <div class="mt-8 text-center">
            <a :href="studentLife.immersion_tours.button_link[locale]" class="web-btn">
                {{ studentLife.immersion_tours.button_text[locale] }}
            </a>
        </div>
    </div>
</section>

<!-- Travel and Visas Section -->
<section id="travel-visas" class="w-full bg-gray-50 py-12">
    <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
        <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
            <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                {{ studentLife.travel_visas.title[locale] }}
            </div>
            <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                {{ studentLife.travel_visas.subtitle[locale] }}
            </div>
            <div class="text-xl text-center text-gray-600 max-w-3xl">
                {{ studentLife.travel_visas.description[locale] }}
            </div>
            <div class="w-20 h-1 bg-web-primary rounded-full"></div>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="space-y-6 text-gray-700 leading-relaxed">
                <p v-for="(paragraph, index) in studentLife.travel_visas.content[locale]" :key="index" class="text-lg">
                    {{ paragraph }}
                </p>
            </div>
            
            <div class="mt-8 text-center">
                <a :href="studentLife.travel_visas.button_link[locale]" class="web-btn">
                    {{ studentLife.travel_visas.button_text[locale] }}
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Arrival and Departure Section -->
<section id="arrival-departure" class="w-full bg-gray-50 py-12">
    <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
        <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
            <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                {{ studentLife.arrival_departure.title[locale] }}
            </div>
            <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                {{ studentLife.arrival_departure.subtitle[locale] }}
            </div>
            <div class="text-xl text-center text-gray-600 max-w-3xl">
                {{ studentLife.arrival_departure.description[locale] }}
            </div>
            <div class="w-20 h-1 bg-web-primary rounded-full"></div>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="space-y-6 text-gray-700 leading-relaxed">
                <p v-for="(paragraph, index) in studentLife.arrival_departure.content[locale]" :key="index" class="text-lg">
                    {{ paragraph }}
                </p>
            </div>
            
            <div class="mt-8 text-center">
                <a :href="studentLife.arrival_departure.button_link[locale]" class="web-btn">
                    {{ studentLife.arrival_departure.button_text[locale] }}
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Internships and Volunteering Section -->
<section id="internships" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
            {{ studentLife.internships.title[locale] }}
        </div>
        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
            {{ studentLife.internships.subtitle[locale] }}
        </div>
        <div class="text-xl text-center text-gray-600 max-w-3xl">
            {{ studentLife.internships.description[locale] }}
        </div>
        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
    </div>

    <div class="max-w-4xl mx-auto">
        <div class="space-y-6 text-gray-700 leading-relaxed">
            <p v-for="(paragraph, index) in studentLife.internships.content[locale]" :key="index" class="text-lg">
                {{ paragraph }}
            </p>
        </div>
        
        <div class="mt-8 text-center">
            <a :href="studentLife.internships.button_link[locale]" class="web-btn">
                {{ studentLife.internships.button_text[locale] }}
            </a>
        </div>
    </div>
</section>

    </div>
</template>

<script setup>
import { IconsSchool } from '#components'


const { data: blogs } = await useAsyncData('blogs', () => {
    return queryCollection('blogs').order('blog_id', 'DESC').all()
})

const { data: stats } = await useAsyncData('about_stats', () => {
    return queryCollection('about_stats').all()
})

    const { data: trips } = await useAsyncData('about_trips', () => {
        return queryCollection('about_trips').all()
    })


const { data: foods } = await useAsyncData('food', () => {
    return queryCollection('food').all()
})

definePageMeta({
    name: 'student-life'
})






const {locale} = useI18n()
const route = useRoute()
const router = useRouter()


watch(() => route.query, (newQuery) => {
    if (newQuery.section) {
        scrollToSection(newQuery.section)
    }
})


const { data: translations } = await useAsyncData('translations', () => {
    return queryCollection('translations').all()
})

const { data: faq } = await useAsyncData('arrival', () => {
    return queryCollection('arrival').all()
})

const { data: studentLifeData } = await useAsyncData('student_life', () => {
    return queryCollection('student_life').all()
})

// Organize student life data by type
const studentLife = computed(() => {
    const data = studentLifeData.value || []
    return {
        local_food: data.find(item => item.title?.en === 'LOCAL FOOD') || {},
        safety_health: data.find(item => item.title?.en === 'SAFETY AND HEALTH') || {},
        immersion_tours: data.find(item => item.title?.en === 'IMMERSION, TOURS AND EXCURSIONS') || {},
        travel_visas: data.find(item => item.title?.en === 'TRAVEL AND VISAS') || {},
        arrival_departure: data.find(item => item.title?.en === 'ARRIVAL AND DEPARTURE') || {},
        internships: data.find(item => item.title?.en === 'INTERNSHIPS AND VOLUNTEERING') || {}
    }
})

// Navigation sections for the page
const navigationSections = [
    { id: 'faq', title: { en: 'FAQ & Arrival', tr: 'SSS & Varış' } },
    { id: 'local-food', title: { en: 'Local Food', tr: 'Yerel Yemek' } },
    { id: 'safety-health', title: { en: 'Safety & Health', tr: 'Güvenlik & Sağlık' } },
    { id: 'immersion-tours', title: { en: 'Immersion Tours', tr: 'Daldırma Turları' } },
    { id: 'travel-visas', title: { en: 'Travel & Visas', tr: 'Seyahat & Vize' } },
    { id: 'arrival-departure', title: { en: 'Arrival & Departure', tr: 'Varış & Ayrılış' } },
    { id: 'internships', title: { en: 'Internships', tr: 'Stajlar' } },
]

// Function to scroll to a specific section
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        
        // Add a subtle highlight effect to the scrolled section
        element.classList.add('scroll-highlight')
        setTimeout(() => {
            element.classList.remove('scroll-highlight')
        }, 2000)
        
        // Update URL without page reload
        router.replace({ query: { section: sectionId } })
    } else {
        console.warn(`Section with id "${sectionId}" not found`)
    }
}


const { data: settings } = await useAsyncData('settings', () => {
    return queryCollection('general').all()
})




useSeoMeta({
    title:  () => `${translations.value.find(t => t.key === 'student_life').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    description: () => settings.value.find(setting => setting.key === 'student_life_page_seo_desc').value[locale.value],
    ogTitle: () => `${translations.value.find(t => t.key === 'student_life').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    ogDescription: () => settings.value.find(setting => setting.key === 'student_life_page_seo_desc').value[locale.value],
    ogImage: '/brand/seo_image.png',
    twitterTitle: () => `${translations.value.find(t => t.key === 'student_life').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
})


const ha2Ref = ref(null)
const dalRef = ref(null)


onMounted(async () => {
    await nextTick()
    useGSAP().from(ha2Ref.value, {
    transform: 'translateX(-600px)',
    ease: "power2.inOut",
    duration: 0.6
  })    
  useGSAP().from(dalRef.value, {
    transform: 'translateX(700px)',
    ease: "power2.inOut",
    duration: 0.6
  })

  // Handle section query parameter for automatic scrolling
  const sectionQuery = route.query.section
  
  if (sectionQuery) {
    // Wait a bit for the page to fully render
    setTimeout(() => {
      // Validate that the section exists before scrolling
      const validSections = navigationSections.map(s => s.id)
      if (validSections.includes(sectionQuery)) {
        scrollToSection(sectionQuery)
      } else {
        console.warn(`Invalid section ID in query parameter: ${sectionQuery}`)
        // Remove invalid query parameter from URL
        const url = new URL(window.location)
        url.searchParams.delete('section')
        window.history.replaceState({}, '', url)
      }
    }, 1000)
  }
})
</script>

<style scoped>
/* Scroll highlight effect */
.scroll-highlight {
    animation: highlightPulse 2s ease-out;
}

@keyframes highlightPulse {
    0% {
        background-color: rgba(59, 130, 246, 0.1);
    }
    50% {
        background-color: rgba(59, 130, 246, 0.2);
    }
    100% {
        background-color: transparent;
    }
}

/* Ensure smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}
</style>