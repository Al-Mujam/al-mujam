<template>
    <div class="mt-[70px] w-full">

        <!-- hero section -->
        <div class="h-[50svh] w-full  flex flex-col items-center justify-center overflow-hidden">
             <div class="bg-web-primary gap-3 h-[calc(100%-30px)] w-[calc(100%-40px)] rounded-4xl relative flex flex-col items-center justify-center">
                <img ref="ha2Ref" src="/watermarks/7a2.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -start-0 -top-20 z-0 " />
                <img ref="dalRef" src="/watermarks/dal.png" class="absolute filter md:w-[400px] w-[200px] opacity-10 -end-0 -bottom-10 z-0 " />
                <div ref="globeRef" class="md:text-4xl text-3xl  font-bold text-center text-white w-[80%]">
           {{ translations.find(t => t.key === 'academics_admissions').value[locale] }}
        </div>

        <div class="breadcrumbs text-sm text-white">
  <ul>
    <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'home'}">{{ translations.find(t => t.key === 'home').value[locale] }}</NuxtLink></li>
    <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'academic-admissions'}">{{ translations.find(t => t.key === 'academics_admissions').value[locale] }}</NuxtLink></li>
  </ul>
</div>
             </div>

        </div>

        <!-- Introduction Section -->
        <section class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
            <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                    {{ admissions.introduction.title[locale] }}
                </div>
                <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                    {{ admissions.introduction.subtitle[locale] }}
                </div>
                <div class="text-xl text-center text-gray-600 max-w-3xl">
                    {{ admissions.introduction.description[locale] }}
                </div>
                <div class="w-20 h-1 bg-web-primary rounded-full"></div>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="space-y-6 text-gray-700 leading-relaxed">
                    <p v-for="(paragraph, index) in admissions.introduction.content[locale]" :key="index" class="text-lg">
                        {{ paragraph }}
                    </p>
                </div>
                
                <div class="mt-8 text-center">
                    <a :href="admissions.introduction.button_link[locale]" target="_blank" class="web-btn ">
                        {{ admissions.introduction.button_text[locale] }}
                    </a>
                </div>
            </div>
        </section>

        <!-- Program Dates Section -->
        <section class="w-full bg-gray-50 py-12">
            <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ admissions.program_dates.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ admissions.program_dates.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ admissions.program_dates.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Content -->
                        <div class="space-y-6 text-gray-700 leading-relaxed">
                            <p v-for="(paragraph, index) in admissions.program_dates.content[locale]" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>

                        <!-- Calendar -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">Academic Calendar | 2026 – 2027</h3>
                            <div class="space-y-4">
                                <div v-for="(term, index) in admissions.program_dates.calendar[locale]" :key="index" class="border-l-4 border-web-primary pl-4">
                                    <h4 class="font-semibold text-lg text-gray-800">{{ term.term }}</h4>
                                    <p class="text-sm text-gray-600">Orientation: {{ term.orientation }}</p>
                                    <p class="text-sm text-gray-600">Classes & Final Exams: {{ term.classes }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Private Tutoring -->
                    <div class="mt-12 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">Private Tutoring</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in admissions.program_dates.private_tutoring[locale]" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 text-center">
                        <a :href="admissions.program_dates.button_link[locale]" target="_blank" class="web-btn ">
                            {{ admissions.program_dates.button_text[locale] }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tuition Section -->
        <section class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
            <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                    {{ admissions.tuition.title[locale] }}
                </div>
                <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                    {{ admissions.tuition.subtitle[locale] }}
                </div>
                <div class="text-xl text-center text-gray-600 max-w-3xl">
                    {{ admissions.tuition.description[locale] }}
                </div>
                <div class="w-20 h-1 bg-web-primary rounded-full"></div>
            </div>

            <div class="max-w-6xl mx-auto space-y-12">
                <!-- Content -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in admissions.tuition.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <!-- Base Rate -->
                    <div class="bg-web-primary rounded-2xl p-8 text-white">
                        <h3 class="text-2xl font-bold mb-4">{{ admissions.tuition.base_rate[locale].title }}</h3>
                        <div class="text-4xl font-bold mb-4">{{ admissions.tuition.base_rate[locale].amount }}</div>
                        <p class="text-lg opacity-90">{{ admissions.tuition.base_rate[locale].description }}</p>
                    </div>
                </div>

                <!-- Individual Discounts -->
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">{{ admissions.tuition.individual_discounts[locale].title }}</h3>
                    <p class="text-gray-600 mb-6">{{ admissions.tuition.individual_discounts[locale].subtitle }}</p>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="border-b-2 border-gray-200">
                                    <th class="text-left py-3 px-4 font-semibold">Term</th>
                                    <th class="text-left py-3 px-4 font-semibold">Cost per Term</th>
                                    <th class="text-left py-3 px-4 font-semibold">Discount</th>
                                    <th class="text-left py-3 px-4 font-semibold">Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(term, index) in admissions.tuition.individual_discounts[locale].terms" :key="index" class="border-b border-gray-100">
                                    <td class="py-3 px-4">{{ term.term }}</td>
                                    <td class="py-3 px-4 font-semibold">{{ term.cost }}</td>
                                    <td class="py-3 px-4 text-web-primary">{{ term.discount }}</td>
                                    <td class="py-3 px-4 text-green-600">{{ term.savings }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Group Discounts -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ admissions.tuition.group_discounts[locale].duos_trios.title }}</h3>
                        <div class="space-y-4">
                            <div v-for="(term, index) in admissions.tuition.group_discounts[locale].duos_trios.terms" :key="index" class="flex justify-between items-center py-2 border-b border-gray-100">
                                <span class="font-medium">{{ term.term }}</span>
                                <div class="text-right">
                                    <div class="font-semibold">{{ term.cost }}</div>
                                    <div class="text-sm text-web-primary">{{ term.discount }}</div>
                                    <div class="text-sm text-green-600">{{ term.savings }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ admissions.tuition.group_discounts[locale].ensembles.title }}</h3>
                        <div class="space-y-4">
                            <div v-for="(term, index) in admissions.tuition.group_discounts[locale].ensembles.terms" :key="index" class="flex justify-between items-center py-2 border-b border-gray-100">
                                <span class="font-medium">{{ term.term }}</span>
                                <div class="text-right">
                                    <div class="font-semibold">{{ term.cost }}</div>
                                    <div class="text-sm text-web-primary">{{ term.discount }}</div>
                                    <div class="text-sm text-green-600">{{ term.savings }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center text-gray-600 italic">
                    {{ admissions.tuition.group_discounts[locale].note }}
                </div>

                <!-- Private Tutoring Rates -->
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">{{ admissions.tuition.private_tutoring[locale].title }}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div v-for="(session, index) in admissions.tuition.private_tutoring[locale].sessions" :key="index" class="text-center p-4 border border-gray-200 rounded-lg">
                            <div class="font-semibold text-lg mb-2">{{ session.type }}</div>
                            <div class="text-2xl font-bold text-web-primary">{{ session.rate }}</div>
                        </div>
                    </div>
                    <div class="space-y-2 text-gray-600">
                        <p v-for="(note, index) in admissions.tuition.private_tutoring[locale].notes" :key="index" class="text-sm">
                            {{ note }}
                        </p>
                    </div>
                </div>

                <!-- Payment Info -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">Deposits & Payment</h3>
                        <div class="space-y-3">
                            <div v-for="(deposit, index) in admissions.tuition.payment_info[locale].deposits" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ deposit }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">Payment Methods</h3>
                        <div class="space-y-3">
                            <div v-for="(method, index) in admissions.tuition.payment_info[locale].methods" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ method }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Refund Policy -->
                <div class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">Refund Policy Overview</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="border-b-2 border-gray-200">
                                    <th class="text-left py-3 px-4 font-semibold">Timeline</th>
                                    <th class="text-left py-3 px-4 font-semibold">Refund Eligibility</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(policy, index) in admissions.tuition.refund_policy[locale]" :key="index" class="border-b border-gray-100">
                                    <td class="py-3 px-4 font-medium">{{ policy.timeline }}</td>
                                    <td class="py-3 px-4">{{ policy.eligibility }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="text-center">
                    <a :href="admissions.tuition.button_link[locale]" target="_blank" class="web-btn ">
                        {{ admissions.tuition.button_text[locale] }}
                    </a>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { IconsSchool } from '#components'

definePageMeta({
    name: 'academic-admissions'
})

const {locale} = useI18n()

const { data: translations } = await useAsyncData('translations', () => {
    return queryCollection('translations').all()
})

const { data: settings } = await useAsyncData('settings', () => {
    return queryCollection('general').all()
})

const { data: about } = await useAsyncData('about', () => {
    return queryCollection('about').all()
})

const { data: about_features } = await useAsyncData('about_features', () => {
    return queryCollection('about_features').all()
})

// Fetch admissions data
const { data: admissionsData } = await useAsyncData('admissions', () => {
    return queryCollection('admissions').all()
})

// Organize admissions data by type
const admissions = computed(() => {
    const data = admissionsData.value || []
    return {
        introduction: data.find(item => item.title?.en === 'Introduction') || {},
        program_dates: data.find(item => item.title?.en === 'Program Dates') || {},
        tuition: data.find(item => item.title?.en === 'Tuition') || {}
    }
})

useSeoMeta({
    title:  () => `${translations.value.find(t => t.key === 'academics_admissions').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    description: () => settings.value.find(setting => setting.key === 'academics_admissions_page_seo_desc').value[locale.value],
    ogTitle: () => `${translations.value.find(t => t.key === 'academics_admissions').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
    ogDescription: () => settings.value.find(setting => setting.key === 'academics_admissions_page_seo_desc').value[locale.value],
    ogImage: '/brand/seo_image.png',
    twitterTitle: () => `${translations.value.find(t => t.key === 'academics_admissions').value[locale.value]} - ${settings.value.find(setting => setting.key === 'app_name').value[locale.value]}`,
})

const ha2Ref = ref(null)
const dalRef = ref(null)
const featuresRef = ref(null)

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

})
</script>

<style scoped>

</style>