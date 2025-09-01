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
                        <NuxtLink :to="{name: 'about'}" class="web-btn-nav text-md px-2 hover:px-5" active-class="bg-web-primary/10 px-5" >
                            {{ translations.find(t => t.key === 'why_almuajam').value[locale] }}
                        </NuxtLink>
                        <NuxtLink :to="{name: 'academic-admissions'}" class="web-btn-nav text-md px-2 hover:px-5" active-class="bg-web-primary/10 px-5" >
                            {{ translations.find(t => t.key === 'academics_admissions').value[locale] }}
                        </NuxtLink>
                        <NuxtLink :to="{name: 'student-life'}" class="web-btn-nav text-md px-2 hover:px-5 " active-class="bg-web-primary/10 px-5" >
                            {{ translations.find(t => t.key === 'student_life').value[locale] }}
                        </NuxtLink>
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

</script>

<style scoped>

</style>