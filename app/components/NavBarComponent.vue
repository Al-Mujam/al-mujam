<template>
    <div class="fixed top-0 left-0 w-full z-50">
        <LangModal v-if="langModal" :open="langModal" @close="closeLangModal" />
        <DrawerComponent drawerId="nav-drawer">
            
            <div class="w-full h-[70px] bg-background/70 backdrop-blur-lg  text-text-color text-[0.9rem] " :class="y > 10 ? 'border-b border-gray-200' : ''">
                <div class="flex items-center justify-between max-w-[1280px] h-full container mx-auto px-4 md:px-20 lg:px-10 relative">

                    
                    <div class="flex items-center gap-4 z-10">
                        <NuxtLink :to="{name: 'home'}">
                            <img :src="settings.find(setting => setting.key === 'app_logo').value[locale]" alt="logo" class="h-12">
                        </NuxtLink>
                        
                    </div>

                    <div class="lg:flex hidden   items-center gap-8 absolute left-1/2  w-full justify-center -translate-x-1/2 "  >
                        <NuxtLink class="opacity-60 hover:opacity-100 transition-all duration-300" active-class="opacity-100" :to="{name: 'home'}">
                            {{ translations.find(t => t.key === 'home').value[locale] }}
                        </NuxtLink>

                        <!-- About Page Dropdown -->
                        <div class="relative group">
                            <div class="transition-all  duration-300 cursor-pointer flex items-center gap-1">
                                <NuxtLink :to="{name: 'about'}" class=" transition-all duration-300 hover:opacity-100 opacity-60" active-class="opacity-100">
                                    {{ translations.find(t => t.key === 'why_almuajam').value[locale] }}
                                </NuxtLink>
                                <svg   :class="$route.name === 'about' ? 'opacity-100' : 'opacity-60'" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            
                            <!-- About Dropdown Menu -->
                            <div class="absolute text-text-color top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div class="py-2">
                                    <NuxtLink v-for="section in aboutSections" :key="section.id" 
                                        :to="{name: 'about', query: {section: section.id}}"
                                        class="block px-4 py-2 text-sm opacity-80 hover:opacity-100 hover:bg-gray-100 hover:text-web-primary transition-colors duration-200">
                                        {{ section.title[locale] }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Academic Admissions Page Dropdown -->
                        <div class="relative group">
                            <div class="transition-all  duration-300 cursor-pointer flex items-center gap-1">
                                <NuxtLink :to="{name: 'academic-admissions'}" class=" transition-all duration-300 hover:opacity-100 opacity-60" active-class="opacity-100">
                                    {{ translations.find(t => t.key === 'academics_admissions').value[locale] }}
                                </NuxtLink>
                                <svg   :class="$route.name === 'academic-admissions' ? 'opacity-100' : 'opacity-60'" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            
                            <!-- Academic Admissions Dropdown Menu -->
                            <div class="absolute top-full left-0 mt-2 w-max bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div class="py-2 flex">
                                    <!-- Academics Tab Sections -->
                                    <div>
                                        <div class="px-4 py-2 text-xs font-semibold text-text-color/60 uppercase tracking-wider border-b border-gray-100">
                                            {{ translations.find(t => t.key === 'academics').value[locale] }}
                                        </div>
                                        <NuxtLink v-for="section in academicsSections" :key="section.id"
                                            :to="{name: 'academic-admissions', query: {tab: 'academics', section: section.id}}"
                                            class="block px-4 py-2 text-sm text-text-color/80 hover:bg-gray-100 hover:text-web-primary transition-colors duration-200">
                                            {{ section.title[locale] }}
                                        </NuxtLink>
                                    </div>

                                    <!-- Admissions Tab Sections -->
                                    <div>
                                        <div class="px-4 py-2 text-xs font-semibold text-text-color/60 uppercase tracking-wider border-b border-gray-100">
                                            {{ translations.find(t => t.key === 'admissions').value[locale] }}
                                        </div>
                                        <NuxtLink v-for="section in admissionsSections" :key="section.id"
                                            :to="{name: 'academic-admissions', query: {tab: 'admissions', section: section.id}}"
                                            class="block px-4 py-2 text-sm text-text-color/80 hover:bg-gray-100 hover:text-web-primary transition-colors duration-200">
                                            {{ section.title[locale] }}
                                        </NuxtLink>
                                    </div>

                                    <!-- Accommodation Tab Sections -->
                                    <div>
                                        <div class="px-4 py-2 text-xs font-semibold text-text-color/60 uppercase tracking-wider border-b border-gray-100">
                                            {{ translations.find(t => t.key === 'accommodation').value[locale] }}
                                        </div>
                                        <NuxtLink v-for="section in accommodationSections" :key="section.id"
                                            :to="{name: 'academic-admissions', query: {tab: 'accommodation', section: section.id}}"
                                            class="block px-4 py-2 text-sm text-text-color/80 hover:bg-gray-100 hover:text-web-primary transition-colors duration-200">
                                            {{ section.title[locale] }}
                                        </NuxtLink>
                                    </div>

                                    <!-- Quran Tab Sections -->
                                    <div>
                                        <div class="px-4 py-2 text-xs font-semibold text-text-color/60 uppercase tracking-wider border-b border-gray-100">
                                            Quran & Tajweed
                                        </div>
                                        <NuxtLink v-for="section in quranSections" :key="section.id"
                                            :to="{name: 'academic-admissions', query: {tab: 'quran', section: section.id}}"
                                            class="block px-4 py-2 text-sm text-text-color/80 hover:bg-gray-100 hover:text-web-primary transition-colors duration-200">
                                            {{ section.title[locale] }}
                                        </NuxtLink>
                                    </div>

                                    <!-- Noorani Qaida Tab Sections -->
                                    <div>
                                        <div class="px-4 py-2 text-xs font-semibold text-text-color/60 uppercase tracking-wider border-b border-gray-100">
                                            Noorani Qaida
                                        </div>
                                        <NuxtLink v-for="section in nooraniSections" :key="section.id"
                                            :to="{name: 'academic-admissions', query: {tab: 'noorani', section: section.id}}"
                                            class="block px-4 py-2 text-sm text-text-color/80 hover:bg-gray-100 hover:text-web-primary transition-colors duration-200">
                                            {{ section.title[locale] }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <!-- Student Life Page Dropdown -->
                        <div class="relative group">
                            <div class="transition-all  duration-300 cursor-pointer flex items-center gap-1">
                                <NuxtLink     :to="{name: 'student-life'}" class=" transition-all duration-300 hover:opacity-100 opacity-60" active-class="opacity-100">
                                    {{ translations.find(t => t.key === 'student_life').value[locale] }}
                                </NuxtLink>
                                <svg   :class="$route.name === 'student-life' ? 'opacity-100' : 'opacity-60'" class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            
                            <!-- Student Life Dropdown Menu -->
                            <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div class="py-2">
                                    <NuxtLink v-for="section in studentLifeSections" :key="section.id" 
                                        :to="{name: 'student-life', query: {section: section.id}}"
                                        class="block px-4 py-2 text-sm text-text-color/80 hover:bg-gray-100 hover:text-web-primary transition-colors duration-200">
                                        {{ section.title[locale] }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        
                        <NuxtLink class="opacity-60 hover:opacity-100 transition-all duration-300" active-class="opacity-100" :to="{name: 'blog-resources'}">
                            {{ translations.find(t => t.key === 'blog_resources').value[locale] }}
                        </NuxtLink>
                    </div>
           

                <div class=" hidden lg:flex items-center justify-between gap-4 z-10">
                    <IconsLang @click="openLangModal" class="text-xl cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 text-text-color" />
                    <NuxtLink external target="_blank" :to="settings.find(setting => setting.key === 'apply_now_link').value[locale]" class="web-btn">
                        {{ translations.find(t => t.key === 'apply_now').value[locale] }}
                    </NuxtLink>
                </div>
                <div class="flex lg:hidden items-center justify-between gap-4 z-10">
                    <label for="nav-drawer" class="web-btn-square">
                        <IconsMenu class="text-xl" />
                    </label>
                </div>
                </div>
            </div>
           
        </DrawerComponent>
    </div>
</template>

<script setup>
import { IconsLang, IconsMenu } from '#components';


const {locale} = useI18n()

const { data: settings } = await useAsyncData('settings', () => {
  return queryCollection('general').all()
})

const { data: translations } = await useAsyncData('translations', () => {
  return queryCollection('translations').all()
})

const langModal = ref(false);
const openLangModal = () => {
    langModal.value = true;
}

const closeLangModal = () => {
    langModal.value = false;
}

const {y} = useWindowScroll()

// About page sections
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

// Academic-admissions page sections by tab
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

const quranSections = [
    { id: 'quran-overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
    { id: 'why-choose', title: { en: 'Why Choose Almujam', tr: 'Neden Almujam' } },
    { id: 'quran-programs', title: { en: 'Programs', tr: 'Programlar' } },
    { id: 'class-formats', title: { en: 'Class Formats', tr: 'Ders Formatları' } },
    { id: 'success-stories', title: { en: 'Success Stories', tr: 'Başarı Hikayeleri' } },
    { id: 'faq', title: { en: 'FAQ', tr: 'SSS' } }
]

const nooraniSections = [
    { id: 'noorani-overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
    { id: 'understanding-noorani', title: { en: 'Understanding Noorani Qaida', tr: 'Noorani Kaide\'yi Anlamak' } },
    { id: 'who-benefits', title: { en: 'Who Benefits', tr: 'Kimler Faydalanır' } },
    { id: 'noorani-curriculum', title: { en: 'Curriculum', tr: 'Müfredat' } },
    { id: 'learning-outcomes', title: { en: 'Learning Outcomes', tr: 'Öğrenme Çıktıları' } },
    { id: 'noorani-success-stories', title: { en: 'Success Stories', tr: 'Başarı Hikayeleri' } },
    { id: 'course-information', title: { en: 'Course Information', tr: 'Kurs Bilgileri' } }
]

// Student life page sections
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