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
          <ul class="flex items-center gap-2">
            <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'home'}">{{ translations.find(t => t.key === 'home').value[locale] }}</NuxtLink></li>
            <li><NuxtLink class="opacity-70 hover:opacity-100 transition-all duration-300" :to="{name: 'about'}">{{ translations.find(t => t.key === 'why_almuajam').value[locale] }}</NuxtLink></li>
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

        <!-- Overview Section -->
        <section id="overview" v-if="about.overview.title?.[locale]" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
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
        <section v-if="about.location.title?.[locale]" id="location" class="w-full bg-gray-50 py-12">
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
        <section v-if="about.facilities.title?.[locale]" id="facilities" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
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
        <section v-if="about.methodology.title?.[locale]" id="methodology" class="w-full bg-gray-50 py-12">
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
                                <h4 class="font-semibold text-lg text-gray-800 mb-2">{{ translations.find(t => t.key === 'session_schedule').value[locale] }}</h4>
                                <ul class="space-y-2">
                                    <li v-for="(session, index) in about.methodology.classes[locale].sessions" :key="index" class="text-gray-700">
                                        {{ session }}
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-4">
                                <h4 class="font-semibold text-lg text-gray-800 mb-2">{{ translations.find(t => t.key === 'class_features').value[locale] }}</h4>
                                <ul class="space-y-2">
                                    <li v-for="(feature, index) in about.methodology.classes[locale].features" :key="index" class="text-gray-700">
                                        {{ feature }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Extracurricular Activities -->
                        <div v-if="about.methodology.classes[locale].extracurricular" class="bg-web-primary/10 rounded-lg p-6">
                            <h4 class="text-xl font-bold text-web-primary mb-4">{{ about.methodology.classes[locale].extracurricular.title }}</h4>
                            <p class="text-gray-700 mb-4">{{ about.methodology.classes[locale].extracurricular.description }}</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div v-for="(activity, index) in about.methodology.classes[locale].extracurricular.activities" :key="index" class="flex items-start">
                                    <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span class="text-gray-700">{{ activity }}</span>
                                </div>
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
        <section v-if="about.campus.title?.[locale]" id="campus" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
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

                <!-- Detailed Facilities -->
                <div v-if="about.campus.detailed_facilities" class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.campus.detailed_facilities[locale].title }}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="(facility, index) in about.campus.detailed_facilities[locale].facilities" :key="index" class="bg-gray-50 rounded-lg p-4">
                            <h4 class="font-semibold text-lg text-gray-800 mb-2">{{ facility.name }}</h4>
                            <p class="text-gray-700">{{ facility.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Global Atmosphere Section -->
        <section v-if="about.global_atmosphere.title?.[locale]" id="global-atmosphere" class="w-full bg-gray-50 py-12">
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

                <div class="max-w-6xl mx-auto space-y-8">
                    <!-- Community -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.global_atmosphere.community[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.global_atmosphere.community[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <!-- Selection Criteria -->
                    <div v-if="about.global_atmosphere.selection_criteria" class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.global_atmosphere.selection_criteria[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.global_atmosphere.selection_criteria[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <!-- Seminars and Workshops -->
                    <div v-if="about.global_atmosphere.seminars_workshops" class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.global_atmosphere.seminars_workshops[locale].title }}</h3>
                        <div class="space-y-4 text-gray-700">
                            <p v-for="(paragraph, index) in about.global_atmosphere.seminars_workshops[locale].content" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Jordan Section -->
        <section v-if="about.why_jordan.title?.[locale]" id="why-jordan" class="container mx-auto px-4 md:px-20 py-12 lg:px-10 max-w-[1280px]">
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

                <!-- Strategic Location -->
                <div v-if="about.why_jordan.strategic_location" class="bg-white rounded-2xl shadow-lg p-8">
                    <h3 class="text-2xl font-bold text-web-primary mb-6">{{ about.why_jordan.strategic_location[locale].title }}</h3>
                    <div class="space-y-4 text-gray-700">
                        <p v-for="(paragraph, index) in about.why_jordan.strategic_location[locale].content" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
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
        <section v-if="about.academic_team.title?.[locale]" id="academic-team" class="w-full bg-gray-50 py-12">
            <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        Our Team
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ about.academic_team.title[locale] }}
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
                        <p class="text-lg text-gray-600 mb-6">{{ about.academic_team.commitment[locale].description }}</p>
                        <div class="space-y-4 mb-6">
                            <div v-for="(feature, index) in about.academic_team.commitment[locale].features" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700 text-lg">{{ feature }}</span>
                            </div>
                        </div>
                        
                        <!-- Three-Phase Evaluation Process Details -->
                        <div v-if="about.academic_team.commitment[locale].evaluation_process" class="bg-web-primary/10 rounded-lg p-6 mt-6">
                            <h4 class="text-xl font-bold text-web-primary mb-4">{{ about.academic_team.commitment[locale].evaluation_process.title }}</h4>
                            <p class="text-gray-700 mb-4">{{ about.academic_team.commitment[locale].evaluation_process.description }}</p>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div v-for="(phase, index) in about.academic_team.commitment[locale].evaluation_process.phases" :key="index" class="bg-white rounded-lg p-4">
                                    <h5 class="font-semibold text-lg text-gray-800 mb-2">{{ phase.title }}</h5>
                                    <p class="text-gray-700">{{ phase.description }}</p>
                                </div>
                            </div>
                            <p class="text-gray-700 italic">{{ about.academic_team.commitment[locale].evaluation_process.conclusion }}</p>
                        </div>
                        
                        <p class="text-gray-600 italic text-lg mt-6">{{ about.academic_team.commitment[locale].conclusion }}</p>
                    </div>
                </div>
            </div>
        </section>






    </div>
</template>

<script setup>
import { IconsSchool, IconsBooks, IconsRepeat, IconsWifi } from '#components'

// Import useRoute for handling query parameters
// This allows us to handle URLs like: /about?section=methodology
const route = useRoute()


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
    
    // Data processing for about sections
    
    // Helper function to safely get nested properties
    const safeGet = (obj, path, defaultValue = {}) => {
        try {
            return path.split('.').reduce((o, key) => o && o[key], obj) || defaultValue
        } catch {
            return defaultValue
        }
    }
    
    return {
        overview: (() => {
            const found = data.find(item => item?.title?.en === 'Learn Arabic at Almujam – The Leading Arabic Language Center')
            return found || {
                title: { en: '', tr: '' },
                subtitle: { en: '', tr: '' },
                description: { en: '', tr: '' },
                content: { en: [], tr: [] },
                image: ''
            }
        })(),
        location: (() => {
            const found = data.find(item => item?.title?.en === 'An Ideal Location')
            return found || {
                title: { en: '', tr: '' },
                description: { en: '', tr: '' },
                content: { en: [], tr: [] },
                image: ''
            }
        })(),
        facilities: (() => {
            const found = data.find(item => item?.title?.en === 'Almujam Facilities')
            return found || {
                title: { en: '', tr: '' },
                subtitle: { en: '', tr: '' },
                description: { en: '', tr: '' },
                content: { en: [], tr: [] },
                image: ''
            }
        })(),
        methodology: (() => {
            const found = data.find(item => item?.title?.en?.includes('Methodology') || item?.title?.en === 'Methodology')
            return found || {
                title: { en: '', tr: '' },
                subtitle: { en: '', tr: '' },
                description: { en: '', tr: '' },
                approach: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                classes: { en: { title: '', description: '', sessions: [], features: [], extracurricular: { title: '', description: '', activities: [] } }, tr: { title: '', description: '', sessions: [], features: [], extracurricular: { title: '', description: '', activities: [] } } },
                tracks: { en: { title: '', description: '', programs: [], note: '' }, tr: { title: '', description: '', programs: [], note: '' } },
                image: ''
            }
        })(),
        campus: (() => {
            const found = data.find(item => item?.title?.en === 'Campus')
            return found || {
                title: { en: '', tr: '' },
                subtitle: { en: '', tr: '' },
                description: { en: '', tr: '' },
                location: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                facilities: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                detailed_facilities: { en: { title: '', facilities: [{ name: '', description: '' }] }, tr: { title: '', facilities: [{ name: '', description: '' }] } },
                image: ''
            }
        })(),
        global_atmosphere: (() => {
            const found = data.find(item => item?.title?.en?.includes('Global Atmosphere') || item?.title?.en === 'A Global Atmosphere')
            return found || {
                title: { en: '', tr: '' },
                subtitle: { en: '', tr: '' },
                description: { en: '', tr: '' },
                community: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                selection_criteria: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                seminars_workshops: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                image: ''
            }
        })(),
        why_jordan: (() => {
            const found = data.find(item => item?.title?.en === 'Why Jordan')
            return found || {
                title: { en: '', tr: '' },
                subtitle: { en: '', tr: '' },
                description: { en: '', tr: '' },
                immersion: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                dialect: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                culture: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                opportunities: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                strategic_location: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                image: ''
            }
        })(),
        academic_team: (() => {
            const found = data.find(item => item?.title?.en?.includes('Academic Team') || item?.title?.en === 'Our Academic Team')
            return found || {
                title: { en: '', tr: '' },
                subtitle: { en: '', tr: '' },
                description: { en: '', tr: '' },
                instructors: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                administration: { en: { title: '', content: [] }, tr: { title: '', content: [] } },
                commitment: { en: { title: '', description: '', features: [], conclusion: '', evaluation_process: { title: '', description: '', phases: [], conclusion: '' } }, tr: { title: '', description: '', features: [], conclusion: '', evaluation_process: { title: '', description: '', phases: [], conclusion: '' } } },
                image: ''
            }
        })()
    }
})

// Navigation sections for the page
const navigationSections = [
    { id: 'overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
    { id: 'location', title: { en: 'Location', tr: 'Lokasyon' } },
    { id: 'facilities', title: { en: 'Facilities', tr: 'Tesisler' } },
    { id: 'methodology', title: { en: 'Methodology', tr: 'Metodoloji' } },
    { id: 'campus', title: { en: 'Campus', tr: 'Kampüs' } },
    { id: 'global-atmosphere', title: { en: 'Global Atmosphere', tr: 'Küresel Hava' } },
    { id: 'why-jordan', title: { en: 'Why Jordan', tr: 'Neden Jordan' } },
    { id: 'academic-team', title: { en: 'Academic Team', tr: 'Akademik Takım' } },
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
        const url = new URL(window.location)
        url.searchParams.set('section', sectionId)
        window.history.replaceState({}, '', url)
    } else {
        console.warn(`Section with id "${sectionId}" not found`)
    }
}

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