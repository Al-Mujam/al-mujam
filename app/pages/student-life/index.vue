<template>
    <div class="mt-[70px] w-full">

        <!-- hero section -->
        <div class="h-[50svh] w-full  flex flex-col items-center justify-center overflow-hidden">
             <div class="bg-web-primary gap-3 h-[calc(100%-30px)] w-[calc(100%-40px)] rounded-4xl relative flex flex-col items-center justify-center">
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
             </div>

        </div>

<div class="w-full flex items-center justify-center">
        <div class="  grid grid-cols-2  gap-0 border-b border-gray-200  container max-w-[1000px] mx-4 md:mx-20 lg:mx-10 w-full h-max mb-5">
            <div @click="changeTab('blogs')" :class="activeTab === 'blogs' ? 'text-web-primary border-b-4  border-web-primary font-medium ' : 'text-text-color/50 border-b-4 border-transparent '" class=" text-text-color cursor-pointer hover:text-web-primary  py-4 flex items-center justify-center">
                {{ translations.find(t => t.key === 'blogs').value[locale] }}
            </div>
            <div @click="changeTab('faq')" :class="activeTab === 'faq' ? 'text-web-primary border-b-4  border-web-primary  font-medium' : 'text-text-color/50 border-b-4 border-transparent '" class=" text-text-color cursor-pointer hover:text-web-primary  py-4 flex items-center justify-center">
                {{ translations.find(t => t.key === 'faq').value[locale] }}

            </div>
        </div>

</div>



<section v-show="activeTab === 'blogs'" class="container mx-auto px-4 md:px-20 pb-5 lg:px-10 max-w-[1280px]">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <NuxtLink v-for="b in blogs" :key="b.id" :to="{name: 'blog', params: {id: b.blog_id}}" class="w-full shadow-web hover:scale-103 stransition-all duration-300 p-3  bg-white rounded-4xl flex flex-col justify-between gap-5">
            <div class="w-full h-max flex flex-col gap-2">
                

            <div class="w-full h-full">
                <img :src="b.image" alt="" class="w-full max-h-[200px] h-full object-cover rounded-t-4xl rounded-b-lg">
            </div>
            <div class="w-full h-full flex flex-col gap-1">
                <h2 class="text-md  line-clamp-2">{{ b.title[locale] }}</h2>
                <h2 class="text-xs opacity-50  line-clamp-2">{{ b.subtitle[locale] }}</h2>
            </div>
            </div>
            <div class="web-btn flex items-center justify-center line-clamp-2">
                {{ translations.find(t => t.key === 'read_more').value[locale] }}
            </div>
        </NuxtLink>
    </div>
</section>



<section v-show="activeTab === 'faq'" class="container text-text-color mx-auto px-4 md:px-20 pb-5 lg:px-10 max-w-[1280px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div v-for="(q,idx) in faq" :key="idx" class="collapse collapse-arrow bg-base-100 border h-max border-base-300">
  <input type="radio" name="my-accordion-2" :checked="idx === 0" />
  <div class="collapse-title font-semibold">{{ q.question[locale] }}</div>
  <div class="collapse-content text-sm flex flex-col gap-5">
    <div v-for="a in q.answer[locale]" :key="a">
        <div v-for="t in a.text" :key="t">{{ t }}</div>
    </div>
  </div>
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

const { data: faq } = await useAsyncData('faq', () => {
    return queryCollection('faq').all()
})

definePageMeta({
    name: 'student-life'
})

const route = useRoute()
const router = useRouter()


const activeTab = ref( route.query.tab || 'blogs')

const changeTab = (tab) => {
    activeTab.value = tab
    router.replace({query: {tab: tab}})
}

const {locale} = useI18n()


const { data: translations } = await useAsyncData('translations', () => {
    return queryCollection('translations').all()
})

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