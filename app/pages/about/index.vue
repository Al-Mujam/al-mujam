<template>
    <div class="mt-[70px] w-full">

        <!-- hero section -->
        <div class="h-[50svh] w-full  flex flex-col items-center justify-center overflow-hidden">
             <div class="bg-web-primary gap-3 h-[calc(100%-30px)] w-[calc(100%-40px)] rounded-4xl relative flex flex-col items-center justify-center">
                <img ref="ha2Ref" src="/watermarks/7a2.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -start-0 -top-20 z-0 " />
                <img ref="dalRef" src="/watermarks/dal.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -end-0 -bottom-10 z-0 " />
                <div ref="globeRef" class="md:text-4xl text-3xl  font-bold text-center text-white w-[80%]">
           {{ translations.find(t => t.key === 'why_almuajam').value[locale] }}
        </div>

        <div class="breadcrumbs text-sm text-white">
  <ul>
    <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'home'}">{{ translations.find(t => t.key === 'home').value[locale] }}</NuxtLink></li>
    <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'about'}">{{ translations.find(t => t.key === 'why_almuajam').value[locale] }}</NuxtLink></li>
  </ul>
</div>
             </div>

        </div>

        <!-- Overview Section -->
        <section v-if="about.overview.title?.[locale]" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
            <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                    {{ about.overview.title[locale] }}
                </div>
                <div v-if="about.overview.subtitle?.[locale]" class="text-4xl md:text-5xl font-bold text-center text-text-color">
                    {{ about.overview.subtitle[locale] }}
                </div>
                <div class="text-xl text-center text-gray-600 max-w-3xl">
                    {{ about.overview.description[locale] }}
                </div>
                <div class="w-20 h-1 bg-web-primary rounded-full"></div>
            </div>

            <div v-if="about.overview.content?.[locale]?.length" class="max-w-4xl mx-auto">
                <div class="space-y-6 text-gray-700 leading-relaxed">
                    <p v-for="(paragraph, index) in about.overview.content[locale]" :key="index" class="text-lg">
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </section>

        <!-- Location Section -->
        <section class="w-full bg-gray-50 py-12">
            <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="h-[400px] md:h-[500px] w-full">
                        <img :src="about.location.image" alt="" class="w-full rounded-4xl h-full object-cover">
                    </div>

                    <div class="flex flex-col gap-3 items-center md:items-start text-center md:text-start md:mt-15">
                        <div class="text-3xl font-bold line-clamp-2 text-text-color">
                            {{ about.location.title[locale] }} 
                        </div>
                        <div class="rounded-full bg-web-primary w-30 h-1"></div>
                        <div class="text-lg text-text-color/70 mb-4">
                            {{ about.location.description[locale] }} 
                        </div>
                        <div class="space-y-4 text-gray-700 leading-relaxed">
                            <p v-for="(paragraph, index) in about.location.content[locale]" :key="index" class="text-base">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Features Section -->
                <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5">
                    <div v-for="f in about_features" :key="f" class="flex items-center justify-center">
                        <div class="w-full max-w-[300px] text-center p-5 group lg:aspect-square lg:h-auto h-[200px] lg:bg-gray-300 overflow-hidden transition-all duration-300 hover:lg:bg-web-primary bg-web-primary rounded-4xl flex items-center justify-center flex-col gap-2 relative">
                            <img src="/watermarks/dal.png" alt="" class="w-[300px] lg:opacity-0 opacity-10 group-hover:opacity-10 transition-all duration-500 object-cover absolute top-0 -end-10">
                            <IconsSchool v-if="f.icon === 'school'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <IconsBooks v-if="f.icon === 'class'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <IconsRepeat v-if="f.icon === 'layout'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <IconsWifi v-if="f.icon === 'wifi'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <h2 class="text-2xl group-hover:translate-y-0 lg:translate-y-100 translate-y-0 transition-all duration-500 font-bold text-white">
                                {{ f.title[locale] }}
                            </h2>
                            <div class="text-lg leading-tight group-hover:translate-y-0 lg:translate-y-100 translate-y-0 transition-all duration-500 text-white/70">
                                {{ f.description[locale] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Facilities Section -->
        <section class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
            <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                    {{ about.facilities.title[locale] }}
                </div>
                <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                    {{ about.facilities.subtitle[locale] }}
                </div>
                <div class="text-xl text-center text-gray-600 max-w-3xl">
                    {{ about.facilities.description[locale] }}
                </div>
                <div class="w-20 h-1 bg-web-primary rounded-full"></div>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="space-y-6 text-gray-700 leading-relaxed">
                    <p v-for="(paragraph, index) in about.facilities.content[locale]" :key="index" class="text-lg">
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </section>

        <!-- Methodology Section -->
        <section class="w-full bg-gray-50 py-12">
            <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ about.methodology.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ about.methodology.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ about.methodology.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto space-y-12">
                    <!-- Approach -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.methodology.approach[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.methodology.approach[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <!-- Classes -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.methodology.classes[locale].title }}</h3>
                        <p class="text-lg text-gray-600 mb-6">{{ about.methodology.classes[locale].description }}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-gray-50 rounded-lg p-4">
                                <h4 class="font-semibold text-lg text-gray-800 mb-2">Session Schedule</h4>
                                <ul class="space-y-2">
                                    <li v-for="(session, index) in about.methodology.classes[locale].sessions" :key="index" class="text-gray-700">
                                        {{ session }}
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-4">
                                <h4 class="font-semibold text-lg text-gray-800 mb-2">Class Features</h4>
                                <ul class="space-y-2">
                                    <li v-for="(feature, index) in about.methodology.classes[locale].features" :key="index" class="text-gray-700">
                                        {{ feature }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Tracks -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.methodology.tracks[locale].title }}</h3>
                        <p class="text-lg text-gray-600 mb-6">{{ about.methodology.tracks[locale].description }}</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div v-for="(program, index) in about.methodology.tracks[locale].programs" :key="index" class="border-l-4 border-web-primary pl-4">
                                <h4 class="font-semibold text-lg text-gray-800">{{ program }}</h4>
                            </div>
                        </div>
                        
                        <p class="text-gray-600 italic">{{ about.methodology.tracks[locale].note }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Campus Section -->
        <section class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
            <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                    {{ about.campus.title[locale] }}
                </div>
                <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                    {{ about.campus.subtitle[locale] }}
                </div>
                <div class="text-xl text-center text-gray-600 max-w-3xl">
                    {{ about.campus.description[locale] }}
                </div>
                <div class="w-20 h-1 bg-web-primary rounded-full"></div>
            </div>

            <div class="max-w-6xl mx-auto space-y-12">
                <!-- Location -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <h3 class="text-2xl font-bold text-web-primary">{{ about.campus.location[locale].title }}</h3>
                        <p v-for="(paragraph, index) in about.campus.location[locale].content" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>
                    <div class="h-[400px] w-full">
                        <img :src="about.campus.image" alt="" class="w-full rounded-4xl h-full object-cover">
                    </div>
                </div>

                <!-- Facilities -->
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.campus.facilities[locale].title }}</h3>
                    <div class="space-y-4 text-gray-700">
                        <p v-for="(paragraph, index) in about.campus.facilities[locale].content" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Global Atmosphere Section -->
        <section class="w-full bg-gray-50 py-12">
            <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ about.global_atmosphere.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ about.global_atmosphere.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ about.global_atmosphere.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.global_atmosphere.community[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.global_atmosphere.community[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Jordan Section -->
        <section class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
            <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                    {{ about.why_jordan.title[locale] }}
                </div>
                <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                    {{ about.why_jordan.subtitle[locale] }}
                </div>
                <div class="text-xl text-center text-gray-600 max-w-3xl">
                    {{ about.why_jordan.description[locale] }}
                </div>
                <div class="w-20 h-1 bg-web-primary rounded-full"></div>
            </div>

            <div class="max-w-6xl mx-auto space-y-12">
                <!-- Immersion -->
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.why_jordan.immersion[locale].title }}</h3>
                    <div class="space-y-4 text-gray-700">
                        <p v-for="(paragraph, index) in about.why_jordan.immersion[locale].content" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>
                </div>

                <!-- Dialect -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.why_jordan.dialect[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.why_jordan.dialect[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <!-- Culture -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.why_jordan.culture[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.why_jordan.culture[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Opportunities -->
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.why_jordan.opportunities[locale].title }}</h3>
                    <div class="space-y-4 text-gray-700">
                        <p v-for="(paragraph, index) in about.why_jordan.opportunities[locale].content" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Academic Team Section -->
        <section class="w-full bg-gray-50 py-12">
            <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ about.academic_team.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ about.academic_team.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ about.academic_team.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto space-y-12">
                    <!-- Instructors -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.academic_team.instructors[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.academic_team.instructors[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <!-- Administration -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.academic_team.administration[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.academic_team.administration[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <!-- Commitment -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.academic_team.commitment[locale].title }}</h3>
                        <div class="space-y-4 mb-6">
                            <div v-for="(feature, index) in about.academic_team.commitment[locale].features" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700 text-lg">{{ feature }}</span>
                            </div>
                        </div>
                        <p class="text-gray-600 italic text-lg">{{ about.academic_team.commitment[locale].conclusion }}</p>
                    </div>
                </div>
            </div>
        </section>






    </div>
</template>

<script setup>
import { IconsSchool } from '#components'


definePageMeta({
    name: 'about'
})

const {locale} = useI18n()


const { data: translations } = await useAsyncData('translations', () => {
    return queryCollection('translations').all()
})

const { data: settings } = await useAsyncData('settings', () => {
    return queryCollection('general').all()
})

const { data: aboutData } = await useAsyncData('about', () => {
    return queryCollection('about').all()
})

const { data: about_features } = await useAsyncData('about_features', () => {
    return queryCollection('about_features').all()
})

// Organize about data by type
const about = computed(() => {
    const data = aboutData.value || []
    
    // Helper function to safely get nested properties
    const safeGet = (obj, path, defaultValue = {}) => {
        try {
            return path.split('.').reduce((o, key) => o && o[key], obj) || defaultValue
        } catch {
            return defaultValue
        }
    }
    
    return {
        overview: data.find(item => item?.title?.en === 'Learn Arabic at Almujam – The Leading Arabic Language Center') || {
            title: { en: '', tr: '' },
            subtitle: { en: '', tr: '' },
            description: { en: '', tr: '' },
            content: { en: [], tr: [] }
        },
        location: data.find(item => item?.title?.en === 'An Ideal Location') || {
            title: { en: '', tr: '' },
            description: { en: '', tr: '' },
            content: { en: [], tr: [] },
            image: ''
        },
        facilities: data.find(item => item?.title?.en === 'Almujam Facilities') || {
            title: { en: '', tr: '' },
            subtitle: { en: '', tr: '' },
            description: { en: '', tr: '' },
            content: { en: [], tr: [] }
        },
        methodology: data.find(item => item?.title?.en === 'Methodology') || {
            title: { en: '', tr: '' },
            subtitle: { en: '', tr: '' },
            description: { en: '', tr: '' },
            approach: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            classes: { en: { title: '', description: '', sessions: [], features: [] }, tr: { title: '', description: '', sessions: [], features: [] } },
            tracks: { en: { title: '', description: '', programs: [], note: '' }, tr: { title: '', description: '', programs: [], note: '' } }
        },
        campus: data.find(item => item?.title?.en === 'Campus') || {
            title: { en: '', tr: '' },
            subtitle: { en: '', tr: '' },
            description: { en: '', tr: '' },
            location: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            facilities: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            image: ''
        },
        global_atmosphere: data.find(item => item?.title?.en === 'A Global Atmosphere') || {
            title: { en: '', tr: '' },
            subtitle: { en: '', tr: '' },
            description: { en: '', tr: '' },
            community: { en: { title: '', content: [] }, tr: { title: '', content: [] } }
        },
        why_jordan: data.find(item => item?.title?.en === 'Why Jordan') || {
            title: { en: '', tr: '' },
            subtitle: { en: '', tr: '' },
            description: { en: '', tr: '' },
            immersion: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            dialect: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            culture: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            opportunities: { en: { title: '', content: [] }, tr: { title: '', content: [] } }
        },
        academic_team: data.find(item => item?.title?.en === 'Our Academic Team') || {
            title: { en: '', tr: '' },
            subtitle: { en: '', tr: '' },
            description: { en: '', tr: '' },
            instructors: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            administration: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
            commitment: { en: { title: '', features: [], conclusion: '' }, tr: { title: '', features: [], conclusion: '' } }
        }
    }
})



useSeoMeta({
    title:  () => `${translations.value.find(t => t.key === 'why_almuajam').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    description: () => settings.value.find(setting => setting.key === 'about_page_seo_desc').value[locale.value],
    ogTitle: () => `${translations.value.find(t => t.key === 'why_almuajam').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    ogDescription: () => settings.value.find(setting => setting.key === 'about_page_seo_desc').value[locale.value],
    ogImage: '/brand/seo_image.png',
    twitterTitle: () => `${translations.value.find(t => t.key === 'why_almuajam').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
})


const ha2Ref = ref(null)
const dalRef = ref(null)
const featuresRef = ref(null)

onMounted(async () => {
    await nextTick()
    useGSAP().from(ha2Ref   .value, {
    transform: 'translateX(-600px)',
    ease: "power2.inOut",
    duration: 0.6
  })    
  useGSAP().from(dalRef.value, {
    transform: 'translateX(700px)',
    ease: "power2.inOut",
    duration: 0.6
  })

})
</script>

<style  scoped>

</style>