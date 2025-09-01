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

        <!-- about section -->
<section v-for="(a, index) in about" :key="a">

    <div  class=" container mx-auto px-4 md:px-20 lg:px-10 max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-10 py-5 " >
        <div class="h-[400px] w-full order-1" :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'">
            <img :src="a.image" alt="" class="w-full rounded-4xl h-full object-cover">
        </div>

        <div class="flex flex-col gap-3 order-2 text-center md:text-start  md:mt-15 " :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'">
            <div class="text-3xl  font-bold line-clamp-2 text-text-color">
                {{ a.title[locale] }} 
            </div>
            <div class="rounded-full bg-web-primary w-30 h-1 flex items-center justify-center">

            </div>
            <div class="text-lg line-clamp-8 text-text-color/70">
                {{ a.description[locale] }} 
                </div>
        </div>
    </div>

    <div v-if="index === 0"   class=" container mx-auto px-4 md:px-20 lg:px-10  max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 py-5 ">
        <div v-for="f in about_features" :key="f" class="flex items-center justify-center">
        <div  class="w-full  max-w-[300px] text-center p-5 group lg:aspect-square lg:h-auto h-[200px] lg:bg-gray-300 overflow-hidden transition-all  duration-300 hover:lg:bg-web-primary bg-web-primary rounded-4xl flex items-center justify-center flex-col gap-2 relative">
            <img src="/watermarks/dal.png" alt="" class="w-[300px] lg:opacity-0 opacity-10 group-hover:opacity-10 transition-all duration-500  object-cover absolute top-0 -end-10">
            <IconsSchool v-if="f.icon === 'school'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <IconsBooks v-if="f.icon === 'class'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <IconsRepeat v-if="f.icon === 'layout'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <IconsWifi v-if="f.icon === 'wifi'" class="text-[4rem] hidden lg:block opacity-60 group-hover:-translate-y-100 transition-all duration-500  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <h2 class="text-2xl group-hover:translate-y-0 lg:translate-y-100 translate-y-0  transition-all duration-500 font-bold text-white">
                {{ f.title[locale] }}
            </h2>
            <div class="text-lg leading-tight group-hover:translate-y-0 lg:translate-y-100 translate-y-0  transition-all duration-500 text-white/70">
            {{ f.description[locale] }}
            </div>
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

const { data: about } = await useAsyncData('about', () => {
    return queryCollection('about').all()
})

const { data: about_features } = await useAsyncData('about_features', () => {
    return queryCollection('about_features').all()
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