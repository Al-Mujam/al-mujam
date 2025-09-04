<template>
    <div>
        <LangModal v-if="langModal" :open="langModal" @close="closeLangModal" />
        <div class="">
            <input :id="drawerId" type="checkbox" class="drawer-toggle" />
            
            <div class="drawer-content z-0">
               <slot />
    
            
            
            
            </div>


            <div class="drawer-side z-20">
                <label :for="drawerId" aria-label="close sidebar" class="drawer-overlay"></label>


                <div class="menu bg-background text-text-color min-h-full w-80 p-4 relative flex flex-col">
                    <div class="flex flex-col gap-1 flex-1">
                        
                        <NuxtLink :to="{name: 'home'}" class="web-btn-nav text-md px-2 hover:px-5" active-class="bg-web-primary/10 px-5" >
                            {{ translations.find(t => t.key === 'home').value[locale] }}
                        </NuxtLink>
                        
                        <!-- About Section with Collapsible Subsections -->
                        <div class="flex flex-col">
                            <div class="flex items-center justify-between cursor-pointer" @click.stop="toggleAboutSection">
                                <NuxtLink :to="{name: 'about'}" class="web-btn-nav flex items-center justify-between text-md px-2 hover:ps-5 flex-1" active-class="bg-web-primary/10 ps-5" >
                                    {{ translations.find(t => t.key === 'why_almuajam').value[locale] }}
                                <svg :class="showAboutSections ? 'rotate-180' : ''" class="w-4 h-4 transition-transform duration-200 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                </NuxtLink>
                            </div>
                            <div v-show="showAboutSections" class="flex flex-col ml-4 mt-1">
                                <NuxtLink v-for="section in aboutSections" :key="section.id" 
                                    :to="{name: 'about', query: {section: section.id}}"
                                    class="web-btn-nav text-sm px-2 hover:px-5 opacity-70 hover:opacity-100   hover:text-web-primary transition-colors duration-200">
                                    {{ section.title[locale] }}
                                </NuxtLink>
                            </div>
                        </div>
                        
                        <!-- Academic Admissions Section with Collapsible Subsections -->
                        <div class="flex flex-col">
                            <div class="flex items-center justify-between cursor-pointer" @click="toggleAcademicSection">
                                <NuxtLink :to="{name: 'academic-admissions'}" class="web-btn-nav flex items-center justify-between text-md px-2 hover:ps-5 flex-1" active-class="bg-web-primary/10 ps-5" >
                                    {{ translations.find(t => t.key === 'academics_admissions').value[locale] }}
                                <svg :class="showAcademicSections ? 'rotate-180' : ''" class="w-4 h-4 transition-transform duration-200 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                </NuxtLink>
                            </div>
                            <div v-show="showAcademicSections" class="flex flex-col ml-4 mt-1">
                                <!-- Academics -->
                                <div class="text-xs font-semibold  uppercase tracking-wider px-2 py-1">
                                    {{ translations.find(t => t.key === 'academics').value[locale] }}
                                </div>
                                <NuxtLink v-for="section in academicsSections" :key="section.id" 
                                    :to="{name: 'academic-admissions', query: {tab: 'academics', section: section.id}}"
                                    class="web-btn-nav text-sm px-2 py-1 opacity-70 hover:opacity-100 hover:px-5  hover:text-web-primary transition-colors duration-200">
                                    {{ section.title[locale] }}
                                </NuxtLink>
                                
                                <!-- Admissions -->
                                <div class="text-xs font-semibold  uppercase tracking-wider px-2 py-1 mt-2">
                                    {{ translations.find(t => t.key === 'admissions').value[locale] }}
                                </div>
                                <NuxtLink v-for="section in admissionsSections" :key="section.id" 
                                    :to="{name: 'academic-admissions', query: {tab: 'admissions', section: section.id}}"
                                    class="web-btn-nav text-sm px-2 py-1 opacity-70 hover:opacity-100 hover:px-5  hover:text-web-primary transition-colors duration-200">
                                    {{ section.title[locale] }}
                                </NuxtLink>
                                
                                <!-- Accommodation -->
                                <div class="text-xs font-semibold  uppercase tracking-wider px-2 py-1 mt-2">
                                    {{ translations.find(t => t.key === 'accommodation').value[locale] }}
                                </div>
                                <NuxtLink v-for="section in accommodationSections" :key="section.id" 
                                    :to="{name: 'academic-admissions', query: {tab: 'accommodation', section: section.id}}"
                                    class="web-btn-nav text-sm px-2 py-1 opacity-70 hover:opacity-100 hover:px-5  hover:text-web-primary transition-colors duration-200">
                                    {{ section.title[locale] }}
                                </NuxtLink>
                            </div>
                        </div>
                        
                        <!-- Student Life Section with Collapsible Subsections -->
                        <div class="flex flex-col">
                            <div class="flex items-center justify-between cursor-pointer" @click="toggleStudentLifeSection">
                                <NuxtLink :to="{name: 'student-life'}" class="web-btn-nav flex items-center justify-between text-md px-2 hover:ps-5 flex-1" active-class="bg-web-primary/10 ps-5" >
                                    {{ translations.find(t => t.key === 'student_life').value[locale] }}
                                <svg :class="showStudentLifeSections ? 'rotate-180' : ''" class="w-4 h-4 transition-transform duration-200 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                                </NuxtLink>
                            </div>
                            <div v-show="showStudentLifeSections" class="flex flex-col ml-4 mt-1">
                                <NuxtLink v-for="section in studentLifeSections" :key="section.id" 
                                    :to="{name: 'student-life', query: {section: section.id}}"
                                    class="web-btn-nav text-sm px-2 py-1 opacity-70 hover:opacity-100 hover:px-5  hover:text-web-primary transition-colors duration-200">
                                    {{ section.title[locale] }}
                                </NuxtLink>
                            </div>
                        </div>
                        
                        <NuxtLink :to="{name: 'blog-resources'}" class="web-btn-nav text-md px-2 hover:px-5 " active-class="bg-web-primary/10 px-5" >
                            {{ translations.find(t => t.key === 'blog_resources').value[locale] }}
                        </NuxtLink>
                       
                        
                    </div>
                    
                    <!-- Language and Apply Now section at the bottom -->
                    <div class="flex flex-col gap-4 mt-8 pt-4 border-t border-gray-200/20">
                        <div class="flex items-center gap-4 cursor-pointer opacity-60 text-text-color hover:opacity-100 transition-all duration-300" @click="openLangModal">
                            <IconsLang  class="text-xl cursor-pointer  transition-all duration-300 text-text-color" />
                            <span class="text-sm  transition-all duration-300">{{ locales.find(l => l.code === locale)?.language }}</span>
                        </div>
                        <NuxtLink external target="_blank" :to="settings.find(setting => setting.key === 'apply_now_link').value[locale]" class="web-btn w-full text-center">
                            {{ translations.find(t => t.key === 'apply_now').value[locale] }}
                        </NuxtLink>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IconsLang } from '#components';

