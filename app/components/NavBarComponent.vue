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

                        <NuxtLink class="opacity-60 hover:opacity-100 transition-all duration-300" active-class="opacity-100" :to="{name: 'about'}">
                            {{ translations.find(t => t.key === 'why_almuajam').value[locale] }}
                        </NuxtLink>
                        
                        <NuxtLink class="opacity-60 hover:opacity-100 transition-all duration-300" active-class="opacity-100" :to="{name: 'academic-admissions'}">
                            {{ translations.find(t => t.key === 'academics_admissions').value[locale] }}
                        </NuxtLink> 
                        

                        <NuxtLink class="opacity-60 hover:opacity-100 transition-all duration-300" active-class="opacity-100" :to="{name: 'student-life'}">
                            {{ translations.find(t => t.key === 'student_life').value[locale] }}
                        </NuxtLink> 
                        
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
import { IconsLang } from '#components';


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

</script>

<style scoped>

</style>