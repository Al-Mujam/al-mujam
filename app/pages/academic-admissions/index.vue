<template>
    <div class="mt-[70px] w-full">

        <!-- hero section -->
        <div class="md:h-[50svh] h-max w-full  flex flex-col items-center justify-center overflow-hidden">
             <div class="bg-web-primary gap-3 md:h-[calc(100%-30px)] h-max p-10 w-[calc(100%-40px)] rounded-4xl relative flex flex-col items-center justify-center">
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

        <!-- Dynamic Section Navigation -->
        <div class="flex flex-wrap justify-center gap-3 mt-6">
          <button 
            v-for="section in getCurrentTabSections()" 
            :key="section.id"
            @click="scrollToSection(section.id)"
            class="px-4 cursor-pointer py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50"
          >
            {{ section.title[locale] }}
          </button>
        </div>
             </div>

        </div>

        <!-- Tabs -->
        <div class="w-full flex items-center justify-center">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-b border-gray-200 container max-w-[1400px] mx-4 md:mx-20 lg:mx-10 w-full h-max mb-5">
                <div @click="changeTab('academics')" :class="activeTab === 'academics' ? 'text-web-primary border-b-4 border-web-primary font-medium ' : 'text-text-color/50 border-b-4 border-transparent '" class="text-text-color cursor-pointer hover:text-web-primary py-4 flex items-center justify-center">
                    {{ translations.find(t => t.key === 'academics').value[locale] }}
                </div>
                <div @click="changeTab('admissions')" :class="activeTab === 'admissions' ? 'text-web-primary border-b-4 border-web-primary font-medium ' : 'text-text-color/50 border-b-4 border-transparent '" class="text-text-color cursor-pointer hover:text-web-primary py-4 flex items-center justify-center">
                    {{ translations.find(t => t.key === 'admissions').value[locale] }}
                </div>
                <div @click="changeTab('accommodation')" :class="activeTab === 'accommodation' ? 'text-web-primary border-b-4 border-web-primary font-medium ' : 'text-text-color/50 border-b-4 border-transparent '" class="text-text-color cursor-pointer hover:text-web-primary py-4 flex items-center justify-center">
                    {{ translations.find(t => t.key === 'accommodation').value[locale] }}
                </div>
                <div @click="changeTab('quran')" :class="activeTab === 'quran' ? 'text-web-primary border-b-4 border-web-primary font-medium ' : 'text-text-color/50 border-b-4 border-transparent '" class="text-text-color cursor-pointer hover:text-web-primary py-4 flex items-center justify-center">
                    Quran & Tajweed
                </div>
                <div @click="changeTab('noorani')" :class="activeTab === 'noorani' ? 'text-web-primary border-b-4 border-web-primary font-medium ' : 'text-text-color/50 border-b-4 border-transparent '" class="text-text-color cursor-pointer hover:text-web-primary py-4 flex items-center justify-center">
                    Noorani Qaida
                </div>
            </div>
        </div>

        <!-- Academics Tab -->
        <section id="academics" v-if="activeTab === 'academics'" class="container mx-auto px-4 md:px-20 pb-5 lg:px-10 max-w-[1280px]">
            <!-- Programs Overview -->
            <div id="programs-overview" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ academics.programs_overview.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ academics.programs_overview.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ academics.programs_overview.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in academics.programs_overview.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>
                    
                    <!-- Administration Section -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.programs_overview.administration[locale].title }}</h3>
                        <div class="space-y-4">
                            <div v-for="(feature, index) in academics.programs_overview.administration[locale].features" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ feature }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Assessment Section -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.programs_overview.assessment[locale].title }}</h3>
                        <p class="text-gray-700 mb-4">{{ academics.programs_overview.assessment[locale].description }}</p>
                        <div class="space-y-4">
                            <div v-for="(requirement, index) in academics.programs_overview.assessment[locale].requirements" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ requirement }}</span>
                            </div>
                        </div>
                        <p class="text-gray-600 mt-4 italic">{{ academics.programs_overview.assessment[locale].note }}</p>
                    </div>

                 
                </div>
            </div>

            <!-- Classical Arabic -->
            <div id="classical-arabic" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ academics.classical_arabic.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ academics.classical_arabic.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ academics.classical_arabic.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in academics.classical_arabic.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <!-- Foundational Skills -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.classical_arabic.foundational_skills[locale].title }}</h3>
                        <p class="text-gray-700 mb-4">{{ academics.classical_arabic.foundational_skills[locale].description }}</p>
                        <div class="space-y-4">
                            <div v-for="(skill, index) in academics.classical_arabic.foundational_skills[locale].skills" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ skill }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Advanced Mastery -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.classical_arabic.advanced_mastery[locale].title }}</h3>
                        <p class="text-gray-700 mb-4">{{ academics.classical_arabic.advanced_mastery[locale].description }}</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div v-for="(module, index) in academics.classical_arabic.advanced_mastery[locale].modules" :key="index" class="bg-gray-50 p-4 rounded-lg text-center">
                                <span class="text-gray-700 font-medium">{{ module }}</span>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">{{ academics.classical_arabic.advanced_mastery[locale].note }}</p>
                    </div>

                   
                </div>
            </div>

            <!-- Modern Standard Arabic -->
            <div id="modern-standard-arabic" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ academics.modern_standard_arabic.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ academics.modern_standard_arabic.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ academics.modern_standard_arabic.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in academics.modern_standard_arabic.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <!-- Curriculum -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.modern_standard_arabic.curriculum[locale].title }}</h3>
                        <p class="text-gray-700 mb-4">{{ academics.modern_standard_arabic.curriculum[locale].description }}</p>
                        <div class="space-y-4">
                            <div v-for="(feature, index) in academics.modern_standard_arabic.curriculum[locale].features" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ feature }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Advanced Proficiency -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.modern_standard_arabic.advanced_proficiency[locale].title }}</h3>
                        <p class="text-gray-700 mb-4">{{ academics.modern_standard_arabic.advanced_proficiency[locale].description }}</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div v-for="(module, index) in academics.modern_standard_arabic.advanced_proficiency[locale].modules" :key="index" class="bg-gray-50 p-4 rounded-lg text-center">
                                <span class="text-gray-700 font-medium">{{ module }}</span>
                            </div>
                        </div>
                        <p class="text-gray-600 italic">{{ academics.modern_standard_arabic.advanced_proficiency[locale].note }}</p>
                    </div>

                  
                </div>
            </div>

            <!-- Ammiyya -->
            <div id="ammiyya" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ academics.ammiyya.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ academics.ammiyya.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ academics.ammiyya.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in academics.ammiyya.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <!-- Course Structure -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.ammiyya.course_structure[locale].title }}</h3>
                        <div class="space-y-6">
                            <div v-for="(level, index) in academics.ammiyya.course_structure[locale].levels" :key="index" class="border-l-4 border-web-primary pl-6">
                                <h4 class="font-semibold text-lg text-gray-800 mb-2">{{ level.level }}: {{ level.title }}</h4>
                                <p class="text-gray-700">{{ level.description }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Learning Materials -->
                    <div class="mt-8 bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ academics.ammiyya.learning_materials[locale].title }}</h3>
                        <p class="text-gray-700">{{ academics.ammiyya.learning_materials[locale].description }}</p>
                    </div>

                  
                </div>
            </div>

            <!-- Online Programs -->
            <div id="online-programs" class="mb-10">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ academics.online_programs.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ academics.online_programs.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ academics.online_programs.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in academics.online_programs.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <!-- Programs -->
                    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div v-for="(program, index) in academics.online_programs.programs[locale]" :key="index" class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ program.title }}</h3>
                            <p class="text-gray-700">{{ program.description }}</p>
                        </div>
                    </div>

                    <!-- Test Arabic -->
                    <div class="mt-8 bg-web-primary rounded-2xl p-8 text-white text-center">
                        <h3 class="text-2xl font-bold mb-4">{{ academics.online_programs.test_arabic[locale].title }}</h3>
                        <p class="text-lg opacity-90 mb-6">{{ academics.online_programs.test_arabic[locale].description }}</p>
                        <NuxtLink external target="_blank" :to="settings.find(setting => setting.key === 'test_now_link').value[locale]" class="bg-white text-text-color px-8 py-3 rounded-full  hover:bg-gray-100 transition-all duration-300">
                            {{ translations.find(t => t.key === 'take_free_test').value[locale] }}
                        </NuxtLink>
                    </div>

                  
                </div>
            </div>
        </section>

        <!-- Admissions Tab -->
        <section id="admissions" v-if="activeTab === 'admissions'" class="container mx-auto px-4 md:px-20 pb-5 lg:px-10 max-w-[1280px]">
            <!-- Introduction Section -->
            <div id="introduction" class="mb-16">
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
                    
                   
                </div>
            </div>

            <!-- Program Dates Section -->
            <div id="program-dates" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
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
                                <h3 class="text-2xl font-bold text-web-primary mb-6">{{ translations.find(t => t.key === 'academic_calendar').value[locale] }}</h3>
                                <div class="space-y-4">
                                    <div v-for="(term, index) in admissions.program_dates.calendar[locale]" :key="index" class="border-l-4 border-web-primary pl-4">
                                        <h4 class="font-semibold text-lg text-gray-800">{{ term.term }}</h4>
                                        <p class="text-sm text-gray-600"> {{ translations.find(t => t.key === 'orientation').value[locale] }} {{ term.orientation }}</p>
                                        <p class="text-sm text-gray-600"> {{ translations.find(t => t.key === 'classes_final_exams').value[locale] }} {{ term.classes }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Private Tutoring -->
                        <div class="mt-12 bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ translations.find(t => t.key === 'private_tutoring').value[locale] }}</h3>
                            <div class="space-y-4 text-gray-700">
                                <p v-for="(paragraph, index) in admissions.program_dates.private_tutoring[locale]" :key="index" class="text-lg">
                                    {{ paragraph }}
                                </p>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>

            <!-- Tuition Section -->
            <div id="tuition" class="mb-16">
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
                        <div class="overflow-x-auto scrollbar-thin scrollbar-thumb-web-primary scrollbar-track-gray-200">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b-2 border-gray-200">
                                        <th class="text-left py-3 px-4 font-semibold">{{ translations.find(t => t.key === 'term').value[locale] }}</th>
                                        <th class="text-left py-3 px-4 font-semibold">{{ translations.find(t => t.key === 'cost_per_term').value[locale] }}</th>
                                        <th class="text-left py-3 px-4 font-semibold">{{ translations.find(t => t.key === 'discount').value[locale] }}</th>
                                        <th class="text-left py-3 px-4 font-semibold">{{ translations.find(t => t.key === 'savings').value[locale] }}</th>
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
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ translations.find(t => t.key === 'deposits_payment').value[locale] }}</h3>
                            <div class="space-y-3">
                                <div v-for="(deposit, index) in admissions.tuition.payment_info[locale].deposits" :key="index" class="flex items-start">
                                    <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span class="text-gray-700">{{ deposit }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ translations.find(t => t.key === 'payment_methods').value[locale] }}</h3>
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
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ translations.find(t => t.key === 'refund_policy_overview').value[locale] }}</h3>
                        <div class="overflow-x-auto scrollbar-thin scrollbar-thumb-web-primary scrollbar-track-gray-200">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b-2 border-gray-200">
                                        <th class="text-left py-3 px-4 font-semibold">{{ translations.find(t => t.key === 'timeline').value[locale] }}</th>
                                        <th class="text-left py-3 px-4 font-semibold">{{ translations.find(t => t.key === 'refund_eligibility').value[locale] }}</th>
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

                    <!-- Detailed Refund Policy -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ admissions.tuition.refund_details[locale].title }}</h3>
                        <p class="text-gray-700 mb-6">{{ admissions.tuition.refund_details[locale].description }}</p>
                        <div class="space-y-3">
                            <div v-for="(note, index) in admissions.tuition.refund_details[locale].important_notes" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ note }}</span>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </div>
        </section>

        <!-- Accommodation Tab -->
        <section id="accommodation" v-if="activeTab === 'accommodation'" class="container mx-auto px-4 md:px-20 pb-5 lg:px-10 max-w-[1280px]">
            <!-- Overview Section -->
            <div id="overview" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ accommodation.overview.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ accommodation.overview.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ accommodation.overview.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in accommodation.overview.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <NuxtLink external target="_blank" :to="accommodation.overview.button_link[locale]" class="web-btn">
                            {{ accommodation.overview.button_text[locale] }}
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Housing Request Process Section -->
            <div id="housing-process" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ accommodation.housing_process.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            {{ accommodation.housing_process.subtitle[locale] }}
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ accommodation.housing_process.description[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-6 text-gray-700 leading-relaxed mb-8">
                            <p v-for="(paragraph, index) in accommodation.housing_process.content[locale]" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>
                        
                       
                    </div>
                </div>
            </div>

            <!-- Housing Philosophy Section -->
            <div id="housing-philosophy" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ accommodation.housing_philosophy.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ accommodation.housing_philosophy.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ accommodation.housing_philosophy.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed mb-8">
                        <p v-for="(paragraph, index) in accommodation.housing_philosophy.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <!-- Common Challenges -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.housing_philosophy.common_challenges[locale].title }}</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="(challenge, index) in accommodation.housing_philosophy.common_challenges[locale].challenges" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ challenge }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Housing Options Section -->
            <div id="housing-options" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ accommodation.housing_options.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            {{ accommodation.housing_options.subtitle[locale] }}
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ accommodation.housing_options.description[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-6xl mx-auto">
                        <div class="space-y-6 text-gray-700 leading-relaxed mb-8">
                            <p v-for="(paragraph, index) in accommodation.housing_options.content[locale]" :key="index" class="text-lg">
                                {{ paragraph }}
                            </p>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Almujam Housing -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.housing_options.almujam_housing[locale].title }}</h3>
                                <p class="text-gray-600 mb-6">{{ accommodation.housing_options.almujam_housing[locale].subtitle }}</p>
                                <div class="space-y-3">
                                    <div v-for="(feature, index) in accommodation.housing_options.almujam_housing[locale].features" :key="index" class="flex items-start">
                                        <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span class="text-gray-700">{{ feature }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Independent Housing -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.housing_options.independent_housing[locale].title }}</h3>
                                <p class="text-gray-600 mb-6">{{ accommodation.housing_options.independent_housing[locale].subtitle }}</p>
                                <div class="space-y-3">
                                    <div v-for="(feature, index) in accommodation.housing_options.independent_housing[locale].features" :key="index" class="flex items-start">
                                        <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span class="text-gray-700">{{ feature }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recommendations Section -->
            <div id="recommendations" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ accommodation.recommendations.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ accommodation.recommendations.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ accommodation.recommendations.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <!-- Which Option is Right -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.recommendations.which_option_right[locale].title }}</h3>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-xl font-semibold text-gray-800 mb-4">{{ accommodation.recommendations.which_option_right[locale].almujam_housing.title }}</h4>
                                <div class="space-y-3">
                                    <div v-for="(feature, index) in accommodation.recommendations.which_option_right[locale].almujam_housing.features" :key="index" class="flex items-start">
                                        <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span class="text-gray-700">{{ feature }}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-xl font-semibold text-gray-800 mb-4">{{ accommodation.recommendations.which_option_right[locale].independent_housing.title }}</h4>
                                <div class="space-y-3">
                                    <div v-for="(feature, index) in accommodation.recommendations.which_option_right[locale].independent_housing.features" :key="index" class="flex items-start">
                                        <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span class="text-gray-700">{{ feature }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- First Term Recommendation -->
                    <div class="bg-gray-50 rounded-2xl p-8 mb-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.recommendations.first_term_recommendation[locale].title }}</h3>
                        <div class="space-y-4">
                            <p v-for="(paragraph, index) in accommodation.recommendations.first_term_recommendation[locale].content" :key="index" class="text-gray-700">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <!-- Facilitated Housing -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.recommendations.facilitated_housing[locale].title }}</h3>
                        <h4 class="text-xl font-semibold text-gray-800 mb-4">{{ accommodation.recommendations.facilitated_housing[locale].subtitle }}</h4>
                        <p class="text-gray-700 mb-6">{{ accommodation.recommendations.facilitated_housing[locale].description }}</p>
                        <div class="space-y-3 mb-6">
                            <div v-for="(feature, index) in accommodation.recommendations.facilitated_housing[locale].features" :key="index" class="flex items-start">
                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span class="text-gray-700">{{ feature }}</span>
                            </div>
                        </div>
                        <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
                            <p class="text-blue-800">{{ accommodation.recommendations.facilitated_housing[locale].contact_info }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Room Types Section -->
            <div id="room-types" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ accommodation.room_types.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            {{ accommodation.room_types.subtitle[locale] }}
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ accommodation.room_types.description[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-6xl mx-auto">
                        <!-- Room Types Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <div v-for="(room, index) in accommodation.room_types.room_types[locale]" :key="index" class="bg-white rounded-xl shadow-lg p-6">
                                <h4 class="text-xl font-bold text-web-primary mb-3">{{ room.name }}</h4>
                                <div class="space-y-2 text-sm text-gray-600 mb-4">
                                    <div><strong>{{ translations.find(t => t.key === 'size').value[locale] }}</strong> {{ room.size }}</div>
                                    <div><strong>{{ translations.find(t => t.key === 'features').value[locale] }}</strong> {{ room.features }}</div>
                                </div>
                                <p class="text-gray-700">{{ room.description }}</p>
                            </div>
                        </div>

                        <!-- Apartment Features -->
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.room_types.apartment_features[locale].title }}</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div v-for="(feature, index) in accommodation.room_types.apartment_features[locale].features" :key="index" class="flex items-start">
                                    <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span class="text-gray-700">{{ feature }}</span>
                                </div>
                            </div>
                            <p class="text-gray-600 italic">{{ accommodation.room_types.apartment_features[locale].bedroom_features }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pricing Section -->
            <div id="pricing" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ accommodation.pricing.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ accommodation.pricing.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ accommodation.pricing.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <!-- Pricing Table -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.pricing.pricing_table[locale].title }}</h3>
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b-2 border-gray-200">
                                        <th v-for="(header, index) in accommodation.pricing.pricing_table[locale].headers" :key="index" class="text-left py-3 px-4 font-semibold">
                                            {{ header }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, index) in accommodation.pricing.pricing_table[locale].rows" :key="index" class="border-b border-gray-100">
                                        <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="py-3 px-4" :class="cellIndex === 0 ? 'font-medium' : ''">
                                            {{ cell }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- What's Included/Excluded -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.pricing.included_in_rent[locale].title }}</h3>
                            <div class="space-y-4">
                                <div v-for="(item, index) in accommodation.pricing.included_in_rent[locale].items" :key="index" class="flex justify-between items-center">
                                    <span class="text-gray-700">{{ item.item }}</span>
                                    <span class="font-semibold text-web-primary">{{ item.cost }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.pricing.excluded_from_rent[locale].title }}</h3>
                            <div class="space-y-3">
                                <div v-for="(item, index) in accommodation.pricing.excluded_from_rent[locale].items" :key="index" class="flex items-start">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span class="text-gray-700">{{ item }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Daily Rates -->
                    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.pricing.daily_rates[locale].title }}</h3>
                        <p class="text-gray-600 mb-6">{{ accommodation.pricing.daily_rates[locale].description }}</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div v-for="(rate, index) in accommodation.pricing.daily_rates[locale].rates" :key="index" class="bg-gray-50 rounded-lg p-4 text-center">
                                <div class="font-semibold text-gray-800 mb-2">{{ rate.room_type }}</div>
                                <div class="text-2xl font-bold text-web-primary">{{ rate.daily_rate }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Checkout Fees -->
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-web-primary mb-6">{{ accommodation.pricing.checkout_fees[locale].title }}</h3>
                        <div class="space-y-4">
                            <div v-for="(item, index) in accommodation.pricing.checkout_fees[locale].items" :key="index" class="flex justify-between items-center">
                                <span class="text-gray-700">{{ item.item }}</span>
                                <span class="font-semibold text-web-primary">{{ item.fee }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Policies Section -->
            <div id="policies" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ accommodation.policies.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            {{ accommodation.policies.subtitle[locale] }}
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ accommodation.policies.description[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-6xl mx-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Right of Entry -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.policies.right_of_entry[locale].title }}</h3>
                                <p class="text-gray-700">{{ accommodation.policies.right_of_entry[locale].description }}</p>
                            </div>

                            <!-- Premature Departure -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.policies.premature_departure[locale].title }}</h3>
                                <p class="text-gray-700">{{ accommodation.policies.premature_departure[locale].description }}</p>
                            </div>

                            <!-- Limit of Liability -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.policies.limit_of_liability[locale].title }}</h3>
                                <p class="text-gray-700">{{ accommodation.policies.limit_of_liability[locale].description }}</p>
                            </div>

                            <!-- Eligibility -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.policies.eligibility[locale].title }}</h3>
                                <p class="text-gray-700">{{ accommodation.policies.eligibility[locale].description }}</p>
                            </div>
                        </div>

                        <!-- Cancellation Policy -->
                        <div class="bg-white rounded-2xl shadow-lg p-8 mt-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.policies.cancellation_policy[locale].title }}</h3>
                            <p class="text-gray-700 mb-6">{{ accommodation.policies.cancellation_policy[locale].description }}</p>
                            <div class="space-y-3">
                                <div v-for="(detail, index) in accommodation.policies.cancellation_policy[locale].details" :key="index" class="flex items-start">
                                    <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span class="text-gray-700">{{ detail }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Visitor Policy -->
                        <div class="bg-white rounded-2xl shadow-lg p-8 mt-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-4">{{ accommodation.policies.visitor_policy[locale].title }}</h3>
                            <p class="text-gray-700 mb-6">{{ accommodation.policies.visitor_policy[locale].description }}</p>
                            <div class="space-y-3">
                                <div v-for="(rule, index) in accommodation.policies.visitor_policy[locale].rules" :key="index" class="flex items-start">
                                    <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span class="text-gray-700">{{ rule }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quran Tab -->
        <section id="quran" v-if="activeTab === 'quran'" class="container mx-auto px-4 md:px-20 pb-5 lg:px-10 max-w-[1280px]">
            <!-- Overview Section -->
            <div id="quran-overview" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ quran.overview.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ quran.overview.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ quran.overview.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in quran.overview.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <div class="mt-8 text-center">
                        <NuxtLink external target="_blank" :to="quran.overview.button_link[locale]" class="web-btn">
                            {{ quran.overview.button_text[locale] }}
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Why Choose Section -->
            <div id="why-choose" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ quran.why_choose.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ quran.why_choose.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ quran.why_choose.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Certified Instructors -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ quran.why_choose.why_choose[locale].instructors.title }}</h3>
                            <p class="text-gray-700">{{ quran.why_choose.why_choose[locale].instructors.content }}</p>
                        </div>

                        <!-- Personalized Learning -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ quran.why_choose.why_choose[locale].personalized_learning.title }}</h3>
                            <p class="text-gray-700">{{ quran.why_choose.why_choose[locale].personalized_learning.content }}</p>
                        </div>

                        <!-- Flexible Options -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ quran.why_choose.why_choose[locale].flexible_options.title }}</h3>
                            <p class="text-gray-700">{{ quran.why_choose.why_choose[locale].flexible_options.content }}</p>
                        </div>

                        <!-- Correct Pronunciation -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ quran.why_choose.why_choose[locale].correct_pronunciation.title }}</h3>
                            <p class="text-gray-700">{{ quran.why_choose.why_choose[locale].correct_pronunciation.content }}</p>
                        </div>

                        <!-- Supportive Community -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ quran.why_choose.why_choose[locale].supportive_community.title }}</h3>
                            <p class="text-gray-700">{{ quran.why_choose.why_choose[locale].supportive_community.content }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Programs Section -->
            <div id="quran-programs" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ quran.programs.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        Our Quran & Tajweed Programs
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ quran.programs.subtitle[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="space-y-8">
                        <div v-for="(level, index) in quran.programs.programs[locale].levels" :key="index" class="bg-white rounded-2xl shadow-lg p-8">
                            <div class="flex flex-col lg:flex-row gap-6">
                                <div class="lg:w-1/3">
                                    <h3 class="text-2xl font-bold text-web-primary mb-2">{{ level.level }}: {{ level.title }}</h3>
                                    <p class="text-gray-600 italic">{{ level.prerequisites }}</p>
                                </div>
                                <div class="lg:w-2/3">
                                    <div class="mb-4">
                                        <h4 class="font-semibold text-lg mb-2">Focus Areas:</h4>
                                        <div class="space-y-2">
                                            <div v-for="(area, areaIndex) in level.focus_areas" :key="areaIndex" class="flex items-start">
                                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <span class="text-gray-700">{{ area }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <h4 class="font-semibold text-lg mb-2">Perfect for:</h4>
                                        <p class="text-gray-700">{{ level.perfect_for }}</p>
                                    </div>
                                    <div class="mb-4">
                                        <h4 class="font-semibold text-lg mb-2">Learning Outcomes:</h4>
                                        <div class="space-y-2">
                                            <div v-for="(outcome, outcomeIndex) in level.learning_outcomes" :key="outcomeIndex" class="flex items-start">
                                                <div class="w-2 h-2 bg-web-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <span class="text-gray-700">{{ outcome }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <span class="font-semibold text-web-primary">Duration: </span>
                                        <span class="text-gray-700">{{ level.duration }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Class Format Comparison -->
            <div id="class-formats" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ quran.class_format_comparison.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            Class Format Comparison
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            Choose the Right Learning Environment for You
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-6xl mx-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Private Classes -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-6">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.title }}</h3>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Schedule Flexibility</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.schedule_flexibility }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Learning Pace</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.learning_pace }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Curriculum Focus</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.curriculum_focus }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Teacher Interaction</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.teacher_interaction }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Peer Learning</span>
                                        <span class="text-gray-500">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.peer_learning }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Cost Effectiveness</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.cost_effectiveness }}</span>
                                    </div>
                                    <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                                        <span class="font-semibold text-blue-800">Best Suited For:</span>
                                        <span class="text-blue-700 ml-2">{{ quran.class_format_comparison.class_format_comparison[locale].private_classes.best_suited_for }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Group Classes -->
                            <div class="bg-white rounded-2xl shadow-lg p-8">
                                <h3 class="text-2xl font-bold text-web-primary mb-6">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.title }}</h3>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Schedule Flexibility</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.schedule_flexibility }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Learning Pace</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.learning_pace }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Curriculum Focus</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.curriculum_focus }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Teacher Interaction</span>
                                        <span class="text-web-primary">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.teacher_interaction }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Peer Learning</span>
                                        <span class="text-green-600">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.peer_learning }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="font-medium">Cost Effectiveness</span>
                                        <span class="text-green-600">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.cost_effectiveness }}</span>
                                    </div>
                                    <div class="mt-4 p-3 bg-green-50 rounded-lg">
                                        <span class="font-semibold text-green-800">Best Suited For:</span>
                                        <span class="text-green-700 ml-2">{{ quran.class_format_comparison.class_format_comparison[locale].group_classes.best_suited_for }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Success Stories -->
            <div id="success-stories" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ quran.success_stories.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        Student Success Stories
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ quran.success_stories.subtitle[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="(story, index) in quran.success_stories.success_stories[locale]" :key="index" class="bg-white rounded-2xl shadow-lg p-6">
                            <div class="mb-4">
                                <div class="text-4xl text-web-primary mb-2">"</div>
                                <p class="text-gray-700 italic leading-relaxed">{{ story.testimony }}</p>
                                <div class="text-4xl text-web-primary rotate-180 mt-2"></div>
                            </div>
                            <div class="border-t pt-4">
                                <div class="font-semibold text-web-primary">{{ story.author }}</div>
                                <div class="text-sm text-gray-600">{{ story.country }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FAQ Section -->
            <div id="faq" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ quran.faq.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            Frequently Asked Questions
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ quran.faq.subtitle[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-6">
                            <div v-for="(item, index) in quran.faq.faq[locale]" :key="index" class="bg-white rounded-2xl shadow-lg p-6">
                                <h3 class="text-xl font-bold text-web-primary mb-4">{{ item.question }}</h3>
                                <div class="space-y-2">
                                    <p v-for="(answer, answerIndex) in item.answer" :key="answerIndex" class="text-gray-700">
                                        {{ answer }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 text-center">
                            <NuxtLink external target="_blank" :to="quran.faq.button_link[locale]" class="web-btn">
                                {{ quran.faq.button_text[locale] }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Noorani Tab -->
        <section id="noorani" v-if="activeTab === 'noorani'" class="container mx-auto px-4 md:px-20 pb-5 lg:px-10 max-w-[1280px]">
            <!-- Overview Section -->
            <div id="noorani-overview" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ noorani.overview.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        {{ noorani.overview.subtitle[locale] }}
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ noorani.overview.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p v-for="(paragraph, index) in noorani.overview.content[locale]" :key="index" class="text-lg">
                            {{ paragraph }}
                        </p>
                    </div>

                    <div class="mt-8 text-center">
                        <NuxtLink external target="_blank" :to="noorani.overview.button_link[locale]" class="web-btn">
                            {{ noorani.overview.button_text[locale] }}
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Understanding Noorani Section -->
            <div id="understanding-noorani" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ noorani.understanding_noorani.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            Your Gateway to Quranic Reading
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ noorani.understanding_noorani.description[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-6xl mx-auto">
                        <div class="mb-8">
                            <p v-for="(paragraph, index) in noorani.understanding_noorani.understanding_noorani[locale].introduction" :key="index" class="text-gray-700 text-lg leading-relaxed">
                                {{ paragraph }}
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Arabic Alphabet Mastery -->
                            <div class="bg-white rounded-2xl shadow-lg p-6">
                                <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.understanding_noorani.understanding_noorani[locale].alphabet_mastery.title }}</h3>
                                <p class="text-gray-700">{{ noorani.understanding_noorani.understanding_noorani[locale].alphabet_mastery.content }}</p>
                            </div>

                            <!-- Vowel Systems -->
                            <div class="bg-white rounded-2xl shadow-lg p-6">
                                <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.understanding_noorani.understanding_noorani[locale].vowel_systems.title }}</h3>
                                <p class="text-gray-700">{{ noorani.understanding_noorani.understanding_noorani[locale].vowel_systems.content }}</p>
                            </div>

                            <!-- Letter Connection -->
                            <div class="bg-white rounded-2xl shadow-lg p-6">
                                <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.understanding_noorani.understanding_noorani[locale].letter_connection.title }}</h3>
                                <p class="text-gray-700">{{ noorani.understanding_noorani.understanding_noorani[locale].letter_connection.content }}</p>
                            </div>

                            <!-- Foundation Tajweed -->
                            <div class="bg-white rounded-2xl shadow-lg p-6">
                                <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.understanding_noorani.understanding_noorani[locale].foundation_tajweed.title }}</h3>
                                <p class="text-gray-700">{{ noorani.understanding_noorani.understanding_noorani[locale].foundation_tajweed.content }}</p>
                            </div>

                            <!-- Progressive Practice -->
                            <div class="bg-white rounded-2xl shadow-lg p-6">
                                <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.understanding_noorani.understanding_noorani[locale].progressive_practice.title }}</h3>
                                <p class="text-gray-700">{{ noorani.understanding_noorani.understanding_noorani[locale].progressive_practice.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Who Benefits Section -->
            <div id="who-benefits" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ noorani.who_benefits.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        Designed for Learners of All Backgrounds
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ noorani.who_benefits.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Complete Beginners -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.who_benefits.who_benefits[locale].complete_beginners.title }}</h3>
                            <p class="text-gray-700">{{ noorani.who_benefits.who_benefits[locale].complete_beginners.content }}</p>
                        </div>

                        <!-- Children Learners -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.who_benefits.who_benefits[locale].children_learners.title }}</h3>
                            <p class="text-gray-700">{{ noorani.who_benefits.who_benefits[locale].children_learners.content }}</p>
                        </div>

                        <!-- Adult New Muslims -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.who_benefits.who_benefits[locale].adult_new_muslims.title }}</h3>
                            <p class="text-gray-700">{{ noorani.who_benefits.who_benefits[locale].adult_new_muslims.content }}</p>
                        </div>

                        <!-- Non-Arabic Muslims -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.who_benefits.who_benefits[locale].non_arabic_muslims.title }}</h3>
                            <p class="text-gray-700">{{ noorani.who_benefits.who_benefits[locale].non_arabic_muslims.content }}</p>
                        </div>

                        <!-- Pronunciation Improvement -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.who_benefits.who_benefits[locale].pronunciation_improvement.title }}</h3>
                            <p class="text-gray-700">{{ noorani.who_benefits.who_benefits[locale].pronunciation_improvement.content }}</p>
                        </div>

                        <!-- Parents with Children -->
                        <div class="bg-white rounded-2xl shadow-lg p-6">
                            <h3 class="text-xl font-bold text-web-primary mb-4">{{ noorani.who_benefits.who_benefits[locale].parents_with_children.title }}</h3>
                            <p class="text-gray-700">{{ noorani.who_benefits.who_benefits[locale].parents_with_children.content }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Curriculum Section -->
            <div id="noorani-curriculum" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ noorani.curriculum.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            Systematic Learning Progression
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ noorani.curriculum.description[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-6xl mx-auto">
                        <div class="mb-8">
                            <p v-for="(paragraph, index) in noorani.curriculum.curriculum[locale].introduction" :key="index" class="text-gray-700 text-lg leading-relaxed">
                                {{ paragraph }}
                            </p>
                        </div>

                        <!-- Curriculum Table -->
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                        <tr class="bg-web-primary text-white">
                                            <th class="text-left py-4 px-6 font-semibold">Learning Stage</th>
                                            <th class="text-left py-4 px-6 font-semibold">Focus Areas</th>
                                            <th class="text-left py-4 px-6 font-semibold">Skills Developed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(stage, index) in noorani.curriculum.curriculum[locale].stages" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'">
                                            <td class="py-4 px-6 font-semibold text-web-primary">{{ stage.stage }}</td>
                                            <td class="py-4 px-6 text-gray-700">{{ stage.focus_areas }}</td>
                                            <td class="py-4 px-6 text-gray-700">{{ stage.skills_developed }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Learning Outcomes Section -->
            <div id="learning-outcomes" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ noorani.learning_outcomes.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        What Students Achieve
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ noorani.learning_outcomes.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="mb-8">
                        <p v-for="(paragraph, index) in noorani.learning_outcomes.learning_outcomes[locale].introduction" :key="index" class="text-gray-700 text-lg leading-relaxed">
                            {{ paragraph }}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Immediate Skills -->
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ noorani.learning_outcomes.learning_outcomes[locale].immediate_skills.title }}</h3>
                            <p class="text-gray-700">{{ noorani.learning_outcomes.learning_outcomes[locale].immediate_skills.content }}</p>
                        </div>

                        <!-- Confidence and Independence -->
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ noorani.learning_outcomes.learning_outcomes[locale].confidence_independence.title }}</h3>
                            <p class="text-gray-700">{{ noorani.learning_outcomes.learning_outcomes[locale].confidence_independence.content }}</p>
                        </div>

                        <!-- Preparation for Advanced Study -->
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-6">{{ noorani.learning_outcomes.learning_outcomes[locale].preparation_advanced.title }}</h3>
                            <p class="text-gray-700">{{ noorani.learning_outcomes.learning_outcomes[locale].preparation_advanced.content }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Success Stories -->
            <div id="noorani-success-stories" class="mb-16 w-full bg-gray-50 py-12 rounded-2xl">
                <div class="container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px]">
                    <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                        <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                            {{ noorani.success_stories.title[locale] }}
                        </div>
                        <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                            Real Stories from Our Noorani Qaida Students
                        </div>
                        <div class="text-xl text-center text-gray-600 max-w-3xl">
                            {{ noorani.success_stories.description[locale] }}
                        </div>
                        <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                    </div>

                    <div class="max-w-6xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="(story, index) in noorani.success_stories.success_stories[locale]" :key="index" class="bg-white rounded-2xl shadow-lg p-6">
                                <div class="mb-4">
                                    <div class="text-4xl text-web-primary mb-2">"</div>
                                    <p class="text-gray-700 italic leading-relaxed">{{ story.testimony }}</p>
                                    <div class="text-4xl text-web-primary rotate-180 mt-2"></div>
                                </div>
                                <div class="border-t pt-4">
                                    <div class="font-semibold text-web-primary">{{ story.author }}</div>
                                    <div class="text-sm text-gray-600">{{ story.country }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Call to Action -->
            <div id="begin-journey" class="mb-16 bg-web-primary rounded-2xl p-8 text-white text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Begin Your Quranic Reading Journey Today</h2>
                <p class="text-lg opacity-90 mb-8 max-w-4xl mx-auto">
                    Learning to read the Holy Quran is one of the most rewarding educational journeys you can undertake. It opens doors not only to understanding the sacred text but also to participating more fully in Islamic worship and connecting with the global Muslim community.
                </p>
                <p class="text-lg opacity-90 mb-8 max-w-4xl mx-auto">
                    Our Noorani Qaida course provides the perfect starting point for this lifelong journey. Whether you are learning for yourself, your children, or your family together, we are committed to providing the patient, expert guidance you need to succeed.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink external target="_blank" to="#" class="bg-white text-web-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold">
                        Enroll in Noorani Qaida
                    </NuxtLink>
                    <NuxtLink external target="_blank" to="#" class="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-web-primary transition-all duration-300 font-semibold">
                        Schedule a Trial Class
                    </NuxtLink>
                </div>
            </div>

            <!-- Course Information -->
            <div id="course-information" class="mb-16">
                <div class="flex flex-col gap-3 items-center justify-center w-[90%] md:w-full mx-auto mb-12">
                    <div class="text-lg md:text-xl font-bold text-center text-web-primary uppercase tracking-wider">
                        {{ noorani.course_info.title[locale] }}
                    </div>
                    <div class="text-4xl md:text-5xl font-bold text-center text-text-color">
                        Everything You Need to Know
                    </div>
                    <div class="text-xl text-center text-gray-600 max-w-3xl">
                        {{ noorani.course_info.description[locale] }}
                    </div>
                    <div class="w-20 h-1 bg-web-primary rounded-full"></div>
                </div>

                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div v-for="(info, index) in noorani.course_info.course_info[locale]" :key="index" class="bg-white rounded-2xl shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-web-primary mb-4">{{ info.title }}</h3>
                            <p class="text-gray-700 leading-relaxed">{{ info.content }}</p>
                        </div>
                    </div>

                    <div class="mt-12 text-center">
                        <NuxtLink external target="_blank" :to="noorani.course_info.button_link[locale]" class="web-btn">
                            {{ noorani.course_info.button_text[locale] }}
                        </NuxtLink>
                    </div>
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

// Import useRoute for handling query parameters
// This allows us to handle URLs like: /academic-admissions?tab=admissions&section=admissions
const route = useRoute()
const router = useRouter()

watch(() => route.query, (newQuery) => {
    if (newQuery.section) {
        scrollToSection(newQuery.section)
    }
})
const activeTab = ref(route.query.tab || 'academics')

const changeTab = (tab) => {
    activeTab.value = tab
    // Check if current section is valid for the new tab
    const currentSection = route.query.section
    const query = { tab: tab }

    // Only preserve section if it belongs to the new tab
    if (currentSection) {
        const validSections = getTabSections(tab).map(s => s.id)
        if (validSections.includes(currentSection)) {
            query.section = currentSection
        }
    }

    router.replace({ query })
}

// Function to get sections based on a specific tab
const getTabSections = (tab) => {
    switch (tab) {
        case 'academics':
            return [
                { id: 'programs-overview', title: { en: 'Programs Overview', tr: 'Program Genel Bakış' } },
                { id: 'classical-arabic', title: { en: 'Classical Arabic', tr: 'Klasik Arapça' } },
                { id: 'modern-standard-arabic', title: { en: 'Modern Standard Arabic', tr: 'Modern Standart Arapça' } },
                { id: 'ammiyya', title: { en: 'Jordanian Ammiyya', tr: 'Ürdün Ammiyya' } },
                { id: 'online-programs', title: { en: 'Online Programs', tr: 'Çevrimiçi Programlar' } }
            ]
        case 'admissions':
            return [
                { id: 'introduction', title: { en: 'Introduction', tr: 'Giriş' } },
                { id: 'program-dates', title: { en: 'Program Dates', tr: 'Program Tarihleri' } },
                { id: 'tuition', title: { en: 'Tuition', tr: 'Öğrenim Ücreti' } }
            ]
        case 'accommodation':
            return [
                { id: 'overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
                { id: 'housing-process', title: { en: 'Housing Process', tr: 'Konaklama Süreci' } },
                { id: 'housing-philosophy', title: { en: 'Housing Philosophy', tr: 'Konaklama Felsefesi' } },
                { id: 'housing-options', title: { en: 'Housing Options', tr: 'Konaklama Seçenekleri' } },
                { id: 'recommendations', title: { en: 'Recommendations', tr: 'Öneriler' } },
                { id: 'room-types', title: { en: 'Room Types', tr: 'Oda Türleri' } },
                { id: 'pricing', title: { en: 'Pricing', tr: 'Fiyatlandırma' } },
                { id: 'policies', title: { en: 'Policies', tr: 'Politikalar' } }
            ]
        case 'quran':
            return [
                { id: 'quran-overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
                { id: 'why-choose', title: { en: 'Why Choose Almujam', tr: 'Neden Almujam' } },
                { id: 'quran-programs', title: { en: 'Programs', tr: 'Programlar' } },
                { id: 'class-formats', title: { en: 'Class Formats', tr: 'Ders Formatları' } },
                { id: 'success-stories', title: { en: 'Success Stories', tr: 'Başarı Hikayeleri' } },
                { id: 'faq', title: { en: 'FAQ', tr: 'SSS' } }
            ]
        case 'noorani':
            return [
                { id: 'noorani-overview', title: { en: 'Overview', tr: 'Genel Bakış' } },
                { id: 'understanding-noorani', title: { en: 'Understanding Noorani Qaida', tr: 'Noorani Kaide\'yi Anlamak' } },
                { id: 'who-benefits', title: { en: 'Who Benefits', tr: 'Kimler Faydalanır' } },
                { id: 'noorani-curriculum', title: { en: 'Curriculum', tr: 'Müfredat' } },
                { id: 'learning-outcomes', title: { en: 'Learning Outcomes', tr: 'Öğrenme Çıktıları' } },
                { id: 'noorani-success-stories', title: { en: 'Success Stories', tr: 'Başarı Hikayeleri' } },
                { id: 'begin-journey', title: { en: 'Begin Your Journey', tr: 'Yolculuğunuza Başlayın' } },
                { id: 'course-information', title: { en: 'Course Information', tr: 'Kurs Bilgileri' } }
            ]
        default:
            return []
    }
}

// Function to get sections based on current active tab
const getCurrentTabSections = () => {
    return getTabSections(activeTab.value)
}

// Function to scroll to a specific section within the current tab
const scrollToSection = (sectionId) => {
    // First, ensure we're on the correct tab
    const sectionTab = getSectionTab(sectionId)
    if (sectionTab && activeTab.value !== sectionTab) {
        activeTab.value = sectionTab
        // Wait for the tab to render before scrolling
        nextTick(() => {
            setTimeout(() => {
                scrollToSectionInternal(sectionId)
            }, 100)
        })
        return
    }
    
    // If we're already on the correct tab, scroll immediately
    scrollToSectionInternal(sectionId)
}

// Helper function to determine which tab a section belongs to
const getSectionTab = (sectionId) => {
    const academicsSections = ['programs-overview', 'classical-arabic', 'modern-standard-arabic', 'ammiyya', 'online-programs']
    const admissionsSections = ['introduction', 'program-dates', 'tuition']
    const accommodationSections = ['overview', 'housing-process', 'housing-philosophy', 'housing-options', 'recommendations', 'room-types', 'pricing', 'policies']
    const quranSections = ['quran-overview', 'why-choose', 'quran-programs', 'class-formats', 'success-stories', 'faq']
    const nooraniSections = ['noorani-overview', 'understanding-noorani', 'who-benefits', 'noorani-curriculum', 'learning-outcomes', 'noorani-success-stories', 'begin-journey', 'course-information']

    if (academicsSections.includes(sectionId)) return 'academics'
    if (admissionsSections.includes(sectionId)) return 'admissions'
    if (accommodationSections.includes(sectionId)) return 'accommodation'
    if (quranSections.includes(sectionId)) return 'quran'
    if (nooraniSections.includes(sectionId)) return 'noorani'
    return null
}

// Internal scroll function that actually performs the scroll
const scrollToSectionInternal = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        
        // Add a subtle highlight effect to the scrolled section
        element.classList.add('scroll-highlight')
        setTimeout(() => {
            element.classList.remove('scroll-highlight')
        }, 2000)
        
        // Update URL without page reload, preserving the tab
        router.replace({ query: { section: sectionId } })
    } else {
        console.warn(`Section with id "${sectionId}" not found`)
    }
}

const {locale} = useI18n()

const { data: translations } = await useAsyncData('translations', () => {
    return queryCollection('translations').all()
})

const { data: settings } = await useAsyncData('settings', () => {
    return queryCollection('general').all()
})

// Fetch academics data
const { data: academicsData } = await useAsyncData('academics', () => {
    return queryCollection('academics').all()
})

// Fetch admissions data
const { data: admissionsData } = await useAsyncData('admissions', () => {
    return queryCollection('admissions').all()
})

// Fetch accommodation data
const { data: accommodationData } = await useAsyncData('accommodation', () => {
    return queryCollection('accommodation').all()
})

// Fetch quran data
const { data: quranData } = await useAsyncData('quran', () => {
    return queryCollection('quran').all()
})

// Fetch noorani data
const { data: nooraniData } = await useAsyncData('noorani', () => {
    return queryCollection('noorani').all()
})

// Organize academics data by type
const academics = computed(() => {
    const data = academicsData.value || []
    return {
        programs_overview: data.find(item => item.title?.en === 'Program Information') || {},
        classical_arabic: data.find(item => item.title?.en === 'Classical Arabic Program') || {},
        modern_standard_arabic: data.find(item => item.title?.en === 'Modern Standard Arabic Program') || {},
        ammiyya: data.find(item => item.title?.en === 'Jordanian Ammiyya (Levantine Dialect) Course') || {},
        online_programs: data.find(item => item.title?.en === 'Online Arabic Courses at Almujam') || {}
    }
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

// Organize accommodation data by type
const accommodation = computed(() => {
    const data = accommodationData.value || []
    return {
        overview: data.find(item => item.title?.en === 'Student Housing at Almujam') || {},
        housing_process: data.find(item => item.title?.en === 'The Housing Request Process') || {},
        housing_philosophy: data.find(item => item.title?.en === 'Our Approach to Housing') || {},
        housing_options: data.find(item => item.title?.en === 'Housing Options at Almujam') || {},
        recommendations: data.find(item => item.title?.en === 'Recommendations and Special Programs') || {},
        room_types: data.find(item => item.title?.en === 'Room Types & Descriptions') || {},
        pricing: data.find(item => item.title?.en === 'Housing Costs and Payments') || {},
        policies: data.find(item => item.title?.en === 'Housing Policies and Guidelines') || {}
    }
})

// Organize quran data by type
const quran = computed(() => {
    const data = quranData.value || []
    return {
        overview: data.find(item => item.title?.en === 'Quran Recitation & Tajweed Classes') || {},
        why_choose: data.find(item => item.title?.en === 'Why Choose Almujam for Your Quran Studies?') || {},
        programs: data.find(item => item.title?.en === 'Our Quran & Tajweed Programs') || {},
        class_format_comparison: data.find(item => item.title?.en === 'Class Format Comparison') || {},
        success_stories: data.find(item => item.title?.en === 'Student Success Stories') || {},
        faq: data.find(item => item.title?.en === 'Frequently Asked Questions') || {}
    }
})

// Organize noorani data by type
const noorani = computed(() => {
    const data = nooraniData.value || []
    return {
        overview: data.find(item => item.title?.en === 'Noorani Qaida Course for Beginners') || {},
        understanding_noorani: data.find(item => item.title?.en === 'Understanding Noorani Qaida') || {},
        who_benefits: data.find(item => item.title?.en === 'Who Benefits Most from This Course?') || {},
        curriculum: data.find(item => item.title?.en === 'Our Comprehensive Step-by-Step Curriculum') || {},
        learning_outcomes: data.find(item => item.title?.en === 'Learning Outcomes and Progression Path') || {},
        success_stories: data.find(item => item.title?.en === 'Inspiring Student Transformations') || {},
        course_info: data.find(item => item.title?.en === 'Course Information and Support') || {}
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
    // Wait a bit for the page to fully render and tab to be active
    setTimeout(() => {
      // Use the new scrollToSection function which handles tab switching automatically
      scrollToSection(sectionQuery)
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