const props = defineProps({
    drawerId: {
        type: String,
        required: true
    }
})

const { data: settings } = await useAsyncData('settings', () => {
  return queryCollection('general').all()
})

const { data: translations } = await useAsyncData('translations', () => {
  return queryCollection('translations').all()
})


const {locale, locales} = useI18n()
const langModal = ref(false);
const openLangModal = () => {
    langModal.value = true;
}

const closeLangModal = () => {
    langModal.value = false;
}

// Reactive data for collapsible sections
const showAboutSections = ref(false)
const showAcademicSections = ref(false)
const showStudentLifeSections = ref(false)

// Toggle functions
const toggleAboutSection = () => {
    showAboutSections.value = !showAboutSections.value
}

const toggleAcademicSection = () => {
    showAcademicSections.value = !showAcademicSections.value
}

const toggleStudentLifeSection = () => {
    showStudentLifeSections.value = !showStudentLifeSections.value
}

// Section data (same as in NavBarComponent)
const aboutSections = [
    { id: 'overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
    { id: 'location', title: { en: 'Location', tr: 'Lokasyon' } },
    { id: 'facilities', title: { en: 'Facilities', tr: 'Tesisler' } },
    { id: 'methodology', title: { en: 'Methodology', tr: 'Metodoloji' } },
    { id: 'campus', title: { en: 'Campus', tr: 'Kampüs' } },
    { id: 'global-atmosphere', title: { en: 'Global Atmosphere', tr: 'Küresel Hava' } },
    { id: 'why-jordan', title: { en: 'Why Jordan', tr: 'Neden Jordan' } },
    { id: 'academic-team', title: { en: 'Academic Team', tr: 'Akademik Takım' } },
]

const academicsSections = [
    { id: 'programs-overview', title: { en: 'Programs Overview', tr: 'Program Genel Bakış' } },
    { id: 'classical-arabic', title: { en: 'Classical Arabic', tr: 'Klasik Arapça' } },
    { id: 'modern-standard-arabic', title: { en: 'Modern Standard Arabic', tr: 'Modern Standart Arapça' } },
    { id: 'ammiyya', title: { en: 'Jordanian Ammiyya', tr: 'Ürdün Ammiyya' } },
    { id: 'online-programs', title: { en: 'Online Programs', tr: 'Çevrimiçi Programlar' } }
]

const admissionsSections = [
    { id: 'introduction', title: { en: 'Introduction', tr: 'Giriş' } },
    { id: 'program-dates', title: { en: 'Program Dates', tr: 'Program Tarihleri' } },
    { id: 'tuition', title: { en: 'Tuition', tr: 'Öğrenim Ücreti' } }
]

const accommodationSections = [
    { id: 'overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
    { id: 'housing-process', title: { en: 'Housing Process', tr: 'Konaklama Süreci' } },
    { id: 'housing-philosophy', title: { en: 'Housing Philosophy', tr: 'Konaklama Felsefesi' } },
    { id: 'housing-options', title: { en: 'Housing Options', tr: 'Konaklama Seçenekleri' } },
    { id: 'recommendations', title: { en: 'Recommendations', tr: 'Öneriler' } },
    { id: 'room-types', title: { en: 'Room Types', tr: 'Oda Türleri' } },
    { id: 'pricing', title: { en: 'Pricing', tr: 'Fiyatlandırma' } },
    { id: 'policies', title: { en: 'Policies', tr: 'Politikalar' } }
]

const studentLifeSections = [
    { id: 'faq', title: { en: 'FAQ & Arrival', tr: 'SSS & Varış' } },
    { id: 'local-food', title: { en: 'Local Food', tr: 'Yerel Yemek' } },
    { id: 'safety-health', title: { en: 'Safety & Health', tr: 'Güvenlik & Sağlık' } },
    { id: 'immersion-tours', title: { en: 'Immersion Tours', tr: 'Daldırma Turları' } },
    { id: 'travel-visas', title: { en: 'Travel & Visas', tr: 'Seyahat & Vize' } },
    { id: 'arrival-departure', title: { en: 'Arrival & Departure', tr: 'Varış & Ayrılış' } },
    { id: 'internships', title: { en: 'Internships', tr: 'Stajlar' } },
]

</script>

<style scoped>

</style>